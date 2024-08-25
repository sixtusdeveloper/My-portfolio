'use client';

import React, { useState, useRef, useEffect } from 'react';
import Modal from './ui/ServicesModal';
import { services } from '@/data';
import { Button } from './ui/MovingBorder';
import Image from 'next/image';



// Truncate the Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 60;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for full-page loader
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useRef(0);

  const openModal = (serviceItem: Service) => {
    setIsLoading(true); // Show the full-page loader
    setSelectedService(serviceItem);

    // Simulate a delay for the loading state
    setTimeout(() => {
      scrollPosition.current = window.scrollY;
      setIsModalOpen(true);
      setIsLoading(false); // Hide the full-page loader
    }, 2000); // Adjust the delay as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);

    window.scrollTo({
      top: scrollPosition.current,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section id="Services" className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-16 pb-20">
      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        My&nbsp;<span className="text-purple">Services</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {services.map((service, index) => (
          <Button
            key={index}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            onClick={() => openModal(service)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image 
                src={service.thumbnail} 
                alt={service.thumbnail} 
                width={250} height={250} 
                className="lg:w-32 md:w-20 w-16" 
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{service.title}</h1>
                <p className="text-sm text-start text-white-100 tracking-wide leading-6 mt-3 font-semibold">{truncateDescription(service.desc, MAX_DESCRIPTION_LENGTH)}&nbsp;<span className="text-purple text-sm text-end font-medium tracking-wide">Read more</span></p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      {/* Full-page loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
         <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-100"></div>
       </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div ref={modalRef} className="p-6 max-h-[80vh] overflow-y-auto no-scrollbar relative">
          {selectedService && (
            <>
              <Image 
              src={selectedService.thumbnail} 
              width={300} height={300} 
              alt={selectedService.title} 
              className="w-20 h-20 mb-4 modal-top-img" 
              style={{ width: 'auto', height: 'auto' }}
              />
              <div className="lg:ms-5">
                <h3 className="text-start py-6 text-xl md:text-2xl font-bold">{selectedService.title}</h3>
                {/* Detailed paragraphs */}
                {selectedService.detailedDesc.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-start text-white-200 text-sm mt-3 leading-7 tracking-wide font-normal">{paragraph}</p>
                ))}
                {/* Render images */}
                <div className="grid grid-cols-2 sm:grid-cols-2 py-8 gap-4 mt-6">
                  {selectedService.detailedDesc.images.map((image, idx) => (
                    <Image 
                    key={idx} 
                    src={image.src} 
                    width={250} 
                    height={200}
                    alt={image.alt} 
                    className="w-full h-auto object-cover rounded-lg shadow-md modal-img" 
                    />
                  ))}
                </div>
                {/* Text1 paragraphs */}
                {selectedService.detailedDesc.textDesc.map((text, idx) => (
                  <p key={idx} className="text-start text-white-200 text-sm mt-3 leading-7 tracking-wide font-normal">{text}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Services;



