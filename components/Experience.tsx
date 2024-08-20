'use client';

import React, { useState } from "react";
import { experiences, education } from "@/data"; // Import both experiences and education data
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";



// Truncate the course to a maximum length
const MAX_COURSE_LENGTH = 35;
const truncateCourse = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
// Truncate the Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 60;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};


const Experience = () => {
  const [selectedSection, setSelectedSection] = useState("work"); // State to manage toggling between sections

  return (
    <section
      id="Experience"
      className="relative md:pt-10 mx-auto max-w-6xl px-4 lg:px-8 pb-20"
    >
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="my-8 relative text-center">
        <h2 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider mb-8">
          My <span className="text-purple">Experience</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedSection("work")}
            className={`px-4 py-2 rounded-md ${
              selectedSection === "work"
                ? "bg-blue-800 text-white"
                : "bg-transparent ring-1 text-gray-400"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setSelectedSection("education")}
            className={`px-4 py-2 rounded-md ${
              selectedSection === "education"
                ? "bg-blue-800 text-white"
                : "bg-transparent ring-1 text-gray-400"
            }`}
          >
            Education
          </button>
        </div>
      </div>

      <div className="timeline">
        {selectedSection === "work"
          ? experiences.map((experience, index) => (
              <div
                key={index}
                className={`timeline-container ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-icon"></div>

                <div className="bg-black-200 border border-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold tracking-wide text-white">
                    {experience.title}
                  </h3>
                  <p className="inline-flex space-x-2">
                    <span className="text-sm text-white-200 mb-2">
                      {experience.location}&nbsp;-&nbsp;
                      <span className="text-sm text-purple">
                        {experience.type}
                      </span>
                    </span>
                  </p>
                  <time
                    className="block text-xs mb-4 text-gray-400"
                    suppressHydrationWarning
                  >
                    {experience.date}
                  </time>
                  <p className="text-gray-400">{experience.description}</p>
                </div>
              </div>
            ))
          : education.map((edu, index) => (
              <div
                key={index}
                className={`timeline-container ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-icon"></div>

                <div className="bg-black-200 border border-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold tracking-wider mb-1 text-white">
                    {truncateCourse(edu.degree, MAX_COURSE_LENGTH)}
                  </h3>
                  <p className="inline-flex space-x-2">
                    <span className="text-sm tracking-wide text-white">
                      {edu.institution}&nbsp;-&nbsp;
                      <span className="text-sm tracking-wide text-purple">{edu.type}</span>
                    </span>
                  </p>
                  <p className="text-white-200 text-sm py-1">
                    {edu.status} 
                  </p>
                  <time
                    className="block text-xs mb-1 text-gray-400"
                    suppressHydrationWarning
                  >
                    {edu.date} 
                  </time>
                  <div className="text-gray-400 text-sm leading-6">
                    {truncateDescription(edu.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
                    <Link href="/pages/customer-stories" legacyBehavior>
                      <a href="#" className="font-medium tracking-wider text-sm text-purple hover:text-blue-100">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Verify credentials{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </Link>
                  </div>
                  
                  
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Experience;


