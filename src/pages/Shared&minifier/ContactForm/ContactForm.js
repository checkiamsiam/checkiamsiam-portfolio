import React, { useRef , memo } from 'react';
import emailjs from '@emailjs/browser';
import { BiSend } from "react-icons/bi";
import Swal from 'sweetalert2';
import { useInView , motion } from 'framer-motion';
import { contactFormFrom, contactFormTo, contactFormTransition } from '../../../hooks/animations';

const ContactForm = () => {
  const form = useRef();
  const isInViewSection = useInView(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0o8844l', 'template_u2g9ofm', form.current, 'llUopf-9itfABWZ3z')
      .then((result) => {
        Swal.fire(
          'message sent',
          'You will get a confirmation mail soon',
          'success'
        )
        e.target.reset()
      }, (error) => {
        alert('error');
      });
  };
  return (
    <motion.form
     initial={contactFormFrom}
    animate={isInViewSection && contactFormTo}
    transition={contactFormTransition} 
    ref={form} onSubmit={sendEmail}>
      <div className='flex md:flex-row flex-col gap-5 mb-5'>
        <input name='name' type="text" placeholder="YOUR NAME" class="input cursor-text bg-neutral w-full  focus:outline-primary focus:outline-1 rounded-full text-base-100 " />
        <input name='email' type="text" placeholder="EMAIL" class="input cursor-text bg-neutral  w-full  focus:outline-primary focus:outline-1 rounded-full text-base-100 " />
        <input name='subject' type="text" placeholder="SUBJECT" class="input cursor-text bg-neutral focus:outline-primary focus:outline-1 w-full rounded-full text-base-100 " />
      </div>
      <div>
        <textarea name='message' class="textarea cursor-text w-full h-32 bg-neutral text-base-100  focus:outline-primary focus:outline-1 rounded-2xl" placeholder="MESSAGE"></textarea>
      </div>
      <div>
        <button type='submit' class="dedcription-btn btn">
          <span class="name-descripeion">Send Message</span>
          <BiSend class="btn-icon" />
        </button>
      </div>
    </motion.form>
  );
};

export default memo(ContactForm);