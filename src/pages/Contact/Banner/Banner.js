import React from 'react';
import './cbanner.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const ContactBanner = () => {
  return (
    <div className='pt-24 pb-5 md:px-10 px-5'>
      <h1 className=' text-center mb-10 '><span className='text-accent text-4xl title-font Contact-title relative z-30'>Get In Touch</span></h1>
      <p className='md:w-3/4 px-5 mx-auto text-base-100 text-center font-semibold text-lg'>Are you looking for me? need me? contact with me? always i'm ready for you. Here is some way to contact with me. Check it out</p>
      <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 '>

        <div class="rounded-lg bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_4X36n7.json"
                className='w-48'
              >
              </Player>
            </h2>
            <p className='font-extrabold text-3xl'>Call Me</p>
            <p class="card-actions justify-end font-semibold ">+8801910072661 </p>
          </div>
        </div>
        <div class="rounded-lg bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_d3vw5gid.json"
                className='w-48 '
              >
              </Player>
            </h2>
            <p className='font-extrabold text-3xl'>E-Mail Me</p>
            <p class="card-actions justify-end font-semibold ">issiam02415@gmail.com</p>
          </div>
        </div>
        <div class="rounded-lg bg-neutral text-neutral-content ">
          <div class="card-body items-center text-center">
            <h2 class="card-title">
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_lgpzpyna.json"
                className='w-48 '
              >
              </Player>
            </h2>
            <p className='font-extrabold text-3xl'>Adress</p>
            <p class="card-actions justify-end font-semibold ">Jatrabari, Dhaka</p>
          </div>
        </div>


      </div>

      <div className='sm:flex items-center gap-5 py-10'>
        <div className='flex items-center gap-5'>
          <p className='text-base-100 '>Also can contact via social media</p>
          <div className='w-8 h-[1px] bg-primary'></div>
        </div>
        <div className='flex sm:w-fit w-full justify-center items-center  gap-5 pt-5 sm:pt-0'>
          <a target="_blank" href='' className='text-xl p-2 bg-neutral rounded-full text-blue-600 shadow-md shadow-sky-700 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaFacebookF className='text-2xl' /></a>
          <a target="_blank" href='' className='text-xl p-2 bg-neutral rounded-full text-red-500 shadow-md shadow-red-400 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><AiFillInstagram className='text-2xl' /></a>
          <a target="_blank" href='' className='text-xl p-2 bg-neutral rounded-full shadow-md text-sky-400 shadow-sky-700 hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaTwitter className='text-2xl' /></a>
          <a target="_blank" href='' className='text-xl p-2 bg-neutral rounded-full text-blue-600 shadow-md shadow-blue-600  hover:-translate-y-2 hover:scale-110 transition duration-500 cursor-pointer'><FaLinkedin className='text-2xl' /></a>
        </div>

      </div>
    </div>
  );
};

export default ContactBanner;