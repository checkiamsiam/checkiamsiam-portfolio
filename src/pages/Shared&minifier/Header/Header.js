import React, { useState, memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import './Header.css'
import { motion } from "framer-motion"
import { hamBurgerVariants } from '../../../hooks/animations';

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener('scroll', controlNavbar);
  return (
    <>
      <div className={`fixed bg-transparent w-full top-0 left-0  z-[99999]  showTopNav ${(show && !isOpen) && 'hideTopNav'}`}>
        <div class="navbar  flex sm:px-0 px-5 container mx-auto">
          <div class="flex-1 text-primary ">
            <Link to='/' class=" title-font text-2xl sm:text-3xl cursor-pointer"> {`< SIAM />`} </Link>
          </div>
          <div class="flex-none">
            <div className='sm:block hidden'>
              <ul class="flex gap-7 text-lg italic ">
                <li className='  header-options text-base-100'><NavLink className='hover:text-primary transition duration-300 cursor-pointer' to='/'>Home</NavLink></li>
                <li className='header-options text-base-100'><NavLink className='hover:text-primary transition duration-300 cursor-pointer' to='/about'>About</NavLink></li>
                <li className='header-options text-base-100'><NavLink className='hover:text-primary transition duration-300 cursor-pointer' to='/projects'>Projects</NavLink></li>
                <li className='header-options text-base-100'><NavLink className=' hover:text-primary transition duration-300 cursor-pointer' to='/blogs'>Blogs</NavLink></li>
                <li className=' header-options text-base-100'><NavLink className='hover:text-primary transition duration-300 cursor-pointer' to='/contact'>Contact Me</NavLink></li>
              </ul>
            </div>

            <div className='sm:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#F27F1E " size={28} />
              <div className={`h-screen bg-[#212121] fixed top-0 left-0 w-screen  transition duration-1000 } -z-10 flex items-center p-5 showNav ${(!isOpen) && 'hideNav'}`} >
                <ul class=" w-full  text-2xl italic text-base-100">
                  <li className='hover:text-slate-100 header-options my-6 '><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3 cursor-pointer' to='/'><AiFillHome />Home</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3 cursor-pointer' to='/about'><SiAboutdotme />About Me</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3 cursor-pointer' to='/projects'><AiFillProject />Projects</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3 cursor-pointer' to='/blogs'><BiMessageSquareDetail />Blogs</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3 cursor-pointer' to='/contact'><MdContactMail />Contact Me</NavLink></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-50 sm:block hidden relative'>
        <div className='z-50 text-base-100 '>
          <NavLink to='/' className={`fixed  bottom-[280px]  right-2 icon-nav1 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'} `}>
            <span className='font-bold text-xl text-nav1 cursor-pointer z-50'>HOME</span>
            <span className='text-3xl '><AiFillHome className='cursor-pointer' /></span>
          </NavLink>
          <NavLink to='/about' className={`fixed  bottom-[215px] right-2 icon-nav2 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'} `}>
            <span className='font-bold text-xl text-nav2 cursor-pointer'>ABOUT</span>
            <span className='text-3xl  '><SiAboutdotme className='cursor-pointer' /></span>
          </NavLink>
          <NavLink to='/projects' className={`fixed  bottom-[150px] right-2 icon-nav3 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'} `}>
            <span className='font-bold text-xl text-nav3 cursor-pointer'>PROJECTS</span>
            <span className='text-3xl '><AiFillProject className='cursor-pointer' /></span>
          </NavLink>
          <NavLink to='/blogs' className={`fixed  bottom-[85px] right-2 icon-nav4 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'} `}>
            <span className='font-bold text-xl text-nav4 cursor-pointer'>BLOGS</span>
            <span className='text-3xl'><BiMessageSquareDetail className='cursor-pointer' /></span>
          </NavLink>
          <NavLink to='/contact' className={`fixed  bottom-5 right-2 icon-nav5 flex items-center justify-center gap-3 w-fit p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 cursor-pointer mb-2 hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'} `}>
            <span className='font-bold text-xl text-nav5 cursor-pointer'>CONTACT</span>
            <span className='text-3xl '><MdContactMail className='cursor-pointer' /></span>
          </NavLink>

        </div>
      </div>
      <div className='flex justify-center '>
        <div className={`fixed bottom-5   sm:hidden  hideIconsSm ${(show && !isOpen) && 'showIconsSm'}  z-50`}>
          <div className='flex flex-wrap text-base-100 gap-3 cursor-pointer'>
            <NavLink className=' text-3xl p-2 bg-neutral rounded-full  transition duration-500 cursor-pointer' to='/'><AiFillHome className='cursor-pointer' /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full  transition duration-500 cursor-pointer' to='/about'><SiAboutdotme /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer' to='/projects'><AiFillProject /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer' to='/blogs'><BiMessageSquareDetail /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500 cursor-pointer' to='/contact'><MdContactMail /></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);