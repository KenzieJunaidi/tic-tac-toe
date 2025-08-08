import { motion } from "framer-motion";

const FadeIn = {
  hidden:{opacity: 0, y: 20},
  show:{opacity: 1, y: 0},
  transition:{duration: 0.6},
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Hero = () => {
    return (
        <motion.section id="hero" className="hero">
            <motion.div className="hero-text-content" variants={staggerContainer} initial={"hidden"} animate={"show"}>
                <motion.div className="title-line" variants={FadeIn}>
                    <span className="title-1">Welcome to </span>
                    <span className="title-2">Tic-Tac-Toe</span>
                    <span className="title-1">!</span>
                </motion.div>
                <motion.p className="description" variants={FadeIn}>The timeless game you know and love — now with a sleek, space-inspired design. Whether you're killing time or caught in a friendly rivalry, Tic-Tac-Toe is the perfect way to challenge your brain and have some fun. Play side-by-side with a friend, take turns, and see who can claim victory among the stars. Simple, fun, and always free.</motion.p>
                <motion.a className="cta-button" href="#game" variants={FadeIn} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>Play Now!</motion.a>
            </motion.div>
            <motion.div className="hero-image-content" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration:0.6, delay:0.5}}>
                <img src="public/earth.png" alt="Earth PNG" />
            </motion.div>
        </motion.section>
    );
}