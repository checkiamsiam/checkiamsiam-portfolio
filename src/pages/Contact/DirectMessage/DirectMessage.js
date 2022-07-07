import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import ContactForm from '../../Shared&minifier/ContactForm/ContactForm';
import '../../Home/Banner/Banner.css'

const DirectMessage = () => {

  return (

    <div className='py-10 container mx-auto px-5'>
      <h1 className='text-accent text-3xl title-font text-center'>Direct Message</h1>
      <p className='md:w-3/4 px-5 my-5 mx-auto text-base-100 text-center font-semibold text-lg'>I am fully a free minded person. You can send me direct message for contact with me. i will reply in your email as soon as possible.</p>
      <div className='xl:flex justify-between md:px-14 '>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <div>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_o9tuy0fs.json"
              className='w-80 sm:w-96  text-red-300'
            >
            </Player>

          </div>
        </div>
        <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
          <h1 className='text-center text-primary text-3xl pb-5 xl:hidden'>Message</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;