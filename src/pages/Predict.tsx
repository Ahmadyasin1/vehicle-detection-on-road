import React, { useState, useRef } from 'react';
import { 
  Brain, 
  Upload, 
  Image as ImageIcon, 
  Video, 
  FileCheck, 
  AlertCircle,
  Download,
  Eye,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react';

const Predict = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ url: string; confidence: number; objects: Array<{ class: string; confidence: number }> } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const validTypes = activeTab === 'image' 
      ? ['image/jpeg', 'image/png', 'image/jpg']
      : ['video/mp4', 'video/avi', 'video/mov'];
    
    if (validTypes.includes(file.type)) {
      setUploadedFile(file);
      setResult(null);
    } else {
      alert(`Please select a valid ${activeTab} file.`);
    }
  };

  const handleProcess = async () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    
    // Simulate processing time based on actual model performance
    await new Promise(resolve => setTimeout(resolve, 2800));
    
    // Mock result based on actual model metrics
    setResult({
      url: URL.createObjectURL(uploadedFile),
      confidence: 0.721, // Based on mAP@0.5: 72.1%
      objects: [
        { class: 'person', confidence: 0.89 },
        { class: 'car', confidence: 0.76 },
        { class: 'bicycle', confidence: 0.68 },
        { class: 'dog', confidence: 0.82 }
      ]
    });
    
    setIsProcessing(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YOLO Object Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload images or videos to detect objects using our custom-trained YOLO model (mAP@0.5: 72.1%)
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="glass-effect rounded-xl p-1">
            <button
              onClick={() => setActiveTab('image')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'image'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              <span>Image Detection</span>
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'video'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Video className="w-5 h-5" />
              <span>Video Processing</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="animate-slide-up">
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Upload {activeTab === 'image' ? 'Image' : 'Video'}
              </h2>

              {/* Drag and Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? 'border-blue-400 bg-blue-50'
                    : uploadedFile
                    ? 'border-green-400 bg-green-50'
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={activeTab === 'image' ? 'image/*' : 'video/*'}
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="animate-fade-in">
                    <FileCheck className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-700 mb-2">
                      File Uploaded Successfully
                    </h3>
                    <p className="text-green-600 mb-2">{uploadedFile.name}</p>
                    <p className="text-sm text-green-500">
                      {formatFileSize(uploadedFile.size)}
                    </p>
                  </div>
                ) : (
                  <div>
                    <Upload className={`w-16 h-16 mx-auto mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Drop your {activeTab} here
                    </h3>
                    <p className="text-gray-500 mb-4">
                      or click to browse files
                    </p>
                    <div className="text-sm text-gray-400">
                      Supported formats: {activeTab === 'image' ? 'JPG, PNG, JPEG' : 'MP4, AVI, MOV'}
                    </div>
                  </div>
                )}
              </div>

              {/* File Info */}
              {uploadedFile && (
                <div className="mt-6 p-4 bg-white/50 rounded-lg animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {activeTab === 'image' ? (
                        <ImageIcon className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Video className="w-5 h-5 text-purple-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.size)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedFile(null);
                        setResult(null);
                      }}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Process Button */}
              <button
                onClick={handleProcess}
                disabled={!uploadedFile || isProcessing}
                className="w-full mt-6 inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing<span className="loading-dots"></span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Start Detection
                  </>
                )}
              </button>

              {/* Processing Stats */}
              {(isProcessing || result) && (
                <div className="mt-6 grid grid-cols-3 gap-4 animate-fade-in">
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <div className="text-sm font-medium text-gray-900">
                      {isProcessing ? '~2.8s' : '2.8s'}
                    </div>
                    <div className="text-xs text-gray-600">Processing Time</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <Brain className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div className="text-sm font-medium text-gray-900">YOLOv8</div>
                    <div className="text-xs text-gray-600">Custom Model</div>
                  </div>
                  <div className="text-center p-3 bg-white/50 rounded-lg">
                    <CheckCircle className={`w-5 h-5 mx-auto mb-1 ${result ? 'text-green-600' : 'text-gray-400'}`} />
                    <div className="text-sm font-medium text-gray-900">
                      {result ? '72.1%' : '...'}
                    </div>
                    <div className="text-xs text-gray-600">mAP@0.5</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="animate-slide-up">
            <div className="glass-effect rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Detection Results
              </h2>

              {!result && !isProcessing && (
                <div className="flex items-center justify-center h-64 text-center">
                  <div>
                    <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Upload and process a {activeTab} to see detection results
                    </p>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className="flex items-center justify-center h-64 text-center">
                  <div className="animate-pulse">
                    <Brain className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg text-gray-700 font-medium">
                      Analyzing {activeTab}<span className="loading-dots"></span>
                    </p>
                    <p className="text-gray-500 mt-2">
                      Our custom YOLO model is detecting objects in your {activeTab}
                    </p>
                  </div>
                </div>
              )}

              {result && (
                <div className="animate-fade-in">
                  {/* Confidence Score */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-800">Model Confidence (mAP@0.5)</span>
                      <span className="text-2xl font-bold text-green-700">
                        {(result.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${result.confidence * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-green-600 mt-1">
                      Based on training with 3,150 images over 50 epochs
                    </p>
                  </div>

                  {/* Detected Objects */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Detected Objects ({result.objects.length})
                    </h3>
                    <div className="space-y-3">
                      {result.objects.map((obj, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="font-medium text-gray-900 capitalize">
                              {obj.class}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              {(obj.confidence * 100).toFixed(1)}%
                            </span>
                            <div className="w-16 bg-gray-200 rounded-full h-1.5">
                              <div
                                className="bg-blue-500 h-1.5 rounded-full"
                                style={{ width: `${obj.confidence * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Result Preview
                    </h3>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      {activeTab === 'image' ? (
                        <img
                          src={result.url}
                          alt="Detection result"
                          className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                          style={{ maxHeight: '300px' }}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-48 bg-gray-200 rounded-lg">
                          <Video className="w-16 h-16 text-gray-400" />
                          <span className="ml-3 text-gray-600">Video preview will be shown here</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <button className="inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Size
                    </button>
                    <button className="inline-flex items-center justify-center px-4 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300">
                      <Download className="w-4 h-4 mr-2" />
                      Download Result
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 glass-effect rounded-2xl p-8 animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              How Our Custom YOLO Model Works
            </h3>
            <p className="text-gray-600">
              Trained on 3,150 images with 72.1% mAP@0.5 accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. Upload</h4>
              <p className="text-sm text-gray-600">
                Upload your image or video file using our drag-and-drop interface
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. Process</h4>
              <p className="text-sm text-gray-600">
                Our custom-trained YOLOv8 model analyzes your content with 72.1% accuracy
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. Download</h4>
              <p className="text-sm text-gray-600">
                Get your results with bounding boxes and confidence scores
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-800">Model Information</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This model was trained by Ahmad Yasin (L1F22BSAI0052) using 3,150 carefully curated images 
                  over 50 epochs, achieving a mAP@0.5 of 72.1% with balanced precision (68.0%) and recall (69.0%) metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;