"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

const Projects = () => {
  // State for selected category and pagination
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [currentPage, setCurrentPage] = useState(1);

  // Number of projects per page
  const projectsPerPage = 2;

  // Filtered projects based on selected category
  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Number of pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div
      className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-10 pb-20"
      id="Projects"
    >
      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        My&nbsp;<span className="text-purple">Recent Projects</span>
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mt-6 mb-8">
        <button
          onClick={() => {
            setSelectedCategory("Frontend");
            setCurrentPage(1); // Reset to the first page
          }}
          className={`px-4 py-2 mx-2 rounded-md ${
            selectedCategory === "Frontend"
              ? "bg-blue-800 text-white"
              : "bg-gray-900 text-white border border-gray-800"
          }`}
        >
          Frontend Projects
        </button>
        <button
          onClick={() => {
            setSelectedCategory("Fullstack");
            setCurrentPage(1); // Reset to the first page
          }}
          className={`px-4 py-2 mx-2 rounded-md ${
            selectedCategory === "Fullstack"
              ? "bg-blue-800 text-white"
              : "bg-gray-900 text-white border border-gray-800"
          }`}
        >
          Fullstack Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex relative flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {currentProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="sm:h-[41rem] h-[28rem] lg:min-h-[29.5rem] flex items-center justify-center sm:w-[480px] w-[90vw]"
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[480px] w-[90vw] overflow-hidden sm:h-[50vh] h-[33vh] mb-4 lg:mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 px-6 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
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

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
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
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === pageNumber
                  ? "bg-blue-800 text-white"
                  : "bg-gray-900 text-white border border-gray-800"
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








// "use client";

// import React, { useState } from 'react';
// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";
// import { PinContainer } from "@/components/ui/3d-pin";

// const Projects = () => {
//   const itemsPerPage = 4; // Adjust this to set how many items you want to show per page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate total pages
//   const totalPages = Math.ceil(projects.length / itemsPerPage);

//   // Calculate the projects to display on the current page
//   const currentProjects = projects.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-10 pb-20" id="Projects">
//       <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
//         My&nbsp;<span className="text-purple">Recent Projects</span>
//       </h1>
//       <div className="flex relative flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
//         {currentProjects.map(({ id, title, des, img, iconLists, link }) => (
//           <div
//             className="sm:h-[41rem] h-[28rem] lg:min-h-[29.5rem] flex items-center justify-center sm:w-[480px] w-[90vw]"
//             key={id}
//           >a
//             <PinContainer title={link} href={link}>
//               <div className="relative flex items-center justify-center sm:w-[480px] w-[90vw] overflow-hidden sm:h-[50vh] h-[33vh] mb-4 lg:mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden rounded-3xl lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src="/bg.png" alt="bg-img" />
//                 </div>
//                 <img src={img} alt={title} className="z-10 px-6 absolute bottom-0" />
//               </div>

//               <h1 className="font-bold lg:text-xl md:text-md text-base line-clamp-1">
//                 {title}
//               </h1>

//               <p
//                 className="lg:text-md lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <p className="flex lg:text-lg md:text-xs text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-10">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 mx-2 bg-gray-900 border border-gray-800 text-white rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-gray-200 flex items-center text-sm font-bold mx-2">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 mx-2 bg-gray-900 border border-gray-800 text-white rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;
