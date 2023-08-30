
import EducationDetail from "../../component/EducationDetail";
import { educationData } from "../Data";
import './education.css';
import laptop from '../../assets/laptop.png';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion"

const Educations = () =>  {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });
  return (
    <div id="education">
      <div className="education_title">
        <h1>Education</h1>
        <div className="education_title_bar"></div>
      </div>
    
    <div className="education_content">
      <div className="education_content-image">
        <img src={laptop} alt="im"></img>
      </div>
      <div className="education_content-detail" ref={ref}> 
      <motion.div 
      style={{scaleY: scrollYProgress}}
      className="education_content-detail-line"></motion.div>
        <ul>
            {educationData.map((educationDetail) => (
                <EducationDetail educationDetail={educationDetail}></EducationDetail>
            ))}
            </ul>
      </div>
    </div>
    </div>
    )};
export default Educations;