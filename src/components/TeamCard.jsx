import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TeamCard = ({ name, role, email, github, linkedin, image }) => {
  return (
    <div className="card flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${name}`;
          }}
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <p className="text-primary font-medium mb-3">{role}</p>
      
      <div className="flex space-x-4 mt-2">
        <a 
          href={`mailto:${email}`} 
          className="text-gray-400 hover:text-white transition-colors"
          title={email}
        >
          <FaEnvelope className="w-5 h-5" />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;