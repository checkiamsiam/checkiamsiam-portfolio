import React from 'react';
import TypeAnimation from 'react-type-animation';
import { BiCloudDownload } from "react-icons/bi";
import './Banner.css'


const Banner = () => {
  return (
    <div className='bg-banner h-screen -z-30 bg-no-repeat bg-center bg-cover flex items-center md:items-end md:pb-20'>
      <div className='container mx-auto '>
        <div className='-z-20 header-options  md:px-0 px-5'>

          <div>
            <h1 className='md:text-2xl text-xl text-base-100'>- I'm</h1>
            <h1 className='md:text-4xl text-2xl text-primary'>Sheikh Shahariar Siam</h1>
            <div className='md:block hidden mt-5 text-base-100'>
              <div style={{ fontSize: '2.25rem', lineHeight: '2.5rem', width: '100%', }}> <TypeAnimation
                cursor={true}
                sequence={[
                  'Junior Web Developer',
                  2000,
                  'Front End Developer',
                  2000,
                  'Jr. ReactJS Developer',
                  2000,
                ]}
                repeat={Infinity}
              />
              </div>
            </div>
            <div className='md:hidden block  text-base-100'>
              <div style={{ fontSize: '1.5rem', lineHeight: '2', width: '100%', }}> <TypeAnimation
                cursor={true}
                sequence={[
                  'Junior Web Developer',
                  2000,
                  'Front End Developer',
                  2000,
                  'Jr. ReactJS Developer',
                  2000,
                ]}
                repeat={Infinity}
              /></div>
            </div>
            <div className='lg:w-1/2 md:mt-5 mt-2'>
              <p className='md:text-2xl text-xl text-base-100'>From the beginning of my web development career, always i was serious to coding and i'm a self learner who enjoy to analysis any new thing. </p>
            </div>
            <div>
              <a target='_blank' class="dedcription-btn" href="https://drive.google.com/file/d/1ShKKTsrgN_E1W1yYxhBklMhuPVOeDZcu/view?usp=sharing">
                <span class="name-descripeion">Download Resume</span>
                <BiCloudDownload class="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;