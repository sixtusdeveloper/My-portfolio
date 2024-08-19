import React from 'react';
import { experiences } from '@/data';
import { Spotlight } from './ui/Spotlight';

const Experience = () => {
  return (
    <section id="Experience" className="relative md:pt-10 mx-auto max-w-6xl px-4 lg:px-8 pb-20">

      <div className='relative'>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='my-8 relative text-center'>
        <h2 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider mb-8">My <span className="text-purple">Experience</span></h2>
      </div>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-icon"></div>
      
              <div className="bg-black-200 border border-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold tracking-wide text-white">{experience.title}</h3>
                <span className='inline-flex space-x-2'>
                  <p className="text-sm text-white-200 mb-2">{experience.location}&nbsp;-&nbsp;<span className="text-sm text-purple">{experience.type}</span></p>
                </span>
                <time className="block text-xs mb-4 text-gray-400">{experience.date}</time>
                <p className="text-gray-400">{experience.description}</p>
              </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
