import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGraduationCap } from 'react-icons/fa'
import { motion, useInView } from "framer-motion"
import { serviceOneFrom, serviceOneTo, serviceOneTransition, titleFrom, titleTo, titleTransition } from '../../../hooks/animations';

const Education = () => {
  const refSection8 = useRef(null)
  const isInViewSection = useInView(refSection8);
  return (
    <div className='container mx-auto py-10   px-5'>
     <motion.div
      initial={titleFrom}
      animate={isInViewSection && titleTo}
      transition={titleTransition}
     >
     <div className='text-accent text-4xl title-font text-center my-5 flex justify-center items-center gap-3'>
        <div className='h-[2px] w-5 bg-primary'></div>
         <FaGraduationCap className='sm:block hidden'/> Education & Courses
        <div className='h-[2px] w-5 bg-primary'></div>
      </div>
      <h1 className='text-center text-base-100'>( Qualifications )</h1>
     </motion.div>
      <motion.div
      initial={serviceOneFrom}
      animate={isInViewSection && serviceOneTo}
      transition={serviceOneTransition}
       ref={refSection8} className='lg:flex'>
        <div className='lg:w-1/2 '>
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_DMgKk1.json"
            className='md:w-3/4'
          >
          </Player>
        </div>
        <div className='text-base-100 flex flex-col gap-5 justify-evenly items-center lg:w-1/2 lg:p-10'>
          <div className='w-full'>
            <h1 className='text-3xl text-primary'>Education:</h1>
            <h1 className='text-right sm:text-xl'>2020 - still running</h1>
            <p className='sm:text-xl'> <b className='font-bold text-accent'>Diploma in Engineering</b> at Computer
              Science & Technology in Dhaka Politechnic
              Institute.</p>
          </div>
          <div className='w-full'>
          <h1 className='text-3xl text-primary'>Courses:</h1>
            <h1 className='text-right sm:text-xl'>Jan 2022 - may 2022</h1>
            <p className='sm:text-xl'> <b className='font-bold text-accent'>Complete web development course</b> with Jhankar mahbub in Programing hero </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;