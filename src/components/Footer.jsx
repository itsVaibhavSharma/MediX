import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaHeartbeat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <FaHeartbeat className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold text-white">MediX</span>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} MediX. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-6 md:order-3 mt-4 md:mt-0">
            <a href="https://github.com/itsVaibhavSharma/" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/itsvaibhavsharma/" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex md:order-2 space-x-6 justify-center md:justify-start">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-white text-sm">
              About
            </Link>
            <Link to="/team" className="text-gray-400 hover:text-white text-sm">
              Team
            </Link>
          </div>
          <p className="mt-8 md:mt-0 text-base text-gray-400 text-center md:text-left md:order-1">
            Made with ❤️ for GDG Solution Challenge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;