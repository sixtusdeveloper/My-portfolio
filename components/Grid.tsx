import React from 'react'
import {BentoGrid, BentoGridItem} from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section className="relative pt-8 lg:pt-14 mx-auto max-w-7xl px-6 lg:px-16 pb-20" id="About">
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

export default Grid