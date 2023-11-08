import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './contact.scss';

const Contact = () => {

  const formRef = useRef();
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > ref.current.offsetTop - window.innerHeight / 2) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger the animation check on initial load

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="contact" ref={ref}>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>amit63390@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Punjab, India</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 9501357630</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Enter your message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
