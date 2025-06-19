import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  FileSpreadsheet, 
  FileText, 
  Upload, 
  Zap, 
  Shield, 
  ArrowRight,
  Play,
  Image,
  Video
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'YOLO Object Detection',
      description: 'Advanced AI-powered object detection for images and videos with real-time processing.',
      link: '/predict',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FileSpreadsheet,
      title: 'Jupyter Notebook Viewer',
      description: 'View and analyze training notebooks with rich formatting and interactive elements.',
      link: '/notebook',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: FileText,
      title: 'Report Analysis',
      description: 'Comprehensive PDF reports with detailed model performance and insights.',
      link: '/report',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Upload,
      title: 'Easy File Upload',
      description: 'Drag and drop interface with support for multiple file formats and batch processing.',
      link: '/predict',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const stats = [
    { number: '99.2%', label: 'Accuracy Rate' },
    { number: '< 50ms', label: 'Processing Time' },
    { number: '10M+', label: 'Images Processed' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">Advanced ML Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Harness the power of artificial intelligence with our cutting-edge YOLO object detection, 
              comprehensive notebook analysis, and professional reporting tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/predict"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Brain className="w-5 h-5 mr-2" />
                Start Predicting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for professional machine learning workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full p-6 glass-effect rounded-2xl transition-all duration-300 group-hover:bg-white/30">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Jump into your workflow with these popular tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/predict"
              className="group p-8 glass-effect rounded-2xl hover-lift animate-slide-up"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold">Image Detection</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600">
                Upload images for instant object detection and analysis
              </p>
            </Link>

            <Link
              to="/predict"
              className="group p-8 glass-effect rounded-2xl hover-lift animate-slide-up"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Video className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">Video Processing</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600">
                Process videos with frame-by-frame object detection
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-3xl p-12 animate-slide-up">
            <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of researchers and developers using our platform
            </p>
            <Link
              to="/predict"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            >
              <Shield className="w-5 h-5 mr-2" />
              Try It Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;