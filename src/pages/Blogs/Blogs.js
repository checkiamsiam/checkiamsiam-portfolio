import React , {memo} from 'react';
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className='text-accent h-screen flex justify-center items-center'>
      <Helmet>
        <title>Blogs - Sheikh Shahariar Siam</title>
      </Helmet>
      <h1 className='md:text-6xl text-3xl'>Coming Soon(blogs)</h1>
    </div>
  );
};

export default memo(Blogs);