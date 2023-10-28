import './education_detail.css'
import { motion } from "framer-motion"

const EducationDetail = ({ educationDetail }) =>  (
    <li className="education_detail-container">
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
                <div className="education_detail-container-content" >
                    <h2>{educationDetail.institute}</h2>
                    <p>{educationDetail.program}</p>
                </div>
        </motion.div>
    </li>
);
export default EducationDetail;