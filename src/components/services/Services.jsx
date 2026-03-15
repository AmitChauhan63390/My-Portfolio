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
            title: "Web development",
            description: "Sites and web apps with React, Next.js, or vanilla stack. Responsive layouts, clean structure, and attention to performance and accessibility.",
            features: ["React & Next.js", "APIs & backends", "Performance"]
        },
        {
            title: "UI / front-end", 
            description: "Interfaces that are clear and consistent. Component-based UIs, design-system thinking, and handoff-ready markup and styles.",
            features: ["Components", "Responsive", "Accessibility"]
        },
        {
            title: "Full-stack & APIs",
            description: "Backends, APIs, and integrations. Node, databases, auth, and deployment so the full pipeline works end to end.",
            features: ["Node.js", "REST / APIs", "Deployment"]
        },
        {
            title: "Maintenance & iteration",
            description: "Ongoing updates, refactors, and feature work on existing codebases. Documentation and patterns that make changes safe and predictable.",
            features: ["Refactors", "New features", "Docs"]
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
                <motion.p variants={variants}>
                    Development, UI/UX, and delivery
                    <br />from concept to production
                </motion.p>
                <motion.hr 
                    variants={variants}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(228, 226, 222, 0.25), transparent)',
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
                            color: "#e8b84a",
                            scale: 1.02
                        }}>
                            Build
                        </motion.b> & ship
                    </h1>
                </motion.div>

                <motion.div className="title">
                    <h1>
                        <motion.b whileHover={{
                            color: "#e8b84a", 
                            scale: 1.02
                        }}>
                            web
                        </motion.b> products
                    </h1>
                </motion.div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="box" 
                        variants={cardVariants}
                        whileHover={{
                            background: "rgba(255, 255, 255, 0.06)",
                            borderColor: "rgba(228, 226, 222, 0.3)",
                            scale: 1.02,
                            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)"
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
                            background: 'rgba(201, 162, 39, 0.5)',
                        }} />

                        <motion.h2 
                            style={{ 
                                color: '#f5f3f0',
                                marginBottom: '16px',
                                fontSize: '1.4rem',
                                fontWeight: '700'
                            }}
                        >
                            {service.title}
                        </motion.h2>
                        
                        <p style={{ 
                            color: '#b8b4ae',
                            lineHeight: '1.6',
                            marginBottom: '20px',
                            fontSize: '1.05rem'
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
                                        padding: '4px 10px',
                                        background: 'rgba(228, 226, 222, 0.08)',
                                        borderRadius: '8px',
                                        fontSize: '11px',
                                        color: '#b8b4ae',
                                        border: '1px solid rgba(228, 226, 222, 0.15)',
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
                                boxShadow: "0 8px 25px rgba(201, 162, 39, 0.35)"
                            }}
                            whileTap={{ scale: 0.95 }}
style={{
                            background: '#c9a227',
                            color: '#0c0c1d',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '14px',
                            padding: '12px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            }}
                        >
                            Details
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