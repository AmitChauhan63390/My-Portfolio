import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: "ApproveDeck",
    img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "SaaS platform for freelancers and agencies: contracts, client approvals, and invoicing in one place. AI flags out-of-scope requests so teams get paid for every hour. I worked on frontend and product features across the stack.",
    redirectUrl: "https://approvedeck.com",
  },
  {
    id: 2,
    title: "N-Queen Visualizer",
    img: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Interactive visualization of the N-Queens problem using backtracking. Built with vanilla HTML, CSS, and JavaScript to explain the algorithm and support teaching.",
    redirectUrl: "https://genuine-horse-e73f85.netlify.app/",
  },
  {
    id: 3,
    title: "Hangman Game",
    img: "https://as1.ftcdn.net/v2/jpg/05/53/20/12/1000_F_553201237_I9NNuEE7LfExev63xcgK0klqbwqaBsva.jpg",
    desc: "Vocabulary-building game with a clean, responsive UI. Pure HTML, CSS, and JavaScript; no frameworks.",
    redirectUrl: "https://keen-licorice-a71427.netlify.app/",
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
                        <button onClick={handleRedirect}>View project</button>

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
                <h1>Selected work</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )

}

export default Portfolio