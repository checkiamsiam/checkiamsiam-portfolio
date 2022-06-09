import React from 'react';
import { BiSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const ContactSection = () => {
  return (
    <div className='py-10 container mx-auto px-5'>
      <h1 className='text-accent text-3xl title-font text-center mb-5'>Feel Free To Me</h1>
      <h1 className='text-base-100 text-5xl title-font text-center mb-10'>Get In <span className='text-primary'>Touch</span></h1>
      <div className='md:flex justify-between md:px-14'>
        <div className='flex flex-col justify-center items-center'>
          <div className='mb-10'>
           <div className='flex gap-1 items-center mb-3'>
             <MdEmail className='text-6xl text-primary w-20'/>
            
             <div>
               <h1 className='text-accent'>MAIL ME</h1>
               <h1 className='text-base-100'>issiam02415@gmail.com</h1>
             </div>
           </div>
           <div className='flex gap-1 items-center'>
             <RiWhatsappFill className='text-6xl text-primary w-20'/>
            
             <div>
               <h1 className='text-accent'>CALL ME</h1>
               <h1 className='text-base-100'>+801910072661</h1>
             </div>
           </div>
           <h1 className=' my-5 text-accent'>SOCIAL-</h1>
           <div>
           <div className='flex justify-center text-base-100 gap-3'>
            <a className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 ' href=""><FaFacebookF/></a>
            <a className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 ' href=""><BsTwitter/></a>
            <a className='text-xl p-3 bg-neutral rounded-full hover:bg-primary hover:-translate-y-2 transition duration-500 ' href=""><AiFillInstagram/></a>
           
          </div>
           </div>

          </div>
        </div>
        <div>
          <form>
            <div className='flex md:flex-row flex-col gap-5 mb-5'>
              <input type="text" placeholder="YOUR NAME" class="input bg-neutral w-full  focus:outline-primary focus:outline-1 rounded-full text-base-100 " />
              <input type="text" placeholder="EMAIL" class="input bg-neutral  w-full  focus:outline-primary focus:outline-1 rounded-full text-base-100 " />
              <input type="text" placeholder="SUBJECT" class="input bg-neutral focus:outline-primary focus:outline-1 w-full rounded-full text-base-100 " />
            </div>
            <div>
              <textarea class="textarea w-full h-32 bg-neutral text-base-100  focus:outline-primary focus:outline-1 rounded-2xl" placeholder="MESSAGE"></textarea>
            </div>
            <div>
              <button type='submit' class="dedcription-btn">
                <span class="name-descripeion">Send Message</span>
                <BiSend class="btn-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;