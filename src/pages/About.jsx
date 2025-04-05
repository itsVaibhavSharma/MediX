import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptopMedical, 
  FaBrain, 
  FaMobileAlt, 
  FaUserMd, 
  FaLock, 
  FaGlobe,
  FaRegChartBar,
  FaUserCheck
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">About MediX</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          An Advanced AI-Based Early Disease Detection & Telemedicine System
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Revolutionizing healthcare through artificial intelligence and telemedicine to make 
          quality healthcare accessible, affordable, and efficient.
        </p>
      </div>

      {/* Project Overview */}
      <div className="card mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
        <p className="text-gray-300 mb-4">
          MediX is a cutting-edge AI-based platform designed to bridge the gap between technology and healthcare.
          By leveraging advanced machine learning algorithms and telemedicine capabilities, MediX aims to transform 
          how people access and experience healthcare services.
        </p>
        <p className="text-gray-300 mb-4">
          Our platform provides two primary services: AI-powered disease detection through medical image analysis
          and AI-based symptom analysis for disease prediction. These services enable early detection of potential 
          health issues, allowing for timely intervention and treatment.
        </p>
        <p className="text-gray-300">
          MediX is being developed for the Google Developer Groups (GDG) Solution Challenge, with the goal of 
          addressing critical healthcare challenges and making a positive impact on global health outcomes.
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Features & Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaBrain className="text-primary mr-2" />
              AI-Powered Disease Detection
            </h3>
            <p className="text-gray-300 mb-4">
              Our advanced AI algorithms can analyze various medical images including ECGs, X-rays, MRIs, and 
              skin images to detect potential diseases with high accuracy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Real-time analysis of medical images</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Confidence score showing certainty of predictions</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Visual insights with affected areas highlighted</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Auto-generated medical reports</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaLaptopMedical className="text-primary mr-2" />
              AI-Based Symptom Analysis
            </h3>
            <p className="text-gray-300 mb-4">
              Users can describe their symptoms in plain language, and our AI will analyze them to predict 
              possible diseases and suggest appropriate medical tests.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Natural language symptom description</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Intelligent follow-up questions for better accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Disease risk assessment with confidence levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Personalized medical test recommendations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center py-8">
            <FaMobileAlt className="text-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">User-Friendly Interface</h3>
            <p className="text-gray-300">
              Intuitive design for seamless user experience across devices
            </p>
          </div>
          
          <div className="card text-center py-8">
            <FaUserMd className="text-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Telemedicine Integration</h3>
            <p className="text-gray-300">
              Connect with healthcare professionals for follow-up consultation
            </p>
          </div>
          
          <div className="card text-center py-8">
            <FaLock className="text-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Privacy & Security</h3>
            <p className="text-gray-300">
              Strong encryption and privacy measures to protect user data
            </p>
          </div>
        </div>
      </div>

      {/* User Journey */}
      <div className="card mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0">
                1
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white mb-2">User Input</h3>
              <p className="text-gray-300">
                Patients access the web/mobile interface and either upload medical images (ECG, X-ray, MRI, skin images) 
                or enter symptoms through our conversational AI interface.
              </p>
            </div>
          </div>
          
          <div className="border-l-2 border-primary ml-8 md:ml-[7.5%] pl-8 md:pl-0 h-8"></div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0">
                2
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white mb-2">AI Processing</h3>
              <p className="text-gray-300">
                Our advanced AI models analyze the input data. For images, specialized computer vision models 
                detect anomalies and potential diseases. For symptoms, natural language processing and diagnostic 
                models predict possible conditions.
              </p>
            </div>
          </div>
          
          <div className="border-l-2 border-primary ml-8 md:ml-[7.5%] pl-8 md:pl-0 h-8"></div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0">
                3
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white mb-2">AI Analysis & Output</h3>
              <p className="text-gray-300">
                The AI model generates a confidence score and produces a detailed analysis. For image analysis, 
                visual insights highlight areas of concern. For symptom analysis, the system provides a risk 
                assessment and recommends appropriate tests.
              </p>
            </div>
          </div>
          
          <div className="border-l-2 border-primary ml-8 md:ml-[7.5%] pl-8 md:pl-0 h-8"></div>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex justify-center md:justify-start">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0">
                4
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-white mb-2">Follow-Up Actions</h3>
              <p className="text-gray-300">
                Based on the AI analysis, users can save results, share them with healthcare providers, or 
                connect with specialists through the telemedicine feature for further consultation and care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Impact & Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaRegChartBar className="text-primary mr-2" />
              Healthcare Systems
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Reduced burden on healthcare infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">More efficient patient triage and resource allocation</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Better data collection for public health monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Earlier disease detection leading to cost savings</span>
              </li>
            </ul>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaUserCheck className="text-primary mr-2" />
              Patients & Users
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Faster access to preliminary medical insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Reduced anxiety through prompt initial assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Better informed healthcare decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">🔹</span>
                <span className="text-gray-300">Improved health outcomes through early intervention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div className="card mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Future Roadmap</h2>
        <p className="text-gray-300 mb-4">
          MediX is continuously evolving to enhance healthcare accessibility and quality. Our future plans include:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-secondary mr-2">🔸</span>
            <span className="text-gray-300">
              <span className="font-medium text-white">Enhanced AI Models:</span> Expanding our disease detection capabilities to cover more medical conditions
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-2">🔸</span>
            <span className="text-gray-300">
              <span className="font-medium text-white">Mobile Applications:</span> Native apps for iOS and Android for improved accessibility
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-2">🔸</span>
            <span className="text-gray-300">
              <span className="font-medium text-white">Integration with Health Records:</span> Secure connection with electronic health record systems
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-2">🔸</span>
            <span className="text-gray-300">
              <span className="font-medium text-white">Multilingual Support:</span> Expanding language capabilities to serve diverse populations
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-secondary mr-2">🔸</span>
            <span className="text-gray-300">
              <span className="font-medium text-white">Advanced Telemedicine Features:</span> Video consultations and real-time health monitoring
            </span>
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="card bg-gradient-to-r from-purple-900 to-indigo-900 border-0">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Meet the Team Behind MediX</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our talented team of developers, AI specialists, and healthcare experts are working together to
            revolutionize healthcare through technology.
          </p>
          <Link to="/team" className="btn-primary">
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;