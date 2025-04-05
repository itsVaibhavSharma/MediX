import React from 'react';
import TeamCard from '../components/TeamCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Vaibhav Sharma',
      role: 'Team Leader',
      email: 'itsVaibhavSharma007@gmail.com',
      github: 'https://github.com/itsVaibhavSharma/',
      linkedin: 'https://www.linkedin.com/in/itsvaibhavsharma/',
      image: '/assets/images/team/vaibhav.png'
    },
    {
      name: 'Akshara Rathore',
      role: 'Team Member',
      email: 'itsAksharaRathore@gmail.com',
      github: 'https://github.com/ItsAksharaRathore/',
      linkedin: 'https://www.linkedin.com/in/itsAksharaRathore/',
      image: '/assets/images/team/akshara.jpg'
    },
    {
      name: 'Prasanna Saxena',
      role: 'Team Member',
      email: 'prasannasaxena4@gmail.com',
      github: 'https://github.com/PRASANNA-THE-PRASANN1/',
      linkedin: 'https://www.linkedin.com/in/prasannasaxena/',
      image: '/assets/images/team/prasanna.jpg'
    },
    {
      name: 'Shreya Khantal',
      role: 'Team Member',
      email: 'khantalshreya@gmail.com',
      github: 'https://github.com/ShreyaKhantal/',
      linkedin: 'https://www.linkedin.com/in/shreyakhantal/',
      image: '/assets/images/team/shreya.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Our Team</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the talented individuals behind MediX who are working to revolutionize healthcare through technology.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              email={member.email}
              github={member.github}
              linkedin={member.linkedin}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* Project Information */}
      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">About the Project</h2>
        <p className="text-gray-300 mb-4">
          MediX is being developed as part of the Google Developer Groups (GDG) Solution Challenge.
          Our team is passionate about leveraging technology to address critical healthcare challenges
          and make a positive impact on global health outcomes.
        </p>
        <p className="text-gray-300 mb-4">
          We're combining artificial intelligence, web technologies, and healthcare expertise to create
          an accessible platform for early disease detection and telemedicine services.
        </p>
        <p className="text-gray-300">
          For more information about the project, its features, and future plans, please visit our
          About page.
        </p>
      </div>
    </div>
  );
};

export default Team;