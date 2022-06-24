import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiMongodb } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';

const MySkill = () => {

  return (
    <div className='py-10 px-5 container mx-auto'>
      <h1 className=' text-center   '><span className='text-accent text-4xl title-font relative skills-title z-30'>My Skills</span></h1>
      <h1 className='text-base-100 text-center italic'>Here Is My Overview Of Coding Strategy</h1>
      <div className='text-base-100 mt-10'>
        <div className='flex flex-wrap justify-center  gap-10'>
          <div>
            <div className='w-full h-12 bg-primary rounded-3xl flex justify-center items-center text-2xl font-semibold'>Languages</div>

           <div>
           <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_mqtsu9ea.json"
              className='md:w-24 w-14'
            >
            </Player>
           </div>
            <div className='text-2xl h-44 w-80 md:h-44 md:w-96 border-[16px] border-primary rounded-full flex justify-evenly items-center'>
            <div className='text-xl p-2 bg-neutral rounded-full text-[#DD4B25]'><AiFillHtml5 className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-[#254BDD]'><FaCss3Alt className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-[goldenrod]'><IoLogoJavascript className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-green-700'><IoLogoNodejs className='text-4xl'/></div>
            </div>
          </div>

          <div>
            <div className='w-full h-12 bg-primary rounded-3xl flex justify-center items-center text-2xl font-semibold'>Libraries & Framework</div>
            <div>
           <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_mqtsu9ea.json"
              className='md:w-24 w-14'
            >
            </Player>
           </div>
            <div className='text-2xl h-44 w-80 md:h-44 md:w-96 border-[16px] border-primary rounded-full flex justify-evenly items-center'>
            <div className='text-xl p-2 bg-neutral rounded-full text-sky-400'><FaReact className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full '><SiExpress className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-sky-400'><SiTailwindcss className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-[#6D11EE]'><FaBootstrap className='text-4xl'/></div>
            </div>
          </div>

          <div>
            <div className='w-full h-12 bg-primary rounded-3xl flex justify-center items-center text-2xl font-semibold'>Tools</div>
            <div>
           <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_mqtsu9ea.json"
              className='md:w-24 w-14'
            >
            </Player>
           </div>
            <div className='text-2xl h-44 w-80 md:h-44 md:w-96 border-[16px] border-primary rounded-full flex justify-evenly items-center'>
            <div className='text-xl p-2 bg-neutral rounded-full text-yellow-400'><SiFirebase className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-green-600'><SiMongodb className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-black'><BsGithub className='text-4xl'/></div>
            <div className='text-xl p-2 bg-neutral rounded-full text-[#31B0B6]'><SiNetlify className='text-4xl'/></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MySkill;