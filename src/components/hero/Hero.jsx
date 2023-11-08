import { motion } from 'framer-motion'
import './hero.scss'



const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            ease: "easeInOut",
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
            ease: "easeInOut",
        }
    },
}
const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
    
};
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
            
            <motion.div variants={textVariants}  className="textContainer" initial="initial" animate="animate">
                <motion.h2 variants={textVariants} >AMIT KUMAR SINGH</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Fullstack Software Developer
            </motion.div>
        </div>
    )
}

export default Hero