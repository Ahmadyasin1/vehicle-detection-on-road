import React from 'react';
import { 
  Brain, 
  Award, 
  Target,
  Zap,
  Shield,
  Code,
  BookOpen,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced YOLO Architecture',
      description: 'Custom-trained YOLOv8 model optimized for specific object detection tasks with enhanced accuracy.'
    },
    {
      icon: Zap,
      title: 'Optimized Performance',
      description: 'Fine-tuned inference pipeline delivering consistent results with balanced precision and recall metrics.'
    },
    {
      icon: Shield,
      title: 'Robust Training Pipeline',
      description: 'Comprehensive data preprocessing and augmentation techniques ensuring model generalization.'
    },
    {
      icon: Code,
      title: 'Production-Ready Deployment',
      description: 'Scalable architecture with efficient model serving and real-time prediction capabilities.'
    }
  ];

  const personalInfo = {
    name: 'Ahmad Yasin',
    id: 'L1F22BSAI0052',
    role: 'AI Engineer & Developer',
    description: 'Specialized in deep learning and computer vision. Passionate about developing intelligent systems that solve real-world problems.',
    image: '/team-images/ahmad-yasin.jpg',
    fallbackImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    links: {
      portfolio: 'https://ahmadyasin.vercel.app/',
      github: 'https://github.com/ahmadyasin1/',
      linkedin: 'https://www.linkedin.com/in/mian-ahmad-yasin/'
    },
    skills: ['Deep Learning', 'Computer Vision', 'TensorFlow', 'ONNX', 'Python', 'YOLOv8', 'PyTorch']
  };

  const stats = [
    { number: '3,150', label: 'Training Images', icon: Target },
    { number: '72.1%', label: 'mAP@0.5', icon: Award },
    { number: '50', label: 'Training Epochs', icon: Zap },
    { number: '0.68', label: 'Best Precision', icon: Target }
  ];

  return (
    <div className="min-h-screen py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive YOLO-based object detection system developed as part of advanced 
            computer vision research, featuring custom model training and deployment.
          </p>
        </div>

        {/* Project Overview */}
        <div className="glass-effect rounded-2xl p-8 mb-16 animate-slide-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              This project demonstrates the complete workflow of developing a custom YOLO object detection model, 
              from data preparation and model training to deployment and real-time inference. The system showcases 
              modern deep learning techniques applied to computer vision tasks with practical applications.
            </p>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-2xl hover-lift">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features & Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern deep learning frameworks and best practices for production deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Profile */}
        <div className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Developer Profile
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the developer behind this advanced computer vision project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 hover-lift">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = personalInfo.fallbackImage;
                    }}
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {personalInfo.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Student ID: {personalInfo.id}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {personalInfo.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {personalInfo.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <a
                      href={personalInfo.links.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      title="Portfolio"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="glass-effect rounded-2xl p-8 mb-16 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Built with industry-leading tools and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/30 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">YOLOv8</div>
              <div className="text-sm text-gray-600">Object Detection Model</div>
            </div>
            <div className="text-center p-6 bg-white/30 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">PyTorch</div>
              <div className="text-sm text-gray-600">Deep Learning Framework</div>
            </div>
            <div className="text-center p-6 bg-white/30 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">Ultralytics</div>
              <div className="text-sm text-gray-600">YOLO Implementation</div>
            </div>
            <div className="text-center p-6 bg-white/30 rounded-xl">
              <div className="text-2xl font-bold text-gray-900 mb-2">OpenCV</div>
              <div className="text-sm text-gray-600">Computer Vision</div>
            </div>
          </div>
        </div>

        {/* Training Results */}
        <div className="glass-effect rounded-2xl p-8 mb-16 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Training Results
            </h2>
            <p className="text-lg text-gray-600">
              Model performance metrics and training insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-700 mb-2">72.1%</div>
              <div className="text-sm font-medium text-green-600">mAP@0.5</div>
              <div className="text-xs text-green-500 mt-1">Mean Average Precision</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-700 mb-2">0.68</div>
              <div className="text-sm font-medium text-blue-600">Precision (B)</div>
              <div className="text-xs text-blue-500 mt-1">Box Precision</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">0.69</div>
              <div className="text-sm font-medium text-purple-600">Recall (B)</div>
              <div className="text-xs text-purple-500 mt-1">Box Recall</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Configuration</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Dataset Size:</span>
                <span className="font-medium text-gray-900">3,150 images</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Training Epochs:</span>
                <span className="font-medium text-gray-900">50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Image Size:</span>
                <span className="font-medium text-gray-900">640x640</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Model Architecture:</span>
                <span className="font-medium text-gray-900">YOLOv8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center glass-effect rounded-2xl p-12 animate-slide-up">
          <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in This Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the complete implementation, from model training to deployment, 
            and see how modern computer vision techniques can be applied to real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source Code
            </a>
            <a
              href={personalInfo.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 glass-effect text-gray-700 rounded-xl font-semibold hover-lift transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Portfolio
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center space-x-6 text-gray-500">
              <a
                href={`mailto:contact@ahmadyasin.dev`}
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;