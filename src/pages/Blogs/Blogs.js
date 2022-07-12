import React, { memo } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"
import { routerAnimationExit, routerAnimationFrom, routerAnimationTo, routerAnimationTransition } from '../../hooks/animations';

const Blogs = () => {
  return (
    <motion.div
      initial={routerAnimationFrom}
      animate={routerAnimationTo}
      transition={routerAnimationTransition}
      exit={routerAnimationExit}
      className='text-accent h-screen flex justify-center items-center'>
      <Helmet>
        <title>Blogs - Sheikh Shahariar Siam</title>
      </Helmet>
      <h1 className='md:text-6xl text-3xl'>Coming Soon(blogs)</h1>
    </motion.div>
  );
};

export default memo(Blogs);