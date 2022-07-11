import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useInView } from "framer-motion"
import ContactForm from '../../Shared&minifier/ContactForm/ContactForm';
import '../../Home/Banner/Banner.css'
import { contactBodyFrom, contactBodyTo, contactBodyTransition, titleFrom, titleTo, titleTransition } from '../../../hooks/animations';

const DirectMessage = () => {
  const refSection9 = useRef(null)
  const isInViewSection = useInView(refSection9);

  return (

    <div className='py-10 container mx-auto px-5'>
     <motion.div
     initial={titleFrom}
     animate={isInViewSection && titleTo}
     transition={titleTransition}
     >
     <div className='text-accent text-4xl title-font text-center my-5 flex justify-center items-center gap-3'>
        <div className='h-[2px] w-5 bg-primary'></div>
        Direct Message
        <div className='h-[2px] w-5 bg-primary'></div>
      </div>
      <p className='md:w-3/4 px-5 my-5 mx-auto text-base-100 text-center font-semibold text-lg'>I am fully a free minded person. You can send me direct message for contact with me. i will reply in your email as soon as possible.</p>
     </motion.div>
      <div ref={refSection9} className='xl:flex justify-between md:px-14 '>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <motion.div
          initial={contactBodyFrom}
          animate={isInViewSection && contactBodyTo}
          transition={contactBodyTransition}
          >
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_o9tuy0fs.json"
              className='w-80 sm:w-96  text-red-300'
            >
            </Player>

          </motion.div>
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