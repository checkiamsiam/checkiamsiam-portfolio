import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './who.css'

const WhoWithMe = () => {
  return (
    <div className='container mx-auto px-5'>
      <div className='text-accent text-4xl title-font text-center mt-5 flex justify-center items-center gap-3'>
        <div className='h-[2px] w-5 bg-primary'></div>
        Who With Me
        <div className='h-[2px] w-5 bg-primary'></div>
      </div>
      <h1 className='text-center text-base-100 mb-5'>( My Team )</h1>

      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-between '>
        <div class="member-card sm:h-[500px] overflow-hidden flex justify-center items-center bg-neutral text-neutral-content relative rounded-2xl">
          <div class="pt-10 sm:pt-0">
            <div className='flex flex-col justify-center items-center'>
              <div class="avatar ">
                <div class="w-36 rounded-full  border-4 border-accent effected-border">
                  <img src="https://i.ibb.co/TMzxH2t/ali.png" />
                </div>
              </div>
              <h1 className='text-4xl font-extrabold text-center mt-5'>Mohammad Ali</h1>
              <p className='text-md font-semibold'>(Friend)</p>
              <p className='text-xl font-semibold text-center mt-3 h-[100px]'>Web Designer & Developer</p>
            </div>
          </div>
          <footer className='effected-footer absolute bottom-0  h-14 w-full bg-primary'>
            <div className='flex justify-center pt-2 items-center text-base-100 gap-3'>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.facebook.com/itsproali"><FaFacebookF /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://twitter.com/itsproali"><BsTwitter /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://github.com/itsproali"><BsGithub /></a>
              <a className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.linkedin.com/in/itsproali/"><AiFillLinkedin /></a>

            </div>
          </footer>
        </div>
        <div class="member-card sm:h-[500px] overflow-hidden flex justify-center items-center bg-neutral text-neutral-content relative rounded-2xl">
          <div class="pt-10 sm:pt-0">
            <div className='flex flex-col justify-center items-center'>
              <div class="avatar ">
                <div class="w-36 rounded-full  border-4 border-accent effected-border">
                  <img src="https://i.ibb.co/1bVhXS7/sakib.png" />
                </div>
              </div>
              <h1 className='text-4xl font-extrabold text-center mt-5'>Akram Sakib</h1>
              <p className='text-md font-semibold'>(Friend)</p>
              <p className='text-xl font-semibold text-center mt-3 h-[100px]'>Full Stack Developer</p>
            </div>
          </div>
          <footer className='effected-footer absolute bottom-0  h-14 w-full bg-primary'>
            <div className='flex justify-center pt-2 items-center text-base-100 gap-3'>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.facebook.com/akramSakibA"><FaFacebookF /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://twitter.com/AkramSakib4"><BsTwitter /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://github.com/Akram-Sakib"><BsGithub /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.linkedin.com/in/akram-sakib-a7742a214/"><AiFillLinkedin /></a>

            </div>
          </footer>
        </div>
        <div class="member-card sm:h-[500px] overflow-hidden flex justify-center items-center bg-neutral text-neutral-content relative rounded-2xl">
          <div class="pt-10 sm:pt-0">
            <div className='flex flex-col justify-center items-center'>
              <div class="avatar ">
                <div class="w-36 rounded-full  border-4 border-accent effected-border">
                  <img src="https://i.ibb.co/S3mgCbX/nasim.jpg" />
                </div>
              </div>
              <h1 className='text-4xl font-extrabold text-center mt-5'>Nasimur Rahman</h1>
              <p className='text-md font-semibold'>(Friend)</p>
              <p className='text-xl font-semibold text-center mt-3 h-[100px]'>Project Manager</p>
            </div>
          </div>
          <footer className='effected-footer absolute bottom-0  h-14 w-full bg-primary'>
            <div className='flex justify-center pt-2 items-center text-base-100 gap-3'>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.facebook.com/nasimur.rahman.5209"><FaFacebookF /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://github.com/NasimurRahman"><BsTwitter /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.facebook.com/checkiamsiam/"><BsGithub /></a>
              <a target='_blank' className='text-xl p-3 cursor-pointer bg-neutral text-accent hover:text-neutral hover:bg-accent rounded-full transition duration-500 ' href="https://www.facebook.com/checkiamsiam/"><AiFillLinkedin /></a>

            </div>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default WhoWithMe;