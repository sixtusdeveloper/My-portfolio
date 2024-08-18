'use client';
import { testimonials } from '@/data';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import { companies } from '@/data';

import React from 'react'
// import { div } from 'three/examples/jsm/nodes/Nodes.js';

const Clients = () => {
  return (
    <div className="py-8" id="Clients">
      <h1 className="heading text-white mb-8 font-bold text-center text-[2.7rem] leading-snug tracking-wider">
      Satisfied 
        <span className="text-purple">&nbsp;Clients.</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
        items={testimonials}
        direction="right"
        speed="slow"
        />
      </div>
    </div>
  )
}

export default Clients