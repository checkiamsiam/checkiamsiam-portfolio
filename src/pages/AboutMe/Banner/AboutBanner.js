import React from 'react';
import { BiCloudDownload } from "react-icons/bi";
import './AboutBanner.css'
import TypeAnimation from 'react-type-animation';

const AboutBanner = () => {
  return (
    <div>
      <div className='  pt-24 pb-5 '>
        <div className='container  mx-auto text-base-100 px-5'>
          <h1 className=' text-center mb-10 '><span className='text-accent text-4xl title-font about-title relative z-30'>ABOUT ME</span></h1>
          <div className='flex lg:flex-row flex-col  gap-10'>
            <div className='lg:w-1/2 '>
              <div>
                <h1 className='md:text-2xl text-xl text-base-100 mb-3'>- Hey,</h1>

                <h1 className='text-base-100 text-5xl title-font'>Wanna <TypeAnimation
                cursor={false}
                sequence={[
                  'Know About me?',
                  2000,
                  'Judge Me?',
                  2000,
                ]}
                repeat={Infinity} 
                className = 'inline text-primary'
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
              <div className=' flex flex-col justify-center'>
                <h1 className='font-bold text-3xl mb-5 text-primary'>PERSONAL INFO</h1>
                <div className='text-lg '>
                 
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Name :</span>  Sheikh Shahariar Siam</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Age : </span> 19</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Gender : </span>Male</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Nationality : </span>Bangladeshi</p>
                
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Present Adress :</span> Dhaka</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Occupation : </span>Web Developer</p>
                    <p className='mb-5'><span className='font-semibold border-b-2 border-primary'>WhatsApp :</span> +8801910072661</p>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;