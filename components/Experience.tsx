'use client';

import React, { useState, useRef, useEffect } from "react";
import { experiences, education } from "@/data";
import { Spotlight } from "./ui/Spotlight";
import Modal from "./Modal";
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';

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

// Define the type for education items
type EducationItem = {
  degree: string;
  institution: string;
  type: string;
  status: string;
  date: string;
  description: string;
  img: string;
};

const Experience = () => {
  const [selectedSection, setSelectedSection] = useState("work");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded">("idle"); // Download state
  const [scrollPosition, setScrollPosition] = useState<number>(0); // Store scroll position
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (educationItem: EducationItem) => {
    setIsLoading(true); // Start loading
    setSelectedEducation(educationItem);
    setScrollPosition(window.scrollY); // Record current scroll position

    // Simulate a loading delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2000); // Adjust the delay as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEducation(null);
    setDownloadStatus("idle"); // Reset download status when modal closes

    // Smooth scroll to the previous section
    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 300); // Adjust timeout to match your modal closing animation duration
  };

  // Close modal if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleDownload = () => {
    if (selectedEducation?.img) {
      setDownloadStatus("downloading"); // Set status to downloading
      const link = document.createElement('a');
      link.href = selectedEducation.img;
      link.download = `${selectedEducation.degree}-certificate.jpg`;
      link.click();
      
      setTimeout(() => {
        setDownloadStatus("downloaded"); // Set status to downloaded after a delay
        setTimeout(() => {
          setDownloadStatus("idle"); // Reset status to idle after another delay
        }, 2000); // Adjust this delay as needed
      }, 2000); // Simulate download time
    }
  };

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
                    <a
                      href="#"
                      onClick={() => openModal(edu)}
                      className="font-medium tracking-wider text-sm text-purple hover:text-blue-100"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      verify credentials{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div ref={modalRef} className="modal-content bg-gray-900 p-6 rounded-lg shadow-lg">
            {isLoading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
              </div>
            )}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-700 text-white"
            >
              <IoClose />
            </button>
            <h3 className="text-lg font-bold text-white mb-2">
              {selectedEducation?.degree}
            </h3>
            <p className="text-gray-400 mb-2">
              {selectedEducation?.institution} - {selectedEducation?.type}
            </p>
            <p className="text-gray-400 mb-2">{selectedEducation?.status}</p>
            <p className="text-gray-400 mb-4">{selectedEducation?.date}</p>
            <p className="text-gray-400 mb-4">{selectedEducation?.description}</p>
            {selectedEducation?.img && (
              <div className="relative">
                <Image
                  src={selectedEducation.img}
                  alt={selectedEducation.degree}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="rounded-md"
                />
                <button
                  onClick={handleDownload}
                  disabled={downloadStatus === "downloading"}
                  className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-600 text-white"
                >
                  {downloadStatus === "downloading" ? (
                    <span>Downloading...</span>
                  ) : downloadStatus === "downloaded" ? (
                    <span>Downloaded!</span>
                  ) : (
                    <AiOutlineDownload />
                  )}
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Experience;









// COMPLETELY WORKING WELL JUST NOT RETURNING THE USER TO THE PREVIOUS SECTION AFTER CLOSING THE MODAL
// 'use client';

// import React, { useState, useRef, useEffect } from "react";
// import { experiences, education } from "@/data";
// import { Spotlight } from "./ui/Spotlight";
// import Modal from "./Modal";
// import Image from 'next/image';
// import { IoClose } from 'react-icons/io5';
// import { AiOutlineDownload } from 'react-icons/ai';

// // Truncate the course to a maximum length
// const MAX_COURSE_LENGTH = 35;
// const truncateCourse = (text: string, maxLength: number): string => {
//   if (text.length <= maxLength) return text;
//   return `${text.slice(0, maxLength)}...`;
// };

// // Truncate the Description to a maximum length
// const MAX_DESCRIPTION_LENGTH = 60;
// const truncateDescription = (text: string, maxLength: number): string => {
//   if (text.length <= maxLength) return text;
//   return `${text.slice(0, maxLength)}...`;
// };

// // Define the type for education items
// type EducationItem = {
//   degree: string;
//   institution: string;
//   type: string;
//   status: string;
//   date: string;
//   description: string;
//   img: string;
// };

// const Experience = () => {
//   const [selectedSection, setSelectedSection] = useState("work");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded">("idle"); // Download state
//   const modalRef = useRef<HTMLDivElement | null>(null);

//   const openModal = (educationItem: EducationItem) => {
//     setIsLoading(true); // Start loading
//     setSelectedEducation(educationItem);

//     // Simulate a loading delay (e.g., 2 seconds)
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsModalOpen(true);
//     }, 2000); // Adjust the delay as needed
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEducation(null);
//     setDownloadStatus("idle"); // Reset download status when modal closes
//   };

//   // Close modal if user clicks outside of it
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         closeModal();
//       }
//     };
    
//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   const handleDownload = () => {
//     if (selectedEducation?.img) {
//       setDownloadStatus("downloading"); // Set status to downloading
//       const link = document.createElement('a');
//       link.href = selectedEducation.img;
//       link.download = `${selectedEducation.degree}-certificate.jpg`;
//       link.click();
      
//       setTimeout(() => {
//         setDownloadStatus("downloaded"); // Set status to downloaded after a delay
//         setTimeout(() => {
//           setDownloadStatus("idle"); // Reset status to idle after another delay
//         }, 2000); // Adjust this delay as needed
//       }, 2000); // Simulate download time
//     }
//   };

//   return (
//     <section
//       id="Experience"
//       className="relative md:pt-10 mx-auto max-w-6xl px-4 lg:px-8 pb-20"
//     >
//       <div className="relative">
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="top-10 left-full h-[80vh] w-[50vw]"
//           fill="purple"
//         />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className="my-8 relative text-center">
//         <h2 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider mb-8">
//           My <span className="text-purple">Experience</span>
//         </h2>
//         <div className="flex justify-center space-x-4 mb-8">
//           <button
//             onClick={() => setSelectedSection("work")}
//             className={`px-4 py-2 rounded-md ${
//               selectedSection === "work"
//                 ? "bg-blue-800 text-white"
//                 : "bg-transparent ring-1 text-gray-400"
//             }`}
//           >
//             Work Experience
//           </button>
//           <button
//             onClick={() => setSelectedSection("education")}
//             className={`px-4 py-2 rounded-md ${
//               selectedSection === "education"
//                 ? "bg-blue-800 text-white"
//                 : "bg-transparent ring-1 text-gray-400"
//             }`}
//           >
//             Education
//           </button>
//         </div>
//       </div>

//       <div className="timeline">
//         {selectedSection === "work"
//           ? experiences.map((experience, index) => (
//               <div
//                 key={index}
//                 className={`timeline-container ${
//                   index % 2 === 0 ? "left" : "right"
//                 }`}
//               >
//                 <div className="timeline-icon"></div>

//                 <div className="bg-black-200 border border-gray-800 p-6 rounded-lg shadow-lg">
//                   <h3 className="text-lg font-bold tracking-wide text-white">
//                     {experience.title}
//                   </h3>
//                   <p className="inline-flex space-x-2">
//                     <span className="text-sm text-white-200 mb-2">
//                       {experience.location}&nbsp;-&nbsp;
//                       <span className="text-sm text-purple">
//                         {experience.type}
//                       </span>
//                     </span>
//                   </p>
//                   <time
//                     className="block text-xs mb-4 text-gray-400"
//                     suppressHydrationWarning
//                   >
//                     {experience.date}
//                   </time>
//                   <p className="text-gray-400">{experience.description}</p>
//                 </div>
//               </div>
//             ))
//           : education.map((edu, index) => (
//               <div
//                 key={index}
//                 className={`timeline-container ${
//                   index % 2 === 0 ? "left" : "right"
//                 }`}
//               >
//                 <div className="timeline-icon"></div>

//                 <div className="bg-black-200 border border-gray-800 p-6 rounded-lg shadow-lg">
//                   <h3 className="text-lg font-bold tracking-wider mb-1 text-white">
//                     {truncateCourse(edu.degree, MAX_COURSE_LENGTH)}
//                   </h3>
//                   <p className="inline-flex space-x-2">
//                     <span className="text-sm tracking-wide text-white">
//                       {edu.institution}&nbsp;-&nbsp;
//                       <span className="text-sm tracking-wide text-purple">{edu.type}</span>
//                     </span>
//                   </p>
//                   <p className="text-white-200 text-sm py-1">
//                     {edu.status} 
//                   </p>
//                   <time
//                     className="block text-xs mb-1 text-gray-400"
//                     suppressHydrationWarning
//                   >
//                     {edu.date} 
//                   </time>
//                   <div className="text-gray-400 text-sm leading-6">
//                     {truncateDescription(edu.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
//                     <a
//                       href="#"
//                       onClick={() => openModal(edu)}
//                       className="font-medium tracking-wider text-sm text-purple hover:text-blue-100"
//                     >
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       verify credentials{" "}
//                       <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>

//       {isModalOpen && (
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <div
//             ref={modalRef}
//             className="p-6 max-h-[80vh] overflow-y-auto no-scrollbar relative bg-black-800 border border-gray-900 rounded-lg shadow-lg"
//           >
//             {isLoading ? (
//               <div className="flex justify-center items-center">
//                 <div className="w-12 h-12 border-4 border-t-4 border-purple rounded-full animate-spin"></div>
//                 <p className="ml-4 text-white">Loading...</p>
//               </div>
//             ) : (
//               <div>
//                 <h3 className="text-white font-semibold tracking-wide text-xl mb-4">
//                   {selectedEducation?.degree}
//                 </h3>
//                 <p className="mb-4">
//                   <span className="font-medium text-gray-400 text-sm tracking-wide">Institution:</span>&nbsp;<span className="text-sm text-white-100 tracking-wide">{selectedEducation?.institution}</span>
//                 </p>
//                 <p className="mb-4">
//                   <span className="font-medium text-gray-400 text-sm tracking-wide">Type:</span>&nbsp;<span className="text-sm text-white-100 tracking-wide">{selectedEducation?.type}</span>
//                 </p>
//                 <p className="mb-4">
//                   <span className="font-medium text-gray-400 text-sm tracking-wide">Status:</span>&nbsp;<span className="text-sm text-white-100 tracking-wide">{selectedEducation?.status}</span>
//                 </p>
//                 <p className="mb-4">
//                   <span className="font-medium text-gray-400 text-sm tracking-wide">Date:</span>&nbsp;<span className="text-sm text-white-100 tracking-wide">{selectedEducation?.date}</span>
//                 </p>
//                 <p className="mb-6 text-sm text-medium text-white-100 leading-6 tracking-wide">{selectedEducation?.description}</p>
//                 <div className="flex justify-between items-center mb-4">
//                   <Image
//                     src={selectedEducation?.img || "/fallback.jpg"}
//                     alt={selectedEducation?.degree || "Certificate Image"}
//                     className="rounded-md w-full"
//                     width={400}
//                     height={300}
//                   />
//                 </div>
               
//                 <div className="mt-4 flex items-center justify-center">
//                   <button
//                     onClick={handleDownload}
//                     className={`px-4 py-2 flex items-center justify-center space-x-2 rounded-md shadow-md ${
//                       downloadStatus === "downloaded"
//                         ? "bg-green-500 text-white"
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     } focus:outline-none`}
//                   >
//                     <AiOutlineDownload className="mr-2" />
//                     {downloadStatus === "idle" && "Download Certificate"}
//                     {downloadStatus === "downloading" && "Downloading..."}
//                     {downloadStatus === "downloaded" && "Downloaded"}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </Modal>
//       )}

//           {/* Loading animation */}
//           {isLoading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
//           <div className="w-16 h-16 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Experience;
