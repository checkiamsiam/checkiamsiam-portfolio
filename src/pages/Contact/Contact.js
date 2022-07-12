import React , {memo} from 'react';
import { Helmet } from "react-helmet-async";
import ContactBanner from './Banner/Banner';
import DirectMessage from './DirectMessage/DirectMessage';
import { motion } from "framer-motion"
import { routerAnimationExit, routerAnimationFrom, routerAnimationTo, routerAnimationTransition } from '../../hooks/animations';

const Contact = () => {
  return (
    <motion.div
    initial={routerAnimationFrom}
    animate={routerAnimationTo}
    transition={routerAnimationTransition}
    exit={routerAnimationExit}
     className='container mx-auto'>
      <Helmet>
        <title>Contact - Sheikh Shahariar Siam</title>
      </Helmet>
      <ContactBanner></ContactBanner>
      <DirectMessage/>
    </motion.div>
  );
};

export default memo(Contact);