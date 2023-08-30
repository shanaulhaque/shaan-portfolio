import WorkDetail from "../../component/WorkDetail";
import { workDetails } from "../Data";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import './experience.css';

const Experiance = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });
  return (
    <div id="experience">
    <div className="experience_title">
      <div className="experience_title_bar"></div>
      <h1>Work Experiance</h1>
    </div>
  <div className="experience_content">
    <div className="experience_content-detail" ref={ref}> 
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className="experience_content-detail-line"></motion.div>
      <ul>
      {workDetails.map((workDetail) => (
          <WorkDetail workDetail={workDetail}></WorkDetail>
        ))}
      </ul>
    </div>
  </div>
  </div>
  )};
export default Experiance;