import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Share, 
  Printer,
  Calendar,
  User,
  BarChart3,
  TrendingUp,
  Award
} from 'lucide-react';

const Report = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const reportInfo = {
    title: 'YOLO Object Detection Model - Training Report',
    filename: 'yolo_training_report.pdf',
    author: 'Ahmad Yasin (L1F22BSAI0052)',
    dateCreated: '2024-01-20',
    pages: 28,
    size: '4.1 MB',
    version: '1.0'
  };

  const handleViewReport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const reportSections = [
    { title: 'Executive Summary', page: 1 },
    { title: 'Dataset Overview', page: 3 },
    { title: 'Data Preprocessing', page: 6 },
    { title: 'Model Architecture', page: 9 },
    { title: 'Training Process', page: 13 },
    { title: 'Performance Analysis', page: 18 },
    { title: 'Results & Evaluation', page: 22 },
    { title: 'Conclusions & Future Work', page: 26 }
  ];

  const keyMetrics = [
    { label: 'mAP@0.5', value: '72.1%', icon: Award, color: 'text-green-600' },
    { label: 'Precision (Box)', value: '68.0%', icon: BarChart3, color: 'text-blue-600' },
    { label: 'Recall (Box)', value: '69.0%', icon: TrendingUp, color: 'text-purple-600' },
    { label: 'Training Images', value: '3,150', icon: FileText, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Training Report
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis and findings from the YOLO object detection model training process
          </p>
        </div>

        {/* Report Info and Actions */}
        <div className="glass-effect rounded-2xl p-8 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="mb-6 lg:mb-0 flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {reportInfo.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{reportInfo.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{reportInfo.dateCreated}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">{reportInfo.pages} pages • {reportInfo.size}</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 rounded-xl">
                    <metric.icon className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                    <div className="text-lg font-semibold text-gray-900">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-8">
              <button
                onClick={handleViewReport}
                disabled={isLoading}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading<span className="loading-dots"></span>
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5 mr-2" />
                    View Report
                  </>
                )}
              </button>
              
              <button className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>
              
              <button className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300">
                <Share className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-6 animate-slide-up sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {reportSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(section.page)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentPage >= section.page && currentPage < (reportSections[index + 1]?.page || reportInfo.pages + 1)
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{section.title}</span>
                      <span className="text-xs text-gray-400">{section.page}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Report Viewer */}
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-2xl overflow-hidden animate-slide-up">
              {isLoading ? (
                <div className="flex items-center justify-center py-32">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">
                      Loading report<span className="loading-dots"></span>
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* PDF Viewer Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">
                        Page {currentPage} of {reportInfo.pages}
                      </span>
                      <div className="flex space-x-1">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => setCurrentPage(Math.min(reportInfo.pages, currentPage + 1))}
                          disabled={currentPage === reportInfo.pages}
                          className="px-3 py-1 bg-white border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Printer className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* PDF Content Simulation */}
                  <div className="p-8 bg-white min-h-[600px]">
                    {currentPage === 1 && (
                      <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                          YOLO Object Detection Model
                        </h1>
                        <h2 className="text-xl font-semibold text-gray-700 mb-6">
                          Training Report & Performance Analysis
                        </h2>
                        <div className="text-gray-600 space-y-2">
                          <p>Prepared by: Ahmad Yasin</p>
                          <p>Student ID: L1F22BSAI0052</p>
                          <p>Date: {reportInfo.dateCreated}</p>
                          <p>Version: {reportInfo.version}</p>
                        </div>
                      </div>
                    )}

                    {currentPage >= 3 && currentPage < 6 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dataset Overview</h2>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-4">
                            The dataset consists of 3,150 carefully curated images for training a custom YOLO object detection model.
                            Each image has been manually annotated with bounding boxes and class labels following industry standards.
                          </p>
                          <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-3">Dataset Statistics</h3>
                            <ul className="list-disc list-inside text-blue-800 space-y-1">
                              <li>Total Images: 3,150</li>
                              <li>Training Set: 2,520 (80%)</li>
                              <li>Validation Set: 315 (10%)</li>
                              <li>Test Set: 315 (10%)</li>
                              <li>Average Objects per Image: 2.8</li>
                              <li>Image Resolution: 640x640 pixels</li>
                            </ul>
                          </div>
                          <p className="text-gray-700">
                            The dataset was carefully split to ensure balanced representation across all classes 
                            and to prevent data leakage between training and validation sets.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentPage >= 13 && currentPage < 18 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Process</h2>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-6">
                            The model was trained for 50 epochs using transfer learning from a pre-trained YOLOv8 model.
                            Training was performed with careful hyperparameter tuning and monitoring of convergence metrics.
                          </p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-green-900 mb-3">Training Configuration</h3>
                              <div className="space-y-2 text-green-800">
                                <div className="flex justify-between">
                                  <span>Epochs:</span>
                                  <span className="font-semibold">50</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Batch Size:</span>
                                  <span className="font-semibold">16</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Image Size:</span>
                                  <span className="font-semibold">640x640</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Learning Rate:</span>
                                  <span className="font-semibold">0.01</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h3 className="text-lg font-semibold text-blue-900 mb-3">Hardware & Environment</h3>
                              <div className="space-y-2 text-blue-800">
                                <div className="flex justify-between">
                                  <span>GPU:</span>
                                  <span>NVIDIA RTX 4090</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Framework:</span>
                                  <span>Ultralytics YOLOv8</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Python:</span>
                                  <span>3.9.7</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Training Time:</span>
                                  <span>~3.2 hours</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-yellow-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Training Observations</h3>
                            <ul className="list-disc list-inside text-yellow-800 space-y-1">
                              <li>Loss curves showed steady convergence without overfitting</li>
                              <li>Validation metrics improved consistently throughout training</li>
                              <li>Best model weights were saved at epoch 47</li>
                              <li>No significant performance degradation observed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentPage >= 18 && currentPage < 22 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Analysis</h2>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-6">
                            The trained model achieved strong performance across all evaluation metrics, 
                            demonstrating effective learning and generalization capabilities.
                          </p>
                          
                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-green-700">72.1%</div>
                              <div className="text-sm text-green-600">mAP@0.5</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-blue-700">68.0%</div>
                              <div className="text-sm text-blue-600">Precision (B)</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-purple-700">69.0%</div>
                              <div className="text-sm text-purple-600">Recall (B)</div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Detailed Metrics</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span>Box Loss (Train):</span>
                                  <span className="font-medium">0.72</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Seg Loss (Train):</span>
                                  <span className="font-medium">1.15</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Cls Loss (Train):</span>
                                  <span className="font-medium">0.45</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>DFL Loss (Train):</span>
                                  <span className="font-medium">0.89</span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span>Box Loss (Val):</span>
                                  <span className="font-medium">0.85</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Seg Loss (Val):</span>
                                  <span className="font-medium">1.62</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Cls Loss (Val):</span>
                                  <span className="font-medium">0.78</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>DFL Loss (Val):</span>
                                  <span className="font-medium">1.01</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentPage >= 26 && (
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusions & Future Work</h2>
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-4">
                            The YOLO object detection model has demonstrated solid performance with a mAP@0.5 of 72.1% 
                            and balanced precision-recall metrics. The training process showed stable convergence 
                            and good generalization capabilities.
                          </p>
                          
                          <div className="bg-green-50 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-green-900 mb-3">Key Achievements</h3>
                            <ul className="list-disc list-inside text-green-800 space-y-1">
                              <li>Successfully trained custom YOLO model on 3,150 image dataset</li>
                              <li>Achieved 72.1% mAP@0.5 with balanced precision and recall</li>
                              <li>Demonstrated stable training convergence over 50 epochs</li>
                              <li>Implemented efficient data preprocessing and augmentation pipeline</li>
                              <li>Created comprehensive evaluation and visualization framework</li>
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-3">Future Improvements</h3>
                            <ul className="list-disc list-inside text-blue-800 space-y-1">
                              <li>Expand dataset size to improve model robustness</li>
                              <li>Experiment with different YOLO architectures (YOLOv9, YOLOv10)</li>
                              <li>Implement advanced data augmentation techniques</li>
                              <li>Optimize model for deployment on edge devices</li>
                              <li>Develop real-time video processing capabilities</li>
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Contributions</h3>
                            <p className="text-gray-700 text-sm">
                              This project demonstrates proficiency in modern computer vision techniques, 
                              deep learning model training, and practical deployment considerations. 
                              The comprehensive approach from data preparation to model evaluation 
                              showcases end-to-end machine learning engineering skills.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;