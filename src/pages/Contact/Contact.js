import React , {memo} from 'react';
import { Helmet } from "react-helmet-async";
import ContactBanner from './Banner/Banner';
import DirectMessage from './DirectMessage/DirectMessage';

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>Contact - Sheikh Shahariar Siam</title>
      </Helmet>
      <ContactBanner></ContactBanner>
      <DirectMessage/>
    </div>
  );
};

export default memo(Contact);