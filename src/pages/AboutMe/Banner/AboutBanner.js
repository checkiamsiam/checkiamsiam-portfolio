import React from 'react';
import { BiCloudDownload } from "react-icons/bi";
import './AboutBanner.css'
import TypeAnimation from 'react-type-animation';

const AboutBanner = () => {
  return (
    <div>
      <div className=' min-h-screen  pt-24 pb-5 '>
        <div className='container  mx-auto text-base-100 px-5'>
          <h1 className=' text-center mb-10 '><span className='text-accent text-4xl title-font about-title relative z-30'>ABOUT ME</span></h1>
          <div className='flex lg:flex-row flex-col  gap-10'>
            <div className='lg:w-1/2 '>
              <div>
                <h1 className='md:text-2xl text-xl text-base-100 mb-3'>- Hey,</h1>

                <h1 className='text-base-100 text-5xl title-font'>Wanna <TypeAnimation
                  cursor={false}
                  sequence={[
                    'Know About Me ?',
                    2000,
                  ]}
                  className='inline text-primary mb-5'
                  repeat={Infinity}
                /></h1>
                <div className=' md:mt-5 mt-2'>
                  <p className='md:text-2xl text-xl text-base-100 capitalize'>i am a junior react js front end web developer. programing is the most enjoyable thing of my life. <br />
                  ~ Self Learner<br />
                  ~ Well Explorer<br />
                  ~ Lucky at Attempts<br />
                   </p>
                </div>

              </div>
            </div>
            <div className='lg:w-1/2 flex items-center justify-center'>
              <div className='w-full'>
                <h1 className='font-bold text-3xl mb-5 text-primary'>PERSONAL INFO</h1>
                <div className='sm:flex gap-10 text-lg'>
                  <div className=''>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>First Name :</span>  Sheikh Shahariar</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Last Name :</span>  Siam</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Age : </span> 19</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Gender : </span>Male</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Nationality : </span>Bangladeshi</p>
                  </div>
                  <div className=''>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Present Adress :</span> Dhaka</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Permanent Adress  :</span> Prirojpur</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Occupation : </span>Web Developer</p>
                    <p className='mb-3'><span className='font-semibold border-b-2 border-primary'>Interest :</span> Programing</p>
                    <p className='mb-5'><span className='font-semibold border-b-2 border-primary'>WhatsApp :</span> +8801910072661</p>
                  </div>
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
      </div>
    </div>
  );
};

export default AboutBanner;