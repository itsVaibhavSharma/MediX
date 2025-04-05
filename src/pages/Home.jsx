import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaBrain, FaHeartbeat, FaHospital } from 'react-icons/fa';
import Chatbot from '../components/Chatbot';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    {
      icon: FaStethoscope,
      title: 'Symptom Analysis',
      description: 'Our AI analyzes your symptoms to predict possible conditions.',
      points: [
        'AI-Powered Symptom Checker for early-stage disease prediction.',
        'Disease Risk Assessment to help take preventive action.',
        'Smart Test Suggestions guiding toward appropriate scans.',
        'Plain language interaction for easy communication.'
      ]
    },
    {
      icon: FaBrain,
      title: 'Medical Image Analysis',
      description: 'Upload medical images for instant AI diagnosis.',
      points: [
        'Real-Time AI Diagnosis for various medical conditions.',
        'Confidence Score & Auto-Generated Medical Report.',
        'Visual Insights with heatmap highlighting affected areas.',
        'Progress Tracker to monitor treatment progress.'
      ]
    },
    {
      icon: FaHeartbeat,
      title: 'Health Monitoring',
      description: 'Keep track of your health metrics and get personalized insights.',
      points: [
        'Track vital signs and health parameters over time.',
        'Receive AI-powered health insights and recommendations.',
        'Set health goals and monitor progress.',
        'Get alerts for concerning changes in your health metrics.'
      ]
    },
    {
      icon: FaHospital,
      title: 'Telemedicine',
      description: 'Connect with healthcare professionals remotely.',
      points: [
        'Secure video consultations with qualified doctors.',
        'Share your AI analysis results with healthcare providers.',
        'Get prescriptions and follow-up recommendations.',
        'Schedule appointments and reminders for better care.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">MediX</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          An Advanced AI-Based Early Disease Detection & Telemedicine System
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the future of healthcare with our AI-powered medical assistant.
          Analyze symptoms, detect diseases early, and get connected to the right care.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Chatbot */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">AI Medical Assistant</h2>
            <p className="text-gray-300">
              Describe your symptoms or health concerns, and our AI will analyze them to suggest possible conditions
              and recommend appropriate medical tests.
            </p>
          </div>
          <Chatbot />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card mb-8">
            <h2 className="text-xl font-bold text-white mb-4">How It Works</h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <p className="text-gray-300">Describe your symptoms or upload medical images</p>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <p className="text-gray-300">AI analyzes the information using advanced algorithms</p>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <p className="text-gray-300">Get insights about possible conditions and recommended tests</p>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <p className="text-gray-300">Use the information to seek appropriate medical care</p>
              </li>
            </ol>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-white mb-4">Important Note</h2>
            <p className="text-gray-300 mb-4">
              MediX is designed to assist in early detection and provide general guidance. It is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-gray-300">
              Always consult a qualified healthcare provider for medical concerns. In case of emergency, contact emergency services immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              points={feature.points}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="card bg-gradient-to-r from-purple-900 to-indigo-900 border-0">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Learn More About MediX</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Discover how our AI-powered platform is revolutionizing healthcare by enabling early disease detection
            and providing accessible telemedicine services.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link to="/about" className="btn-primary">
              About the Project
            </Link>
            <Link to="/team" className="btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;