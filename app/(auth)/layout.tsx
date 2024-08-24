import React from 'react';
import { FaCode, FaLaptopCode, FaProjectDiagram, FaUsers, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import { Spotlight } from './ui/Spotlight';
import "./auth-styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-page relative min-h-screen h-full bg-black dark:bg-black-100 bg-grid dark:bg-grid-white/[0.03] bg-grid-black/[0.2] overflow-y-auto">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="flex flex-col lg:flex-row min-h-screen h-full w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:py-6 p-6 sm:p-10 text-white z-10">
          <div className="flex items-center gap-1">
            <Image
              src="/Logo-icon.png"
              alt="Sixtusdev Logo"
              width={80}
              height={80}
              className="mb-0 entry-logo"
              priority={true}
              style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
            />
            <span className="text-white font-medium tracking-wide text-xl">Sixtusdev</span>
          </div>

          <ul className="mt-5 space-y-4">
            <li className="flex items-center py-2 sm:py-4">
              <FaLaptopCode className="text-gray-100 text-xl sm:text-2xl" />
              <span className="ml-2 sm:ml-5 text-sm sm:text-base">Build and maintain modern web applications</span>
            </li>
            <li className="flex items-center py-2 sm:py-4">
              <FaCode className="text-gray-100 text-xl sm:text-2xl" />
              <span className="ml-2 sm:ml-5 text-sm sm:text-base">Write clean, efficient, and scalable code</span>
            </li>
            <li className="flex items-center py-2 sm:py-4">
              <FaProjectDiagram className="text-gray-100 text-xl sm:text-2xl" />
              <span className="ml-2 sm:ml-5 text-sm sm:text-base">Manage projects from concept to completion</span>
            </li>
            <li className="flex items-center py-2 sm:py-4">
              <FaUsers className="text-gray-100 text-xl sm:text-2xl" />
              <span className="ml-2 sm:ml-5 text-sm sm:text-base">Collaborate with cross-functional teams</span>
            </li>
            <li className="flex items-center py-2 sm:py-4">
              <FaLightbulb className="text-gray-100 text-xl sm:text-2xl" />
              <span className="ml-2 sm:ml-5 text-sm sm:text-base">Innovate and bring creative solutions to life</span>
            </li>
          </ul>
        </div>
        <div className="w-full bg-black-100 overflow-y-auto shadow-md flex items-center justify-center md:py-10 lg:py-20 p-6 sm:p-10 lg:w-1/2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;














// import React from 'react';
// import { FaBook, FaPenNib, FaUsers, FaHeart, FaHandshake } from 'react-icons/fa';
// import Image from 'next/image';
// import { Spotlight } from './ui/Spotlight';
// import "./auth-styles.css";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <main className="auth-page relative min-h-screen h-full bg-black dark:bg-black-100 bg-grid dark:bg-grid-white/[0.03] bg-grid-black/[0.2] overflow-y-auto">
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//       <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

//       <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

//       <div className="flex flex-col lg:flex-row min-h-screen h-full w-full">
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:py-6 p-6 sm:p-10 text-white z-10">
//           <div className="flex items-center gap-1">
//             <Image
//               src="/Logo-icon.png"
//               alt="Chatter Logo"
//               width={80}
//               height={80}
//               className="mb-0 entry-logo"
//               priority={true}
//               style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
//             />
//             <span className="text-white font-medium tracking-wide text-xl">Sixtusdev</span>
//           </div>

//           <ul className="mt-5 space-y-4">
//             <li className="flex items-center py-2 sm:py-4">
//               <FaHandshake className="text-gray-100 text-xl sm:text-2xl" />
//               <span className="ml-2 sm:ml-5 text-sm sm:text-base">Connect with authors and readers</span>
//             </li>
//             <li className="flex items-center py-2 sm:py-4">
//               <FaBook className="text-gray-100 text-xl sm:text-2xl" />
//               <span className="ml-2 sm:ml-5 text-sm sm:text-base">Discover new books and articles</span>
//             </li>
//             <li className="flex items-center py-2 sm:py-4">
//               <FaPenNib className="text-gray-100 text-xl sm:text-2xl" />
//               <span className="ml-2 sm:ml-5 text-sm sm:text-base">Share your own stories and ideas</span>
//             </li>
//             <li className="flex items-center py-2 sm:py-4">
//               <FaUsers className="text-gray-100 text-xl sm:text-2xl" />
//               <span className="ml-2 sm:ml-5 text-sm sm:text-base">Join a community of book lovers</span>
//             </li>
//             <li className="flex items-center py-2 sm:py-4">
//               <FaHeart className="text-gray-100 text-xl sm:text-2xl" />
//               <span className="ml-2 sm:ml-5 text-sm sm:text-base">Get personalized recommendations</span>
//             </li>
//           </ul>
//         </div>
//         <div className="w-full bg-black-100 overflow-y-auto shadow-md flex items-center justify-center md:py-10 lg:py-20 p-6 sm:p-10 lg:w-1/2">
//           {children}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Layout;







