import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onDownload?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, onDownload }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 border border-gray-800 shadow-lg rounded-lg max-w-3xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-gray-800 text-gray-400 hover:text-white"
        >
          <IoClose size={18} />
        </button>
        {children}
        <div className="flex justify-center mt-6">
          <button
            onClick={onDownload}
            className="p-3 flex items-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <AiOutlineDownload className="mr-2" />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
