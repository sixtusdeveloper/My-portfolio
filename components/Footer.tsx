import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-200 text-white border-t border-gray-800 py-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/sixtusdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <FaGithub className="text-2xl" />
          </div>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <FaTwitter className="text-2xl" />
          </div>
        </a>
        
        <a
          href="https://www.youtube.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <FaYoutube className="text-2xl" />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <FaLinkedin className="text-2xl" />
          </div>
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
            <FaFacebook className="text-2xl" />
          </div>
        </a>
      </div>

      <div className="flex justify-center items-center py-4 mt-2 md:mt-6">
        <span className="w-full flex flex-col text-center text-white-100 text-sm p-2 tracking-wider">
          Copyright&copy; 2024. developed by Sixtusdev | all rights reserved | terms & conditions.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
