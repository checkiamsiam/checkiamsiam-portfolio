import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import '../Home/Projects/project.css'

const NotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div>
        <h1 className='text-9xl text-accent'>4<span className='text-secondary'>0</span>4</h1>
        <h1 className='text-center text-error text-xl header-options'>Page Not Found</h1>
        <div className='flex justify-center'>
          <h1 className='text-center mt-5 custom-btn btn btn-ghost'><Link to='/'>Go Home</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default memo(NotFound);