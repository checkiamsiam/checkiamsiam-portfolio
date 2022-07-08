import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { TiInfoLargeOutline } from 'react-icons/ti'
const PersonalInfo = () => {
  return (
    <div className='py-10  container mx-auto'>
      <div className='text-accent text-4xl title-font text-center my-5 flex justify-center items-center gap-1'>
        <div className='h-[2px] w-4 bg-primary'></div>
        PERSONAL INFO <TiInfoLargeOutline className='text-sm mb-7'/>
        <div className='h-[2px] w-4 bg-primary'></div>
      </div>
      <div className='lg:flex gap-5'>

        <div className='flex justify-center items-center lg:w-1/2'>
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_hl1cxbdk.json"
          >
          </Player>
        </div>
        <div className='px-5 lg:w-1/2 flex justify-start lg:justify-center'>
          <div>
            <div className='sm:text-lg text-md text-base-100'>

              <p className='mb-3'><span className='font-semibold'>Name &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;: &nbsp;</span>   Sheikh Shahariar Siam</p>
              <p className='mb-3'><span className='font-semibold'>Age&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	: &nbsp;</span> 19</p>
              <p className='mb-3'><span className='font-semibold '>Gender&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;: &nbsp;</span> Male</p>
              <p className='mb-3'><span className='font-semibold '>Nationality &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;: &nbsp;</span> Bangladeshi</p>

              <p className='mb-3'><span className='font-semibold'>Present Adress 	&nbsp;	&nbsp;:	&nbsp;</span> Jatrabari, Dhaka</p>
              <p className='mb-3'><span className='font-semibold'>Occupation &nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;: &nbsp;</span> Web Developer</p>
              <p className='mb-5'><span className='font-semibold'>WhatsApp 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;:	&nbsp;</span> +8801910072661</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;