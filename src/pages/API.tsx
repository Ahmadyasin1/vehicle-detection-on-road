import React, { useState } from 'react';
import { 
  Settings, 
  Server, 
  Code, 
  Key,
  Database,
  Monitor,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Info
} from 'lucide-react';

const API = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    modelPath: 'best.pt',
    confidence: 0.5,
    imageSize: 640,
    batchSize: 16,
    maxFileSize: 50,
    enableCaching: true,
    debugMode: false
  });

  const handleSaveSettings = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const systemInfo = {
    version: '1.0.0',
    pythonVersion: '3.9.7',
    torchVersion: '2.0.1',
    ultralytics: '8.0.196',
    opencv: '4.8.1',
    uptime: '12 days, 8 hours',
    totalPredictions: '2,847',
    successRate: '98.7%'
  };

  const modelMetrics = {
    mapAt50: '72.1%',
    precision: '68.0%',
    recall: '69.0%',
    f1Score: '68.5%',
    trainingImages: '3,150',
    epochs: '50',
    bestEpoch: '47'
  };

  const apiEndpoints = [
    { method: 'POST', endpoint: '/predict_image', description: 'Upload and process an image for object detection' },
    { method: 'POST', endpoint: '/predict_video', description: 'Upload and process a video for object detection' },
    { method: 'GET', endpoint: '/status', description: 'Get system status and health metrics' },
    { method: 'GET', endpoint: '/model_info', description: 'Get current model information and metrics' },
    { method: 'GET', endpoint: '/config', description: 'Get current API configuration settings' }
  ];

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-2xl mb-6">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Configuration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage system settings, monitor performance, and configure API endpoints for the YOLO detection system
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Model Configuration */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Model Configuration</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model Path
                  </label>
                  <input
                    type="text"
                    value={settings.modelPath}
                    onChange={(e) => setSettings({...settings, modelPath: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="best.pt"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confidence Threshold
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={settings.confidence}
                      onChange={(e) => setSettings({...settings, confidence: parseFloat(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0.0</span>
                      <span className="font-semibold text-blue-600">{settings.confidence}</span>
                      <span>1.0</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Size
                  </label>
                  <select
                    value={settings.imageSize}
                    onChange={(e) => setSettings({...settings, imageSize: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value={320}>320px</option>
                    <option value={640}>640px</option>
                    <option value={1280}>1280px</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Batch Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="32"
                    value={settings.batchSize}
                    onChange={(e) => setSettings({...settings, batchSize: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max File Size (MB)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={settings.maxFileSize}
                    onChange={(e) => setSettings({...settings, maxFileSize: parseInt(e.target.value)})}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/30 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Enable Caching</span>
                  <button
                    onClick={() => setSettings({...settings, enableCaching: !settings.enableCaching})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.enableCaching ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.enableCaching ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-6 py-3 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reset
                </button>
                <button
                  onClick={handleSaveSettings}
                  disabled={isLoading}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Saving<span className="loading-dots"></span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      Save Settings
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* API Endpoints */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">API Endpoints</h2>
              </div>

              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="p-4 bg-white/30 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-gray-900">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Test
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">{endpoint.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-800">API Documentation</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      For complete API documentation including request/response examples and authentication details, 
                      visit the <a href="#" className="underline">documentation page</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Info Sidebar */}
          <div className="space-y-8">
            {/* System Status */}
            <div className="glass-effect rounded-2xl p-6 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">System Status</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-600">Online</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <span className="text-sm font-medium text-gray-900">{systemInfo.uptime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Predictions</span>
                  <span className="text-sm font-medium text-gray-900">{systemInfo.totalPredictions}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="text-sm font-medium text-green-600">{systemInfo.successRate}</span>
                </div>
              </div>
            </div>

            {/* Model Performance */}
            <div className="glass-effect rounded-2xl p-6 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Model Metrics</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">mAP@0.5:</span>
                  <span className="font-medium text-green-600">{modelMetrics.mapAt50}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Precision:</span>
                  <span className="font-medium text-blue-600">{modelMetrics.precision}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Recall:</span>
                  <span className="font-medium text-purple-600">{modelMetrics.recall}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">F1-Score:</span>
                  <span className="font-medium text-orange-600">{modelMetrics.f1Score}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Training Images:</span>
                  <span className="font-medium text-gray-900">{modelMetrics.trainingImages}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Best Epoch:</span>
                  <span className="font-medium text-gray-900">{modelMetrics.bestEpoch}/{modelMetrics.epochs}</span>
                </div>
              </div>
            </div>

            {/* Environment Info */}
            <div className="glass-effect rounded-2xl p-6 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Key className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Environment</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Version:</span>
                  <span className="font-medium text-gray-900">{systemInfo.version}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Python:</span>
                  <span className="font-medium text-gray-900">{systemInfo.pythonVersion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PyTorch:</span>
                  <span className="font-medium text-gray-900">{systemInfo.torchVersion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ultralytics:</span>
                  <span className="font-medium text-gray-900">{systemInfo.ultralytics}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">OpenCV:</span>
                  <span className="font-medium text-gray-900">{systemInfo.opencv}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-effect rounded-2xl p-6 animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
              </div>

              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-white/30 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Restart Service</span>
                  </div>
                </button>
                
                <button className="w-full text-left px-4 py-3 bg-white/30 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">Clear Cache</span>
                  </div>
                </button>
                
                <button className="w-full text-left px-4 py-3 bg-white/30 rounded-lg hover:bg-white/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Monitor className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">View Logs</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;