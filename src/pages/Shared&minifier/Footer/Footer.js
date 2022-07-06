import React , {memo} from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=''>
      <footer class="footer items-center p-5 pb-20 sm:pb-5 bg-[#2c2b2bd0] text-neutral-content ">
        <div class="text-md sm:text-lg container mx-auto flex md:flex-row flex-col items-center justify-around">

          <div class=" text-primary">
            <Link to='/' class=" title-font text-2xl sm:text-3xl cursor-pointer"> {`< SIAM />`} </Link>
          </div>

          <div class="header-options">
            <p>Copyright © 2022 - All right reserved</p>
          </div>
          <div class="header-options">
            <p>Developed by <a href='https://www.linkedin.com/in/checkiamsiam/' className='text-primary link link-hover '>Me</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);