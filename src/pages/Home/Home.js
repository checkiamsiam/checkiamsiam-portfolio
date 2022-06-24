import React from 'react';
import Banner from './Banner/Banner';
import ContactSection from './Contact/ContactSection';
import Projects from './Projects/Projects';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
         <title>Home - Sheikh Shahariar Siam</title>
      </Helmet>
      <Banner></Banner>
      <Projects></Projects>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;