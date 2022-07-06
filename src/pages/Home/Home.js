import React, { memo } from 'react';
import Banner from './Banner/Banner';
import ContactSection from './Contact/ContactSection';
import Projects from './Projects/Projects';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Home - Sheikh Shahariar Siam</title>
        <meta property="og:title" content="Developer portfolio homepage, visit to see featured projects, testimonial and know about him" />
      </Helmet>
      <Banner></Banner>
      <Projects></Projects>
      <ContactSection></ContactSection>
    </div>
  );
};

export default memo(Home);