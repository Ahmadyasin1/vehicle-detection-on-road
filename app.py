import os
from flask import Flask, request, render_template, send_from_directory, jsonify
from ultralytics import YOLO
import cv2
import uuid
import threading
import time

# Create Flask app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/results'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Load YOLO model
# Use either your .onnx or .pt file
MODEL_PATH = 'best.pt'  # or 'yolov8_model.onnx'
model = YOLO(MODEL_PATH)

video_progress = {}

@app.route('/')
def home():
    return render_template('index.html')  # Optional HTML form

@app.route('/predict_image', methods=['POST'])
def predict_image():
    if 'file' not in request.files:
        return render_template('result.html', error='No file uploaded', result_url=None, is_image=True)
    file = request.files['file']
    if file.filename == '':
        return render_template('result.html', error='Empty file name', result_url=None, is_image=True)
    file_ext = file.filename.split('.')[-1]
    input_filename = f"{uuid.uuid4()}.{file_ext}"
    input_path = os.path.join(app.config['UPLOAD_FOLDER'], input_filename)
    file.save(input_path)
    if file_ext.lower() not in ['jpg', 'jpeg', 'png']:
        return render_template('result.html', error='Unsupported image format', result_url=None, is_image=True)
    result_path = process_image(input_path)
    result_url = f"/static/results/{os.path.basename(result_path)}"
    return render_template('result.html', result_url=result_url, is_image=True, error=None)

@app.route('/predict_video', methods=['POST'])
def predict_video():
    if 'file' not in request.files:
        return render_template('result.html', error='No file uploaded', result_url=None, is_image=False)
    file = request.files['file']
    if file.filename == '':
        return render_template('result.html', error='Empty file name', result_url=None, is_image=False)
    file_ext = file.filename.split('.')[-1]
    input_filename = f"{uuid.uuid4()}.{file_ext}"
    input_path = os.path.join(app.config['UPLOAD_FOLDER'], input_filename)
    file.save(input_path)
    if file_ext.lower() not in ['mp4', 'avi', 'mov']:
        return render_template('result.html', error='Unsupported video format', result_url=None, is_image=False)
    task_id = str(uuid.uuid4())
    video_progress[task_id] = {'percent': 0, 'eta': None, 'done': False, 'result_url': None}
    def process():
        result_path = process_video(input_path, task_id)
        video_progress[task_id]['done'] = True
        video_progress[task_id]['result_url'] = f"/static/results/{os.path.basename(result_path)}"
    threading.Thread(target=process).start()
    return render_template('result.html', result_url=None, is_image=False, error=None, task_id=task_id)

@app.route('/progress/<task_id>')
def progress(task_id):
    prog = video_progress.get(task_id, None)
    if not prog:
        return jsonify({'error': 'Invalid task id'}), 404
    return jsonify({'percent': prog['percent'], 'eta': prog['eta'], 'done': prog['done'], 'result_url': prog.get('result_url')})

def process_image(image_path):
    results = model.predict(source=image_path, save=True, imgsz=640)

    # Ultralytics saves it in runs/..., so get latest and copy to static/results
    result_dir = results[0].save_dir
    result_file = os.path.join(result_dir, os.path.basename(image_path))

    # Save copy to static/results
    out_filename = f"seg_{uuid.uuid4()}.jpg"
    out_path = os.path.join(app.config['UPLOAD_FOLDER'], out_filename)
    os.rename(result_file, out_path)
    return out_path

def process_video(video_path, task_id=None):
    cap = cv2.VideoCapture(video_path)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    out_filename = f"seg_{uuid.uuid4()}.mp4"
    out_path = os.path.join(app.config['UPLOAD_FOLDER'], out_filename)
    # Try to use H.264 if available, fallback to mp4v
    try:
        fourcc = cv2.VideoWriter_fourcc(*'avc1')
        out = cv2.VideoWriter(out_path, fourcc, fps, (width, height))
        if not out.isOpened():
            raise Exception('H.264 not available')
    except:
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(out_path, fourcc, fps, (width, height))
    frame_idx = 0
    start_time = time.time()
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        results = model.predict(source=frame, imgsz=640, verbose=False)
        annotated_frame = results[0].plot()
        out.write(annotated_frame)
        frame_idx += 1
        if task_id:
            percent = int(100 * frame_idx / total_frames)
            elapsed = time.time() - start_time
            eta = int((elapsed / frame_idx) * (total_frames - frame_idx)) if frame_idx > 0 else None
            video_progress[task_id]['percent'] = percent
            video_progress[task_id]['eta'] = eta
    cap.release()
    out.release()
    return out_path

if __name__ == '__main__':
    app.run(debug=True)
