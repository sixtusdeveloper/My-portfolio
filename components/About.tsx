import React from 'react'
import {BentoGrid, BentoGridItem} from './ui/BentoGrid';
import { gridItems } from '@/data';

const About = () => {
  return (
    <section className="relative pt-8 lg:pt-14 mx-auto max-w-7xl px-6 lg:px-16 pb-20" id="About">
      <h1 className="text-white py-4 lg:pb-8 my-8 lg:my-10 font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        About&nbsp;<span className="text-purple">Sixtus</span>
      </h1>
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem 
          id={id}
          key={id}
          title={title}
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          titleClassName={titleClassName}
          spareImg={spareImg}
          />
      ))}
      </BentoGrid>
    </section>
  )
}

export default About;