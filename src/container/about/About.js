import './about.css'
import sh from '../../assets/sh.jpg';
import { motion } from "framer-motion"

const About = () => (
  <div className='about_me' id="about">
      <div className="about_me-title">
          <h1>About Me</h1>
          <div className="about_me-title_bar"/>
      </div>
      <div className="about_me-content">
        <div className='about_me-content-image'>
              <img src={sh} alt="sh"/>
        </div>
        <div className='about_me-content-description'>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
          <p>
              I am Software Developer based in Bangalore with a strong background in architecting
              and developing full stack applications
          </p>
          </motion.div>
          <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
          <p>
                With a passion for staying at the forefront of technology and a knack for problem-solving, 
                I'm dedicated to crafting software solutions that drive results and exceed expectations.
          </p>
          </motion.div>
          <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
          <p>
                Loves travelling and solving puzzle
          </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
export default About;