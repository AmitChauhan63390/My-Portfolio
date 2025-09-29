import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './services.scss';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

const floatingVariants = {
    animate: {
        y: [-5, 5],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        },
    },
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    const services = [
        {
            title: "Web Development",
            description: "Custom websites and web applications built with cutting-edge technologies. From responsive designs to complex e-commerce platforms, we create digital solutions that drive results and engage your audience.",
            features: ["React & Next.js", "E-commerce", "Performance"]
        },
        {
            title: "Digital Branding", 
            description: "Complete brand identity design that tells your story. We craft memorable visual experiences that resonate with your audience and establish strong market presence across all touchpoints.",
            features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
        },
        {
            title: "UI/UX Design",
            description: "User-centered design that converts visitors into customers. We create intuitive interfaces that provide exceptional user experiences across all devices and drive meaningful engagement.",
            features: ["User Research", "Wireframing", "Prototyping"]
        },
        {
            title: "Digital Marketing",
            description: "Strategic marketing campaigns that amplify your reach and drive growth. From SEO optimization to social media management, we help your brand dominate the digital landscape.",
            features: ["SEO Optimization", "Social Media", "Content Strategy"]
        }
    ];

    return (
        <motion.div 
            className='services' 
            ref={ref} 
            animate={isInView ? "animate" : "initial"}
        >
            {/* Subtle Background Enhancement */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 20% 20%, rgba(155, 93, 229, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255, 110, 199, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 40% 60%, rgba(115, 103, 240, 0.02) 0%, transparent 50%)
                `,
                pointerEvents: 'none',
            }} />

            <motion.div className="textContainer" variants={variants}>
                {/* Premium Badge */}
                <motion.div 
                    variants={variants}
                    style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '0',
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(155, 93, 229, 0.15)',
                        border: '1px solid rgba(155, 93, 229, 0.3)',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    
                </motion.div>

                <motion.p variants={variants}>
                    Focus on helping your brand grow
                    <br />and move forward with innovative solutions
                </motion.p>
                <motion.hr 
                    variants={variants}
                    style={{
                        background: 'linear-gradient(90deg, transparent, #9b5de5, transparent)',
                        height: '1px',
                        border: 'none',
                    }}
                />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <motion.div className="title" variants={floatingVariants} animate="animate">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ 
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img 
                            src="/people.webp" 
                            height="100px" 
                            width="300px" 
                            alt="Team" 
                            style={{
                                filter: 'brightness(1.1) contrast(1.1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            width: '16px',
                            height: '16px',
                            background: 'linear-gradient(45deg, #10b981, #34d399)',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.3)',
                        }} className="animate-pulse" />
                    </motion.div>
                    
                    <h1>
                        <motion.b whileHover={{
                            color: "#ff6ec7",
                            scale: 1.02,
                            textShadow: "0 0 20px rgba(255, 110, 199, 0.5)"
                        }}>
                            Unique
                        </motion.b> Ideas
                    </h1>
                </motion.div>

                <motion.div className="title">
                    <h1>
                        <motion.b whileHover={{
                            color: "#7367f0", 
                            scale: 1.02,
                            textShadow: "0 0 20px rgba(115, 103, 240, 0.5)"
                        }}>
                            For Your
                        </motion.b> Business.
                    </h1>
                    <motion.button 
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 15px 35px rgba(255, 165, 0, 0.4)",
                            background: "linear-gradient(45deg, #ff8c00, #ffa500)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'linear-gradient(45deg, #ff8c00, #ffa500)',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                        }}
                    >
                        What We Do?
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="box" 
                        variants={cardVariants}
                        whileHover={{
                            background: "rgba(255, 255, 255, 0.08)",
                            borderColor: "#9b5de5",
                            scale: 1.02,
                            boxShadow: "0 10px 40px rgba(155, 93, 229, 0.2)"
                        }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '12px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Gradient Accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, 
                                ${index === 0 ? '#ff6ec7, #7367f0' : 
                                  index === 1 ? '#7367f0, #06b6d4' : 
                                  index === 2 ? '#ff6ec7, #f43f5e' : 
                                  '#10b981, #06b6d4'})`,
                        }} />

                        <motion.h2 
                            style={{ 
                                background: `linear-gradient(45deg, 
                                    ${index === 0 ? '#ff6ec7, #7367f0' : 
                                      index === 1 ? '#7367f0, #06b6d4' : 
                                      index === 2 ? '#ff6ec7, #f43f5e' : 
                                      '#10b981, #06b6d4'})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '16px',
                                fontSize: '24px',
                                fontWeight: '700'
                            }}
                        >
                            {service.title}
                        </motion.h2>
                        
                        <p style={{ 
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            fontSize: '14px'
                        }}>
                            {service.description}
                        </p>

                        {/* Feature Tags */}
                        <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '6px',
                            marginBottom: '20px' 
                        }}>
                            {service.features.map((feature, idx) => (
                                <span 
                                    key={idx}
                                    style={{
                                        padding: '4px 8px',
                                        background: 'rgba(155, 93, 229, 0.2)',
                                        borderRadius: '12px',
                                        fontSize: '10px',
                                        color: '#c084fc',
                                        border: '1px solid rgba(155, 93, 229, 0.3)',
                                        fontWeight: '500'
                                    }}
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>

                        <motion.button 
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 8px 25px rgba(255, 165, 0, 0.4)",
                                background: "linear-gradient(45deg, #ff8c00, #ffa500)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(45deg, #ff8c00, #ffa500)',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '14px',
                                padding: '12px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'white',
                            }}
                        >
                            Learn More
                            <svg 
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    transition: 'transform 0.2s ease'
                                }}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Services;