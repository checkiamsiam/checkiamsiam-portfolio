import React from 'react';
import AboutBanner from './Banner/AboutBanner';
import MySkill from './MySkills/MySkill';

const AboutMe = () => {
  return (
    <div>
     <AboutBanner/>
     <hr className='mx-[25%] '/>
     <MySkill/>
    </div>
  );
};

export default AboutMe;