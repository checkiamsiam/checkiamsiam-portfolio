import React , {memo} from 'react';
import TypeAnimation from 'react-type-animation';
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Player } from '@lottiefiles/react-lottie-player';
import ContactForm from '../../Shared&minifier/ContactForm/ContactForm';

const ContactSection = () => {

  return (

    <div className='py-10 container mx-auto px-5'>
      <div className='flex justify-center relative'>
      <div className='text-accent text-4xl title-font text-center my-5 flex justify-center items-center gap-3'>
        <div className='h-[2px] w-5 bg-primary'></div>
        Feel Free To Me
        <div className='h-[2px] w-5 bg-primary'></div>
      </div>

        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/private_files/lf30_dmdqjt1y.json"
          className='w-32 absolute left-40'
        >
        </Player>
      </div>
      <h1 className='text-base-100 text-5xl title-font  mb-10'>Get <TypeAnimation
        cursor={true}
        sequence={[
          'Me ?',
          3000,
          'In Touch',
          3000,
        ]}
        className='inline text-primary mb-5'
        repeat={Infinity}
      />
      </h1>
      <div className='xl:flex justify-between md:px-14 '>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <div className='mb-10'>
            <div className='flex gap-1 items-center mb-3'>
              <MdEmail className='text-6xl text-primary w-20' />

              <div>
                <h1 className='text-accent'>MAIL ME</h1>
                <h1 className='text-base-100'>issiam02415@gmail.com</h1>
              </div>
            </div>
            <div className='flex gap-1 items-center'>
              <RiWhatsappFill className='text-6xl text-primary w-20' />

              <div>
                <h1 className='text-accent'>CALL ME</h1>
                <h1 className='text-base-100 font-mono'>+8801910072661</h1>
              </div>
            </div>
            <h1 className=' my-5 text-accent'>SOCIAL-</h1>
            <div>
              <div className='flex justify-center text-base-100 gap-3'>
                <a target='_blank' className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 text-primary hover:text-accent' href="https://www.facebook.com/checkiamsiam/"><FaFacebookF /></a>
                <a target='_blank' className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 text-primary hover:text-accent' href="https://twitter.com/checkiamsiam"><BsTwitter /></a>
                <a target='_blank' className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 text-primary hover:text-accent' href="https://www.instagram.com/checkiamsiam/"><AiFillInstagram /></a>

              </div>
            </div>

          </div>
        </div>
        <div>
          <h1 className='text-center text-primary text-3xl pb-5 xl:hidden'>Message</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default memo(ContactSection);