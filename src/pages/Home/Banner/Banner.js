import React, { memo, useRef } from 'react';
import TypeAnimation from 'react-type-animation';
import { BiCloudDownload } from "react-icons/bi";
import { motion, useInView } from "framer-motion"
import './Banner.css'
import { bannerFrom, bannerTo, bannerTransition} from '../../../hooks/animations';


const Banner = () => {
  const refSection5 = useRef(null)
  const isInViewSection = useInView(refSection5);
  return (
    <div className='bg-banner h-screen -z-30 bg-no-repeat bg-center bg-cover  flex justify-center items-center lg:px-10 px-0 '>
      <div
        className='container mx-auto'>
        <div className='-z-20   md:px-0 px-5'>

          <motion.div
            initial={bannerFrom}
            animate={isInViewSection && bannerTo}
            transition={bannerTransition}
            ref={refSection5}
            className='lg:w-1/2'>
            <h1 className='text-3xl  text-base-100 title-font'>Welcome Here</h1>
            <h1 className='md:text-4xl text-[1.5rem] text-primary mt-5'>~ This is Siam</h1>
            <div className='md:block hidden mt-5 text-neutral-content'>
              <div style={{ fontSize: '2.25rem', lineHeight: '2.5rem', width: '100%', }}>~ I'm A <TypeAnimation
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
                className='inline-block'
              />
              </div>
            </div>
            <div className='md:hidden block  text-neutral-content'>
              <div className='flex gap-4' style={{ fontSize: '1.5rem', lineHeight: '2', width: '100%', }}>~  <TypeAnimation
                cursor={true}
                sequence={[
                  'Front End Developer',
                  2000,
                  'Jr. ReactJS Developer',
                  2000,
                ]}
                repeat={Infinity}
              /></div>
            </div>
            <div className=' md:mt-5 mt-2'>
              <p className='text-xl text-neutral-content capitalize font-semibold '>'Coding' is the most favorite Word of my life. i'm a self learner who enjoy to analysis any new thing. </p>
            </div>
            <div>
              <a target='_blank' class="dedcription-btn btn" href="https://drive.google.com/file/d/1ShKKTsrgN_E1W1yYxhBklMhuPVOeDZcu/view?usp=sharing">
                <span class="name-descripeion">Download Resume</span>
                <BiCloudDownload class="btn-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);