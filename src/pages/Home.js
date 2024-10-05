// src/pages/Home.js

import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" 
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?farm,fields,agriculture')" }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-60"></div>
        <div className="relative p-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FarmWise!</h1>
          <p className="text-lg md:text-2xl mb-6">Empowering Farmers with Smart Solutions</p>
          <Link to="/about" className="inline-block bg-white hover:bg-gray-200 text-green-600 font-semibold py-2 px-4 rounded transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-16">
        <h2 className="text-center text-3xl font-semibold mb-8">Our Farming Solutions</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-xl mb-2">Smart Tracking</h3>
            <p>Monitor your crops and livestock with real-time tracking and insights.</p>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-xl mb-2">Expert Guidance</h3>
            <p>Receive tailored advice from agriculture specialists for optimal yield.</p>
          </div>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-xl mb-2">Community Support</h3>
            <p>Connect with local farmers to share experiences and best practices.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-100 py-12">
        <h2 className="text-center text-3xl font-semibold mb-4">Join Our Farming Community!</h2>
        <p className="text-center mb-4">Sign up to access exclusive resources and tools.</p>
        <div className="text-center">
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-4">
        <p>© {new Date().getFullYear()} FarmWise. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
