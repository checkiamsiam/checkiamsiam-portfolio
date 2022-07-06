import React, { useState, memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdContactMail } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";
import './Header.css'

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
          <div class="flex-1 text-primary">
            <Link to='/' class=" title-font text-2xl sm:text-3xl"> {`< SIAM />`} </Link>
          </div>
          <div class="flex-none">
            <div className='sm:block hidden'>
              <ul class="flex gap-7 text-lg italic ">
                <li className='  header-options text-base-100'><NavLink className='hover:text-primary transition duration-300' to='/'>Home</NavLink></li>
                <li className='header-options text-base-100'><NavLink className='hover:text-primary transition duration-300' to='/about'>About</NavLink></li>
                <li className='header-options text-base-100'><NavLink className='hover:text-primary transition duration-300' to='/projects'>Projects</NavLink></li>
                <li className='header-options text-base-100'><NavLink className=' hover:text-primary transition duration-300' to='/blogs'>Blogs</NavLink></li>
                <li className=' header-options text-base-100'><NavLink className='hover:text-primary transition duration-300' to='/contact'>Contact Me</NavLink></li>
              </ul>
            </div>

            <div className='sm:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#F27F1E " size={28} />
              <div className={`h-screen bg-[#212121] fixed top-0 left-0 w-screen  transition duration-1000 ${isOpen ? ' showNav ' : ' hideNav '} -z-10 flex items-center p-5`} >
                <ul class=" w-full  text-2xl italic text-base-100">
                  <li className='hover:text-slate-100 header-options my-6 '><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3' to='/'><AiFillHome />Home</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3' to='/about'><SiAboutdotme />About Me</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3' to='/projects'><AiFillProject />Projects</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3' to='/blogs'><BiMessageSquareDetail />Blogs</NavLink></li>
                  <hr />
                  <li className='hover:text-slate-100 header-options my-6'><NavLink onClick={() => setOpen(!isOpen)} className='flex items-center gap-3' to='/contact'><MdContactMail />Contact Me</NavLink></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed bottom-5 right-2 z-50 sm:block hidden hideIconsDesk ${(show && !isOpen) && 'showIconsDesk'}  `}>
        <div className='flex  flex-col gap-3 z-50 text-base-100'>
          <NavLink className='text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500 ' to='/'><AiFillHome /></NavLink>
          <NavLink className='text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent  transition duration-500' to='/about'><SiAboutdotme /></NavLink>
          <NavLink className='text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500' to='/projects'><AiFillProject /></NavLink>
          <NavLink className='text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent  transition duration-500' to='/blogs'><BiMessageSquareDetail /></NavLink>
          <NavLink className='text-3xl p-3 bg-neutral rounded-full hover:bg-primary hover:text-accent transition duration-500' to='/contact'><MdContactMail /></NavLink>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className={`fixed bottom-5   sm:hidden  hideIconsSm ${(show && !isOpen) && 'showIconsSm'}  z-50`}>
          <div className='flex flex-wrap text-base-100 gap-3 '>
            <NavLink className=' text-3xl p-2 bg-neutral rounded-full  transition duration-500 ' to='/'><AiFillHome /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full  transition duration-500' to='/about'><SiAboutdotme /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500' to='/projects'><AiFillProject /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500' to='/blogs'><BiMessageSquareDetail /></NavLink>
            <NavLink className='text-3xl p-2 bg-neutral rounded-full transition duration-500' to='/contact'><MdContactMail /></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);