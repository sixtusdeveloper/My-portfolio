'use client';

import Link from "next/link";
import BackDropButton from "./ui/BackDropButton";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Modal from "./ui/Modal";
import Image from "next/image";

const Hero = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleHireMeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true);
    }, 2000); // Simulate loading time (2 seconds)
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="pb-2 pt-36" id="Hero">
      <div>
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

      <div className="flex justify-center relative my-16 lg:my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Engineering excellence in every line of code.{" "}
              <a
                href="https://github.com/sixtusdeveloper/My-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
            {isSignedIn && user ? (
              <>
                👋 Hey <span className="text-purple">{user.firstName}</span>
              </>
            ) : (
              "👋 Hey there!"
            )}
          </h3>

          <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
            Welcome to my <span className="text-purple">Portfolio</span>
          </h1>
          <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
            Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
            passion for crafting efficient and scalable solutions. Here, you'll
            find a showcase of my work, ranging from innovative web applications
            to complex backend systems. Whether you're a potential employer,
            collaborator, or just curious about my work, I invite you to explore
            my projects and see how I turn ideas into reality. Let's create
            something amazing together!
          </p>
          <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
            <a onClick={handleHireMeClick}>
              <MagicButton
                title="Hire Me"
                otherClasses="text-[1.4rem] flex justify-center items-center text-center"
              />
            </a>
            <Link href="https://www.sixtusdev.net" legacyBehavior>
              <a rel="noopener noreferrer">
                <BackDropButton
                  title="Read More"
                  icon={
                    <GoArrowRight className="text-purple forced-colors:purple text-lg" />
                  }
                  position="right"
                  otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-100"></div>
        </div>
      )}

      {/* Modal for Hire Me */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold text-purple tracking-wide text-center mb-4">
            Hire Me
          </h2>
          <p className="text-center p-2 mb-8 tracking-wide text-gray-200 leading-6">
            Thank you for considering me for your project! I'm eager to work
            with you and bring your ideas to life. Below you can preview my CV:
          </p>

          {/* CV Preview */}
          <div className="flex justify-center mb-8">
            <Image
              src="/My-Resume.jpg" // Replace with the correct path to your CV preview image
              alt="CV Preview"
              width={600}
              height={800}
              className="rounded-lg shadow-md object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;














// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import Modal from "./ui/Modal";
// import Image from "next/image";

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleModalToggle = () => {
//     setModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <a onClick={handleModalToggle}>
//               <MagicButton
//                 title="Hire Me"
//                 otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//               />
//             </a>
//             <Link href="https://www.sixtusdev.net" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       {/* Modal for Hire Me */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleModalToggle}
//       >
//         <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
//           <h2 className="text-2xl font-bold text-purple tracking-wide text-center mb-4">Hire Me</h2>
//           <p className="text-center p-2 mb-8 tracking-wide text-gray-200 leading-6">
//             Thank you for considering me for your project! I'm eager to work with you and bring your ideas to life. Below you can preview my CV:
//           </p>

//           {/* CV Preview */}
//           <div className="flex justify-center mb-8">
//             <Image
//               src="/cv.jpg" // Replace with the correct path to your CV preview image
//               alt="CV Preview"
//               width={600}
//               height={800}
//               className="rounded-lg shadow-md object-contain"
//               style={{ width: 'auto', height: 'auto' }}
//             />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Hero;







// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import Modal from "./ui/Modal";
// import Image from "next/image";

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [downloadStatus, setDownloadStatus] = useState("Download CV");

//   const handleModalToggle = () => {
//     setModalOpen(!isModalOpen);
//   };

//   const downloadFile = (fileUrl: string, fileName: string): void => {
//     fetch(fileUrl)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.style.display = "none";
//         a.href = url;
//         a.download = fileName;
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
  
//         setDownloadStatus("downloaded");
//         setTimeout(() => {
//           setDownloadStatus("idle");
//         }, 2000);
//       })
//       .catch(() => {
//         console.error("Failed to download the file");
//       });
//   };
  
//   const handleDownloadClick = () => {
//     downloadFile("/cv.jpg", "My_CV.jpg"); // Download JPG
//   };

//   const handleDownloadPDFClick = () => {
//     downloadFile("/cv.pdf", "My_CV.pdf"); // Download PDF
//   };

//   const handleDownloadPNGClick = () => {
//     downloadFile("/cv.png", "My_CV.png"); // Download PNG
//   };

//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <a onClick={handleModalToggle}>
//               <MagicButton
//                 title="Hire Me"
//                 otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//               />
//             </a>
//             <Link href="https://www.sixtusdev.net" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       {/* Modal for Hire Me */}
//       <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
//         <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
//           <h2 className="text-2xl font-bold text-purple tracking-wide text-center mb-4">Hire Me</h2>
//           <p className="text-center p-2 mb-8 tracking-wide text-gray-200 leading-6">
//             Thank you for considering me for your project! I'm eager to work with you and bring your ideas to life. Below you can preview my CV:
//           </p>

//           {/* CV Preview */}
//           <div className="flex justify-center mb-8">
//             <Image
//               src="/cv.jpg" // Replace with the correct path to your CV preview image
//               alt="CV Preview"
//               width={600}
//               height={800}
//               className="rounded-lg shadow-md object-contain"
//               style={{ width: 'auto', height: 'auto' }}
//             />
//           </div>

//           {/* Download Buttons */}
//           <div className="flex justify-center space-x-4">
//             <button
//               className="bg-red-800 text-white px-6 py-2 rounded-lg"
//               onClick={handleDownloadClick}
//             >
//               {downloadStatus === 'downloading' ? 'Downloading JPG...' : 'Download CV (JPG)'}
//             </button>
//             <button
//               className="bg-blue-800 text-white px-6 py-2 rounded-lg"
//               onClick={handleDownloadPDFClick}
//             >
//               {downloadStatus === 'downloading' ? 'Downloading PDF...' : 'Download CV (PDF)'}
//             </button>
//             <button
//               className="bg-green-800 text-white px-6 py-2 rounded-lg"
//               onClick={handleDownloadPNGClick}
//             >
//               {downloadStatus === 'downloading' ? 'Downloading PNG...' : 'Download CV (PNG)'}
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Hero;

















// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import Modal from "./ui/Modal";
// import Image from "next/image";

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [downloadStatus, setDownloadStatus] = useState("Download CV");

//   const handleModalToggle = () => {
//     setModalOpen(!isModalOpen);
//   };

//   const handleDownloadClick = () => {
//     const imageUrl = "/cv.jpg"; // Replace with the correct path to your CV image
//     const imageName = "My_CV.jpg"; // Desired filename for the download
  
//     fetch(imageUrl)
//       .then(response => response.blob())
//       .then(blob => {
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.style.display = 'none';
//         a.href = url;
//         a.download = imageName; // Set the file name for the download
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
  
//         setDownloadStatus("downloaded"); // Set status to downloaded
//         setTimeout(() => {
//           setDownloadStatus("idle"); // Reset status to idle after a delay
//         }, 2000);
//       })
//       .catch(() => {
//         console.error('Failed to download the file');
//       });
//   };
  
  
//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <a onClick={handleModalToggle}>
//               <MagicButton
//                 title="Hire Me"
//                 otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//               />
//             </a>
//             <Link href="https://www.sixtusdev.net" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Hire Me */}
//       <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
//         <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
//           <h2 className="text-2xl font-bold text-purple tracking-wide text-center mb-4">Hire Me</h2>
//           <p className="text-center p-2 mb-8 tracking-wide text-gray-200 leading-6">
//             Thank you for considering me for your project! I'm eager to work with you and bring your ideas to life. Below you can preview my CV:
//           </p>

//           {/* CV Preview */}
//           <div className="flex justify-center mb-8">
//             <Image
//               src="/cv.jpg" // Replace with the correct path to your CV preview image
//               alt="CV Preview"
//               width={600}
//               height={800}
//               className="rounded-lg shadow-md object-contain"
//               style={{ width: 'auto', height: 'auto' }}
//             />
//           </div>

//           {/* Download Button */}
//           <div className="flex justify-center">
//             <button
//               className="bg-purple-600 text-white px-6 py-3 rounded-lg"
//               onClick={handleDownloadClick}
//             >
//               {downloadStatus === 'downloading' ? 'Downloading...' : 'Download CV'}
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Hero;
















// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import Modal from "./ui/Modal";
// import Image from "next/image"; // Next.js image component

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [downloadStatus, setDownloadStatus] = useState("Download CV");

//   const handleModalToggle = () => {
//     setModalOpen(!isModalOpen);
//   };

//   // const handleDownloadClick = () => {
//   //   setDownloadStatus("Downloading...");

//   //   // Simulate downloading the CV
//   //   const link = document.createElement("a");
//   //   link.href = "/cv.jpg"; // Path to your CV
//   //   link.download = "cv.pdf";
//   //   link.click();

//   //   link.onload = () => {
//   //     setDownloadStatus("Downloaded");
//   //     setTimeout(() => setDownloadStatus("Download CV"), 3000);
//   //   };

//   //   link.onerror = () => {
//   //     setDownloadStatus("Download CV");
//   //     alert("Failed to download the CV. Please try again.");
//   //   };
//   // };

//   const handleDownloadClick = () => {
//     setDownloadStatus("Downloading...");
  
//     const link = document.createElement("a");
  
//     // Check if the file is an image or a PDF based on the file extension
//     const isImage = /\.(jpe?g|png|gif)$/i.test('/cv.jpg'); // Replace with your image path
//     const filePath = isImage ? "/cv.jpg" : "/cv.pdf"; // Replace with correct paths
  
//     link.href = filePath;
//     link.download = isImage ? "cv.jpg" : "cv.pdf"; // Use the appropriate file name
//     link.click();
  
//     link.onload = () => {
//       setDownloadStatus("Downloaded");
//       setTimeout(() => setDownloadStatus("Download CV"), 3000);
//     };
  
//     link.onerror = () => {
//       setDownloadStatus("Download CV");
//       alert("Failed to download the file. Please try again.");
//     };
//   };
  

//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <a onClick={handleModalToggle}>
//               <MagicButton
//                 title="Hire Me"
//                 otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//               />
//             </a>
//             <Link href="https://www.sixtusdev.net" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Hire Me */}
//       <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
//         <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
//           <h2 className="text-2xl font-bold text-center mb-4">Hire Me</h2>
//           <p className="text-center mb-8">
//             Thank you for considering me for your project! I'm eager to work
//             with you and bring your ideas to life. Below you can preview my CV:
//           </p>

//           {/* CV Preview */}
//           <div className="flex justify-center mb-8">
//             <Image
//               src="/cv.jpg" // Replace with the correct path to your CV preview image
//               alt="CV Preview"
//               width={600}
//               height={800}
//               className="rounded-lg shadow-md object-contain"
//             />
//           </div>

//           {/* Download Button */}
//           <div className="flex justify-center">
//             <button
//               className="bg-purple-600 text-white px-6 py-3 rounded-lg"
//               onClick={handleDownloadClick}
//             >
//               {downloadStatus}
//             </button>
//           </div>

//           <div className="mt-4 flex justify-center">
//             <button
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
//               onClick={handleModalToggle}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Hero;


















// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState } from "react";
// import Modal from "./ui/Modal"; // Assuming you have a Modal component

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleModalToggle = () => {
//     setModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <a onClick={handleModalToggle}>
//               <MagicButton
//                 title="Hire Me"
//                 otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//               />
//               {/* this is the button for opening the modal for CV */}
//             </a>
//             <Link href="https://www.sixtusdev.net" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Hire Me */}
//       <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
//         <div className="p-8">
//           <h2 className="text-2xl font-bold text-center mb-4">Hire Me</h2>
//           <p className="text-center">
//             Thank you for considering me for your project! I'm eager to work with you and bring your ideas to life.
//           </p>
//           {/* Add more details here, such as a form, contact information, or links to your resume/CV */}
//           <button
//             className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg"
//             onClick={handleModalToggle}
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Hero;

















// 'use client';

// import Link from "next/link";
// import BackDropButton from "./ui/BackDropButton";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   return (
//     <div className="pb-2 pt-36" id="Hero">
//       <div>
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

//       <div className="flex justify-center relative my-16 lg:my-20 z-10">
//         <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
//               Engineering excellence in every line of code.{" "}
//               <a
//                 href="https://github.com/sixtusdeveloper/My-portfolio/" target="_blank" rel="noopener noreferrer"
//                 className="font-semibold text-purple"
//               >
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>

//           <h3 className="text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]">
//             {isSignedIn && user ? (
//               <>
//                 👋 Hey <span className="text-purple">{user.firstName}</span>
//               </>
//             ) : (
//               "👋 Hey there!"
//             )}
//           </h3>

//           <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]">
//             Welcome to my <span className="text-purple">Portfolio</span>
//           </h1>
//           <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-4 mb-8">
//             Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//             passion for crafting efficient and scalable solutions. Here, you'll
//             find a showcase of my work, ranging from innovative web applications
//             to complex backend systems. Whether you're a potential employer,
//             collaborator, or just curious about my work, I invite you to explore
//             my projects and see how I turn ideas into reality. Let's create
//             something amazing together!
//           </p>
//           <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
//             <Link href="/" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <MagicButton
//                   title="Hire Me"
//                   otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//                 />
//               </a>
//             </Link>
//             <Link href="/pages/about" legacyBehavior>
//               <a rel="noopener noreferrer">
//                 <BackDropButton
//                   title="Read More"
//                   icon={
//                     <GoArrowRight className="text-purple forced-colors:purple text-lg" />
//                   }
//                   position="right"
//                   otherClasses=" md:ring-none flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
//                 />
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
