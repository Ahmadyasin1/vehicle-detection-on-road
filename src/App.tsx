import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notebook from './pages/Notebook';
import Report from './pages/Report';
import Predict from './pages/Predict';
import API from './pages/API';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notebook" element={<Notebook />} />
            <Route path="/report" element={<Report />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/api" element={<API />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;