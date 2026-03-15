import React from 'react';
import { motion } from 'framer-motion';
import './hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
    },
  },
  scrollButton: {
    y: [0, 10, 0],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 25,
      ease: "linear",
    },
  },
};

const backgroundVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const particleVariants = {
  animate: {
    y: [-20, 20],
    x: [-10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Enhanced Background Effects */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        style={{ animationDelay: '15s' }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-purple-600/8 rounded-full blur-3xl z-0"
      />
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          style={{
            animationDelay: `${i * 0.7}s`,
            position: 'absolute',
            left: `${15 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            width: '3px',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            zIndex: 1,
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="wrapper">
        <motion.div
          variants={textVariants}
          className="textContainer"
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Web Developer
          </motion.h2>
          
          <motion.h1 variants={textVariants}>
            Amit Chauhan
          </motion.h1>

          <motion.p 
            variants={textVariants}
            style={{
              fontSize: '1.2rem',
              color: 'rgba(228, 226, 222, 0.92)',
              maxWidth: '560px',
              lineHeight: '1.65',
              margin: '0 auto 40px',
            }}
          >
            I build and ship web products: from marketing sites and dashboards to full-stack apps. Focus on React, Node, and maintainable code. Based in Punjab, India.
          </motion.p>

          <motion.div variants={textVariants} className="buttons">
            <motion.a 
              href="#Portfolio"
              variants={textVariants}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See my work
            </motion.a>
            
            <motion.a 
              href="#Contact"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={textVariants}
            animate="scrollButton"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <div style={{
              width: '24px',
              height: '40px',
              border: '2px solid rgba(228, 226, 222, 0.4)',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingTop: '8px',
            }}>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: '3px',
                  height: '10px',
                  backgroundColor: 'rgba(228, 226, 222, 0.7)',
                  borderRadius: '2px',
                }}
              />
            </div>
            <span style={{
              color: 'rgba(228, 226, 222, 0.75)',
              fontSize: '12px',
              marginTop: '8px',
              letterSpacing: '2px',
              fontWeight: '500',
            }}>
              SCROLL
            </span>
          </motion.div>
        </motion.div>

        {/* Floating Geometric Elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            right: '10%',
            top: '20%',
            width: '200px',
            height: '200px',
            border: '1px solid rgba(228, 226, 222, 0.12)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            right: '12%',
            top: '22%',
            width: '160px',
            height: '160px',
            border: '1px solid rgba(228, 226, 222, 0.08)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React • Node.js • JavaScript • TypeScript • APIs • UI/UX • Frontend • Full-stack •
      </motion.div>
    </div>
  );
};

export default Hero;