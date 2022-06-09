import React from 'react';
import Banner from './Banner/Banner';
import ContactSection from './Contact/ContactSection';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;