import React , {memo} from 'react';
import AboutBanner from './Banner/AboutBanner';
import MySkill from './MySkills/MySkill';
import PersonalInfo from './PersonalInfo/Personalinfo';
import { Helmet } from "react-helmet-async";
import Education from './Education/Education';

const AboutMe = () => {
  return (
    <div>
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
    </div>
  );
};

export default memo(AboutMe);