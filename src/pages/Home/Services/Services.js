import React from 'react';
import './service.css'
import { IoColorPaletteSharp } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { motion, useInView } from "framer-motion"
import { serviceOneFrom, serviceOneTo, serviceOneTransition, serviceThreeFrom, serviceThreeTo, serviceTreeTransition, serviceTwoFrom, serviceTwoTo, serviceTwoTransition, titleFrom, titleTo, titleTransition } from '../../../hooks/animations';
import { useRef } from 'react';

const Services = () => {
  const refSection = useRef(null)
  const isInViewSection = useInView(refSection);
  return (
    <div
      className='container mx-auto px-5'>
      <motion.div
        initial={titleFrom}
        animate={isInViewSection && titleTo}
        transition={titleTransition}
        className='text-accent text-4xl title-font text-center my-10 flex justify-center items-center gap-3'>
        <div className='h-[2px] w-5 bg-primary'></div>
        My Services
        <div className='h-[2px] w-5 bg-primary'></div>
      </motion.div>

      <div ref={refSection} className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-between'>
        <motion.div
          initial={serviceOneFrom}
          animate={isInViewSection && serviceOneTo}
          transition={serviceOneTransition}
          class="card sm:h-[500px]   bg-base-100 shadow-xl image-full full-card overflow-hidden">
          <figure><img src="https://i.ibb.co/wrYKP0V/webdesign.jpg" alt="Design" className='w-full bg-img' /></figure>
          <div class="card-body flex justify-end items-center">
            <div className='card-body-item'>
              <div className='flex justify-center'><IoColorPaletteSharp className='text-9xl text-primary' /></div>
              <h1 className='text-4xl font-extrabold text-center '>Web Design</h1>
              <p className='md:text-xl font-semibold text-center my-5 h-[150px]'>i'm a web designer who build fully responsive and good looking ui and my designed item will be a well user experience design.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={serviceTwoFrom}
          animate={isInViewSection && serviceTwoTo}
          transition={serviceTwoTransition}
           class="card sm:h-[500px]  bg-base-100 shadow-xl image-full full-card overflow-hidden">
          <figure><img src="https://i.ibb.co/ZWKV4xm/nubelson-fernandes-Uc-YBL5-V0x-WQ-unsplash.jpg" alt="Design" className='w-full bg-img' /></figure>
          <div class="card-body flex justify-end items-center">
            <div className='card-body-item'>
              <div className='flex justify-center'><FaCode className='text-9xl text-primary' /></div>
              <h1 className='text-4xl font-extrabold text-center '>Web Development</h1>
              <p className='md:text-xl font-semibold text-center my-5 h-[150px]'>i'm a Junior React Js frontend Web Application Developer with having a minimal Knowledge about Express Js. My using tools is mongodb and firebase</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={serviceThreeFrom}
          animate={isInViewSection && serviceThreeTo}
          transition={serviceTreeTransition}
           class="card sm:h-[500px]  bg-base-100 shadow-xl image-full  full-card overflow-hidden">
          <figure><img src="https://i.ibb.co/Yp1yPRq/campaign-creators-g-Msn-Xq-ILjp4-unsplash-1.jpg" alt="Management" className='w-full bg-img' /></figure>
          <div class="card-body flex justify-end items-center">
            <div className='card-body-item'>
              <div className='flex justify-center'><MdOutlineManageAccounts className='text-9xl text-primary' /></div>
              <h1 className='text-4xl font-extrabold text-center '>Web Management</h1>
              <p className='md:text-xl font-semibold text-center my-5 h-[150px]'>As a web developer and designer i have some website deep knowledge thats are enough for managing a website for a long.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;