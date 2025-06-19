import React, { useState } from 'react';
import { FileSpreadsheet, Download, Eye, Code, Play, Calendar, BarChart3 } from 'lucide-react';

const Notebook = () => {
  const [isLoading, setIsLoading] = useState(false);

  const notebookInfo = {
    title: 'YOLO Training Notebook',
    filename: 'Train.ipynb',
    lastModified: '2024-01-15',
    size: '3.8 MB',
    cells: 47,
    runtime: '3.2 hours'
  };

  const handleViewNotebook = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6">
            <FileSpreadsheet className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Jupyter Notebook Viewer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete YOLO training workflow with data preprocessing, model training, and performance evaluation
          </p>
        </div>

        {/* Notebook Info Card */}
        <div className="glass-effect rounded-2xl p-8 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {notebookInfo.title}
              </h2>
              <p className="text-gray-600 mb-4">
                Complete YOLO model training workflow with 3,150 images, featuring data preprocessing, 
                model architecture setup, training process, and comprehensive performance evaluation.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">
                    {notebookInfo.cells}
                  </div>
                  <div className="text-sm text-gray-600">Cells</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">
                    {notebookInfo.size}
                  </div>
                  <div className="text-sm text-gray-600">Size</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <div className="text-lg font-semibold text-gray-900">
                    {notebookInfo.runtime}
                  </div>
                  <div className="text-sm text-gray-600">Runtime</div>
                </div>
                <div className="text-center p-3 bg-white/50 rounded-lg">
                  <Calendar className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div className="text-sm text-gray-600">
                    {notebookInfo.lastModified}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleViewNotebook}
                disabled={isLoading}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading<span className="loading-dots"></span>
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5 mr-2" />
                    View Notebook
                  </>
                )}
              </button>
              
              <button className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Notebook Content */}
        <div className="glass-effect rounded-2xl overflow-hidden animate-slide-up">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">
                  Rendering notebook<span className="loading-dots"></span>
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8">
              {/* Notebook Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {notebookInfo.filename}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last modified: {notebookInfo.lastModified}</span>
                </div>
              </div>

              {/* Sample Notebook Cells */}
              <div className="space-y-6">
                {/* Markdown Cell - Project Overview */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-gray-200">
                    <span className="text-xs font-medium text-blue-600">MARKDOWN</span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      YOLO Object Detection Training - Ahmad Yasin
                    </h2>
                    <p className="text-gray-700 mb-4">
                      This notebook demonstrates the complete workflow for training a custom YOLO object detection model 
                      using a dataset of 3,150 images. The project covers data preprocessing, model configuration, 
                      training process, and comprehensive evaluation metrics.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Project Details</h4>
                      <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
                        <li>Student: Ahmad Yasin (L1F22BSAI0052)</li>
                        <li>Dataset Size: 3,150 images</li>
                        <li>Training Duration: 50 epochs</li>
                        <li>Best mAP@0.5: 72.1%</li>
                      </ul>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Dataset preparation and augmentation strategies</li>
                      <li>YOLOv8 model architecture configuration</li>
                      <li>Training with transfer learning and hyperparameter tuning</li>
                      <li>Performance evaluation and loss curve analysis</li>
                      <li>Model validation and testing procedures</li>
                    </ul>
                  </div>
                </div>

                {/* Code Cell - Dataset Setup */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-green-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-medium text-green-600">CODE</span>
                    <button className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors">
                      <Play className="w-3 h-3 mr-1" />
                      Run
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
                    <pre>{`# Dataset Setup and Configuration
import torch
from ultralytics import YOLO
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from pathlib import Path

# Dataset configuration
DATASET_PATH = 'dataset/'
TRAIN_IMAGES = 2520  # 80% of 3150
VAL_IMAGES = 315     # 10% of 3150
TEST_IMAGES = 315    # 10% of 3150

print(f"Dataset Statistics:")
print(f"Total Images: {TRAIN_IMAGES + VAL_IMAGES + TEST_IMAGES}")
print(f"Training: {TRAIN_IMAGES} images")
print(f"Validation: {VAL_IMAGES} images")
print(f"Testing: {TEST_IMAGES} images")

# Load pre-trained YOLO model
model = YOLO('yolov8n.pt')
print(f"Model loaded: {model.model_name}")
print(f"Parameters: {sum(p.numel() for p in model.model.parameters()):,}")`}</pre>
                  </div>
                </div>

                {/* Output Cell */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-orange-50 px-4 py-2 border-b border-gray-200">
                    <span className="text-xs font-medium text-orange-600">OUTPUT</span>
                  </div>
                  <div className="p-4 bg-gray-50 font-mono text-sm">
                    <div className="text-gray-700">
                      Dataset Statistics:<br/>
                      Total Images: 3150<br/>
                      Training: 2520 images<br/>
                      Validation: 315 images<br/>
                      Testing: 315 images<br/>
                      <span className="text-green-600">Model loaded: YOLOv8n</span><br/>
                      <span className="text-blue-600">Parameters: 3,157,200</span>
                    </div>
                  </div>
                </div>

                {/* Code Cell - Training */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-green-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-medium text-green-600">CODE</span>
                    <button className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors">
                      <Play className="w-3 h-3 mr-1" />
                      Run
                    </button>
                  </div>
                  <div className="p-4 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
                    <pre>{`# Training Configuration
training_config = {
    'data': 'dataset.yaml',
    'epochs': 50,
    'imgsz': 640,
    'batch': 16,
    'name': 'yolo_custom_training',
    'patience': 10,
    'save_period': 5,
    'device': 'cuda' if torch.cuda.is_available() else 'cpu'
}

print("Starting training with configuration:")
for key, value in training_config.items():
    print(f"  {key}: {value}")

# Start training
results = model.train(**training_config)

# Training completed - display final metrics
print("\\n" + "="*50)
print("TRAINING COMPLETED!")
print("="*50)
print(f"Best mAP@0.5: {results.box.map50:.3f}")
print(f"Best mAP@0.5:0.95: {results.box.map:.3f}")
print(f"Final Precision: {results.box.mp:.3f}")
print(f"Final Recall: {results.box.mr:.3f}")`}</pre>
                  </div>
                </div>

                {/* Training Output */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-orange-50 px-4 py-2 border-b border-gray-200">
                    <span className="text-xs font-medium text-orange-600">TRAINING OUTPUT</span>
                  </div>
                  <div className="p-4 bg-gray-50 font-mono text-sm">
                    <div className="text-gray-700 space-y-1">
                      <div>Starting training with configuration:</div>
                      <div className="ml-4 text-blue-600">
                        data: dataset.yaml<br/>
                        epochs: 50<br/>
                        imgsz: 640<br/>
                        batch: 16<br/>
                        device: cuda
                      </div>
                      <div className="text-yellow-600 mt-2">Training in progress...</div>
                      <div className="text-green-600 mt-4 font-semibold">
                        ==================================================<br/>
                        TRAINING COMPLETED!<br/>
                        ==================================================<br/>
                        Best mAP@0.5: 0.721<br/>
                        Best mAP@0.5:0.95: 0.456<br/>
                        Final Precision: 0.680<br/>
                        Final Recall: 0.690
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visualization Cell */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-purple-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                    <span className="text-xs font-medium text-purple-600">VISUALIZATION</span>
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="p-4">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 text-center mb-4">
                      <div className="text-4xl text-gray-400 mb-4">📊</div>
                      <p className="text-gray-600 mb-4">
                        Training metrics visualization showing loss curves, precision-recall curves, 
                        and performance metrics over 50 epochs
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="bg-white/50 p-3 rounded">
                          <div className="font-semibold text-green-600">mAP@0.5</div>
                          <div className="text-2xl font-bold">72.1%</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded">
                          <div className="font-semibold text-blue-600">Precision</div>
                          <div className="text-2xl font-bold">68.0%</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded">
                          <div className="font-semibold text-purple-600">Recall</div>
                          <div className="text-2xl font-bold">69.0%</div>
                        </div>
                        <div className="bg-white/50 p-3 rounded">
                          <div className="font-semibold text-orange-600">F1-Score</div>
                          <div className="text-2xl font-bold">68.5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Analysis */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 border-b border-gray-200">
                    <span className="text-xs font-medium text-blue-600">MARKDOWN</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Training Results Analysis
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The model achieved excellent performance with a final mAP@0.5 of 72.1%. 
                      The training curves show stable convergence without signs of overfitting, 
                      indicating good generalization capabilities.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                        <li>Stable training convergence over 50 epochs</li>
                        <li>Balanced precision (68.0%) and recall (69.0%) metrics</li>
                        <li>No significant overfitting observed</li>
                        <li>Successful transfer learning from pre-trained weights</li>
                        <li>Efficient training completed in ~3.2 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Run All Cells
                </button>
                <button className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Export as HTML
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notebook;