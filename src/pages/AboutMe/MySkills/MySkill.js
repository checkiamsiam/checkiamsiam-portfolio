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
              <div className='text-xl p-2 bg-neutral rounded-full text-[#DD4B25] shadow-md shadow-[#DD4B25] hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><AiFillHtml5 className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-[#254BDD] shadow-md shadow-[#254BDD] hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaCss3Alt className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-[goldenrod] shadow-md shadow-[goldenrod]  hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><IoLogoJavascript className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-green-700 shadow-md shadow-green-700 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><IoLogoNodejs className='text-4xl' /></div>
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
              <div className='text-xl p-2 bg-neutral rounded-full text-sky-400 shadow-md shadow-sky-700 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaReact className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full shadow-md shadow-white  hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><SiExpress className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-sky-400 shadow-md shadow-sky-400 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><SiTailwindcss className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-[#6D11EE] shadow-md shadow-[#6D11EE] hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaBootstrap className='text-4xl' /></div>
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
              <div className='text-xl p-2 bg-neutral rounded-full text-yellow-400 shadow-md shadow-yellow-400  hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><SiFirebase className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-green-600 shadow-md shadow-green-600  hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><SiMongodb className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-black shadow-md shadow-red-200 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><BsGithub className='text-4xl' /></div>
              <div className='text-xl p-2 bg-neutral rounded-full text-[#31B0B6] shadow-md shadow-[#31B0B6] hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><SiNetlify className='text-4xl' /></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MySkill;