import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [{
    id: 1,
    title: "N-Queen Visualizer",
    img: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "I created a site for visualizing N-Queen Problem using backtracking for better understanding. Skills that I demonstrated are HTML, CSS and JavaScript",
    redirectUrl: "https://genuine-horse-e73f85.netlify.app/",
},
{
    id: 2,
    title: "Hangman Game",
    img: "https://as1.ftcdn.net/v2/jpg/05/53/20/12/1000_F_553201237_I9NNuEE7LfExev63xcgK0klqbwqaBsva.jpg",
    desc: "A Game to improve vocabulary with good looking interface. Created with pure HTML,CSS and JavaScript",
    redirectUrl: "https://keen-licorice-a71427.netlify.app/",
},
{
    id: 3,
    title: "Music App",
    img: "https://images.pexels.com/photos/4805/hiking-path-way.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam, temporibus quod aliquam enim cum harum numquam eos error, debitis consequuntur non, quas voluptatibus! Eligendi iure cumque odio commodi corporis!",
},
{
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/4805/hiking-path-way.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam, temporibus quod aliquam enim cum harum numquam eos error, debitis consequuntur non, quas voluptatibus! Eligendi iure cumque odio commodi corporis!",
},
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]

    });

    const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

    const handleRedirect = () => {
        window.location.href = item.redirectUrl;
      };


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />

                    </div>

                    
                    <motion.div className="textContainer" style={{y}}>

                        <h2 style={{ y }}>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleRedirect}>See Demo</button>

                    </motion.div>

                </div>



            </div>

        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });



    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )

}

export default Portfolio