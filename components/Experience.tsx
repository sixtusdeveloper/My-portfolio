import React from 'react';

const experiences = [
  {
    position: 'Software Engineer',
    company: 'Tech Innovators',
    duration: 'Jan 2022 - Present',
    description: 'Developed and maintained web applications using React, Node.js, and other modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    position: 'Frontend Developer',
    company: 'Creative Solutions',
    duration: 'Jun 2020 - Dec 2021',
    description: 'Designed and implemented user-friendly interfaces for web applications. Optimized website performance and improved user experience, leading to a 20% increase in user engagement.',
  },
  {
    position: 'Junior Developer',
    company: 'NextGen Technologies',
    duration: 'Jan 2019 - May 2020',
    description: 'Assisted in the development of web applications and contributed to backend APIs. Gained experience in full-stack development and learned best practices in software engineering.',
  },
];

const Experience = () => {
  return (
    <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-16 pb-20" id="Experience">
      <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wide">
        My&nbsp;<span className="text-purple">Experience</span>
      </h1>
      <div className="mt-10 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row md:space-x-6 bg-black-100 p-6 rounded-lg shadow-lg border border-gray-700">
            <div className="md:w-1/4 text-gray-400">
              <h2 className="text-xl font-semibold text-white">{exp.position}</h2>
              <p className="text-sm text-purple-500">{exp.company}</p>
              <p className="text-sm">{exp.duration}</p>
            </div>
            <div className="md:w-3/4 mt-4 md:mt-0 text-gray-300">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
