import Link from 'next/link';
import BackDropButton from './ui/BackDropButton';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { GoArrowRight } from 'react-icons/go';
import { useUser } from '@clerk/nextjs';


const Hero = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="pb-2 pt-36" id="Hero">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Engineering Excellence in Every Line of Code.{' '}
              <a href="https://chattereditor.vercel.app/" className="font-semibold text-purple">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>


          <h3 className='text-[1.2rem] font-bold tracking-wider text-white sm:text-[1.8rem]'>
            {isSignedIn && user ? (
              <>
                👋 Hey <span className='text-purple'>{user.firstName}</span>
              </>
            ) : (
              '👋 Hey there!'
            )}
          </h3>

          <h1 className='text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center text-white lg:text-[3rem]'>
            Welcome to my <span className='text-purple'>Portfolio</span>
          </h1>
          <p className="text-center md:tracking-wide leading-7 sm:tracking-wide my-4 text-[14px] lg:px-6 px-2 lg:text-[14px] mb-8">
          Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a passion for crafting efficient and scalable solutions. Here, you'll find a showcase of my work, ranging from innovative web applications to complex backend systems. Whether you're a potential employer, collaborator, or just curious about my work, I invite you to explore my projects and see how I turn ideas into reality. Let's create something amazing together!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mb-2 space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/" legacyBehavior>
              <a rel="noopener noreferrer">
                <MagicButton 
                  title="Hire Me" 
                  otherClasses='text-[1.4rem] flex justify-center items-center text-center'
                />
              </a>
            </Link>
            <Link href="/pages/about" legacyBehavior>
              <a rel="noopener noreferrer">
                <BackDropButton
                  title="Read More"
                  icon={<GoArrowRight className="text-purple forced-colors:purple text-lg" />}
                  position="right"
                  otherClasses=' md:ring-none text-[1.3rem] flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200'
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



