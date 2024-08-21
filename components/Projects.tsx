"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 2;

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-10 pb-20" id="Projects">
      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        My&nbsp;<span className="text-purple">Recent Projects</span>
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mt-6 mb-8">
        <button
          onClick={() => {
            setSelectedCategory("Frontend");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 mx-2 rounded-md tracking-wide transition-all duration-300 ${
            selectedCategory === "Frontend"
              ? "bg-blue-800 text-white"
              : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
          }`}
        >
          Frontend Projects
        </button>
        <button
          onClick={() => {
            setSelectedCategory("Fullstack");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 mx-2 rounded-md tracking-wide transition-all duration-300 ${
            selectedCategory === "Fullstack"
              ? "bg-blue-800 text-white"
              : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
          }`}
        >
          Fullstack Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center py-8 lg:py-10 gap-10 mt-4">
        {currentProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="relative my-8 group overflow-hidden rounded-3xl bg-[#13162D] shadow-lg transition-transform transform hover:scale-105"
            key={id}
            style={{ width: "460px", height: "400px" }}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-3/5 object-cover transition-opacity duration-300 group-hover:opacity-75"
            />
            <div className="p-4">
              <h1 className="font-bold text-xl truncate">{title}</h1>
              <p className="text-gray-400 mt-2 text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                         transform: `translateX(-${5 * index + 2}px)`,
                       }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-300 transition-colors duration-300"
                >
                  Check Live Site <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 mx-1 rounded-md transition-all duration-300 ${
                currentPage === pageNumber
                  ? "bg-blue-800 text-white"
                  : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;







