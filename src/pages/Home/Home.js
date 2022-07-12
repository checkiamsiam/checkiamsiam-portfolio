import React, { memo } from 'react';
import Banner from './Banner/Banner';
import ContactSection from './Contact/ContactSection';
import Projects from './Projects/Projects';
import { Helmet } from "react-helmet-async";
import Services from './Services/Services';
import WhoWithMe from './WhoWithMe/WhoWithMe';
import { motion } from "framer-motion"
import { routerAnimationExit, routerAnimationFrom, routerAnimationTo, routerAnimationTransition } from '../../hooks/animations';

const Home = () => {
  return (
    <motion.div
    initial={routerAnimationFrom}
    animate={routerAnimationTo}
    transition={routerAnimationTransition}
    exit={routerAnimationExit}
    >
      <Helmet prioritizeSeoTags>
        <title>Home - Sheikh Shahariar Siam</title>
        <meta property="og:title" content="Developer portfolio homepage, visit to see featured projects, testimonial and know about him" />
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Projects></Projects>
      <WhoWithMe></WhoWithMe>
      <ContactSection></ContactSection>
    </motion.div>
  );
};

export default memo(Home);