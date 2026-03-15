import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}
                >Amit Chauhan</motion.span>
                <div className="social">
                    <a href="https://github.com/AmitChauhan63390" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/facebook.png" alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/amit-chauhan-63390" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/instagram.png" alt="LinkedIn" /></a>
                    <a href="mailto:amit63390@gmail.com" aria-label="Email"><img src="/youtube.png" alt="Email" /></a>
                </div>
            </div>
        </div>
    )
    
};

export default Navbar;