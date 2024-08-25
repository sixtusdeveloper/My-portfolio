import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-200 text-white border-t border-gray-800 p-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/sixtusdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <FaGithub size={18} />
          </span>
        </a>
        <a
          href="https://x.com/develites01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <FaTwitter size={18} />
          </span>
        </a>

        <a
          href="https://www.youtube.com/@Sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <FaYoutube size={18} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <FaLinkedin size={18} />
          </span>
        </a>
        <a
          href="https://web.facebook.com/develitesacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-blue-200"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
            <FaFacebook size={18} />
          </span>
        </a>
      </div>

      <div className="flex justify-center items-center py-4 mt-2 md:mt-6">
        <span className="w-full flex flex-col text-center text-white-100 text-sm p-2 tracking-wider">
          Copyright&copy; 2024. developed by Sixtusdev | all rights reserved |
          terms & conditions version 0.1.0.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
