import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, points }) => {
  return (
    <div className="card h-full overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-3 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-secondary mr-2">🔹</span>
            <span className="text-gray-300 text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;