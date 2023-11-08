import { useState } from "react"
import Links from "./Links/Links"
import "./sidebar.scss"
import React from 'react'
import ToggleButton from "./toggleButton/ToggleButton"
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        }
        
        // Add other animation properties for the "open" state
    },
    closed: {
        clipPath:"circle(30px at 50px 50px)",
        transition:{
            dealy:0.5,
            type:"spring",
            stiffness:400,
            damping: 40,
        }
        // Add other animation properties for the "closed" state
    }
}
const Sidebar = () => {
    const [open, setOpen] = useState(false)


    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
