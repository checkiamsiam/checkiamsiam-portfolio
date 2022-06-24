import React from 'react';
import { BiCloudDownload } from "react-icons/bi";
import './AboutBanner.css'
import TypeAnimation from 'react-type-animation';
import '../../Home/Banner/Banner.css'

const AboutBanner = () => {
  return (
    <div>
      <div className='  pt-24 pb-5 '>
        <div className='container  mx-auto text-base-100 px-5'>
          <h1 className=' text-center mb-10 '><span className='text-accent text-4xl title-font about-title relative z-30'>ABOUT ME</span></h1>
          <div className='flex lg:flex-row flex-col  gap-10'>
            <div className='lg:w-1/2 lg:order-none order-1'>
              <div>
                <h1 className='md:text-2xl text-xl text-base-100 mb-3'>- Hey,</h1>

                <h1 className='text-base-100 sm:text-5xl text-3xl title-font'>Wanna <TypeAnimation
                  cursor={false}
                  sequence={[
                    'Know About me?',
                    2000,
                    'Judge Me?',
                    2000,
                  ]}
                  repeat={Infinity}
                  className='inline text-primary'
                /></h1>
                <div className=' md:mt-5 mt-2'>
                  <p className='md:text-2xl text-xl text-base-100 capitalize'>i am a junior react js front end web developer. programing is the most enjoyable thing of my life. <br />
                    ~ Self Learner<br />
                    ~ Well Explorer<br />
                    ~ Lucky at Attempts<br />
                  </p>
                </div>
                <div>
                  <a target='_blank' class="dedcription-btn" href="https://drive.google.com/file/d/1ShKKTsrgN_E1W1yYxhBklMhuPVOeDZcu/view?usp=sharing">
                    <span class="name-descripeion">Download Resume</span>
                    <BiCloudDownload class="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 flex items-center justify-center'>
              <div className=' flex flex-col justify-center '>
                <div className='relative'>

                  <img src="https://i.ibb.co/q5krwXx/professional-siam.jpg" alt="MyPhoto" className=' w-80 border-8  border-primary rounded-full' />
                  <div className='w-6 h-6 bg-primary rounded-full absolute top-4 right-4'></div>
                  <div className='w-2 h-2 bg-primary rounded-full absolute top-0 right-0'></div>
                </div>
                <div className='w-full h-2 bg-primary mt-2 rounded-md'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;