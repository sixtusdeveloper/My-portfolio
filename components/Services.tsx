'use client';

import React, { useState, useRef, useEffect } from 'react';
import Modal from './ui/ServicesModal';
import { services } from '@/data';
import { Button } from './ui/MovingBorder';
import Image from 'next/image';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useRef(0);

  const openModal = (serviceItem: Service) => {
    scrollPosition.current = window.scrollY;
    setSelectedService(serviceItem);
    setIsModalOpen(true);
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
              style={{ width: 'auto', height: 'auto' }}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">{service.title}</h1>
                <p className="text-sm text-start text-white-100 tracking-wide leading-6 mt-3 font-semibold">{service.desc}&nbsp;<span className="text-purple text-sm text-end font-medium tracking-wide">read more</span></p>
              </div>
            </div>
          </Button>
        ))}
      </div>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 py-8 gap-4 mt-6">
                  {selectedService.detailedDesc.images.map((image, idx) => (
                    <Image 
                    key={idx} 
                    src={image.src} 
                    width={300} 
                    height={300} 
                    alt={image.alt} 
                    className="w-full h-auto object-cover rounded-lg shadow-md modal-img" 
                    style={{ width: 'auto', height: 'auto' }}
                    />
                    
                  ))}
                </div>
                  
                {/* Text1 paragraphs */}
                {selectedService.detailedDesc.textDesc.map((text, idx) => (
                  <p key={idx} className="text-start text-white-200 text-sm mt-3 leading-7 tracking-wide font-normal">{text}</p>
                ))}

                {/* Render icons */}
                {selectedService.detailedDesc.icons && (
                  <div className="flex justify-between space-x-4 gap-2 py-4 px-10 mt-6">
                    {selectedService.detailedDesc.icons.map((icon, idx) => (
                      <Image 
                      key={idx} 
                      src={icon.src} 
                      alt={icon.alt} 
                      width={100} 
                      height={100} 
                      className="w-12 h-12 oauth-icon" 
                      style={{ width: 'auto', height: 'auto' }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default Services;







// import React, { useState, useRef, useEffect } from 'react';
// import Modal from './ui/ServicesModal';
// import { services } from '@/data';
// import { Button } from './ui/MovingBorder';
// import Image from 'next/image';

// const Services = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState<Service | null>(null); // Use the Service type here
//   const modalRef = useRef<HTMLDivElement | null>(null);
//   const scrollPosition = useRef(0); // Store the scroll position

//   const openModal = (serviceItem: Service) => { // Use the Service type here
//     scrollPosition.current = window.scrollY; // Capture the current scroll position
//     setSelectedService(serviceItem);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedService(null);

//     // Scroll back to the services section smoothly
//     window.scrollTo({
//       top: scrollPosition.current,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         closeModal();
//       }
//     };

//     if (isModalOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isModalOpen]);

//   return (
//     <section id="Services" className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-16 pb-20">
      
//       <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">My&nbsp;<span className="text-purple">Services</span></h1>
//       <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
//         {services.map((service, index) => (
//           <Button
//             key={index}
//             borderRadius='1.75rem'
//             duration={Math.floor(Math.random() *10000) + 10000}
//             className='flex-1 text-white border-neutral-200 dark:border-slate-800'
//             onClick={() => openModal(service)}
//           >
//             <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
//               <Image src={service.thumbnail} alt={service.thumbnail} width={250} height={250} className='lg:w-32 md:w-20 w-16'/>
//               <div className='lg:ms-5'>
//                 <h1 className='text-start text-xl md:text-2xl font-bold'>{service.title}</h1>
//                 <p className='text-start text-white-100 tracking-wide leading-6 mt-3 font-semibold'>{service.desc}</p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <div ref={modalRef} className="p-6 max-h-[80vh] overflow-y-auto no-scrollbar relative">
//           {selectedService && (
//             <>
//               <Image src={selectedService.thumbnail} width={250} height={250} alt={selectedService.title} className="w-20 h-20 mb-4" />
//               <div className='lg:ms-5'>
//                 <h3 className="text-start py-6 text-xl md:text-2xl font-bold">{selectedService.title}</h3>
//                 {/* <p className="text-start text-white-100 text-sm tracking-wide mt-3 leading-7 font-normal">{selectedService.detailedDesc}</p> */}
//                 {/* Detailed paragraph */}
//                 {selectedService.detailedDesc.paragraphs.map((paragraph, idx) => (
//                   <p key={idx} className="text-start text-white-100 text-md mt-3 leading-6 tracking-wide font-normal">{paragraph}</p>
//                 ))}

//                 {/* Render images */}
//                 {selectedService.detailedDesc.images.map((image, idx) => (
//                   <Image key={idx} src={image.src} width={250} height={250} alt={image.alt} className="w-full mb-4" />
//                 ))}

//                   {/* Render icons */}
//                 {selectedService.detailedDesc.icons && (
//                   <div className="flex space-x-4">
//                     {selectedService.detailedDesc.icons.map((icon, idx) => (
//                       <Image key={idx} src={icon.src} alt={icon.alt} width={150} height={150} className="w-8 h-8" />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </Modal>
//     </section>
//   );
// };

// export default Services;















// import React from 'react';
// import { Button } from './ui/MovingBorder';
// import { services } from '@/data'
// import Image from 'next/image';

// const Features = () => {
//   return (
//       <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-16 pb-20" id="Services">
//         <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">My&nbsp;<span className="text-purple">Services</span></h1>

//          <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
//             {services.map((card) => (
//                <Button
//                key={card.id}
//                borderRadius='1.75rem'
//                duration={Math.floor(Math.random() *10000) + 10000}
//                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
//                >
//                   <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
//                   <Image src={card.thumbnail} alt={card.thumbnail} width={250} height={250} className='lg:w-32 md:w-20 w-16'/>
//                   <div className='lg:ms-5'>
//                      <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
//                      <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
//                   </div>
//                   </div>
//                </Button>
//             ))}
//          </div>
//       </div>
//   )
// }

// export default Features;
