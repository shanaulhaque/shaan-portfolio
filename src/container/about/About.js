import './about.css'
import sh from '../../assets/sh.jpg';
import { motion } from "framer-motion"
import { aboutMe } from '../Data';

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
        {aboutMe.map((aboutMeDetail) => (
                <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}>
              <p>
                {aboutMeDetail}
              </p>
              </motion.div>
          ))}
          
        </div>
      </div>
    </div>
  );
export default About;