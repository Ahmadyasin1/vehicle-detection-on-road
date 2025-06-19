import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  FileSpreadsheet, 
  Brain, 
  Settings, 
  Info, 
  Menu, 
  X,
  ChevronDown 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApiDropdown, setIsApiDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/notebook', label: 'Notebook', icon: FileSpreadsheet },
    { path: '/report', label: 'Report', icon: FileText },
    { path: '/predict', label: 'YOLO Predictor', icon: Brain },
    { path: '/about', label: 'About', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            <Brain className="w-8 h-8" />
            <span>ML Platform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
            
            {/* API Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsApiDropdown(!isApiDropdown)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/api')
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50 hover:text-blue-600'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>API</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isApiDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {isApiDropdown && (
                <div className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-xl py-2 animate-fade-in">
                  <Link
                    to="/api"
                    onClick={() => setIsApiDropdown(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/50 hover:text-blue-600 transition-colors"
                  >
                    Configuration
                  </Link>
                  <div className="block px-4 py-2 text-sm text-gray-500 cursor-not-allowed">
                    Model Settings
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-500 cursor-not-allowed">
                    Environment Info
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(path)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
              <Link
                to="/api"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/api')
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50 hover:text-blue-600'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>API</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;