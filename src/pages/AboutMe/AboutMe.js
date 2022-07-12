import React , {memo} from 'react';
import AboutBanner from './Banner/AboutBanner';
import MySkill from './MySkills/MySkill';
import PersonalInfo from './PersonalInfo/Personalinfo';
import { Helmet } from "react-helmet-async";
import Education from './Education/Education';
import { motion } from "framer-motion";
import { routerAnimationExit, routerAnimationFrom, routerAnimationTo, routerAnimationTransition } from '../../hooks/animations';

const AboutMe = () => {
  return (
    <motion.div
    initial={routerAnimationFrom}
    animate={routerAnimationTo}
    transition={routerAnimationTransition}
    exit={routerAnimationExit}
    >
      <Helmet>
        <title>About - Sheikh Shahariar Siam</title>
      </Helmet>
      <AboutBanner />
      <hr className='mx-[25%] ' />
      <PersonalInfo />
      <hr className='mx-[25%] ' />
      <MySkill />
      <hr className='mx-[25%] ' />
      <Education/>
    </motion.div>
  );
};

export default memo(AboutMe);