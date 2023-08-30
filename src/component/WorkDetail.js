import './work_detail.css'
import { motion } from "framer-motion"
const WorkDetail = ({ workDetail }) =>  (
    <li className="work_detail-container">
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
                <h2>{workDetail.title}&nbsp;<a href={workDetail.companyLink}>@{workDetail.companyName}</a></h2>
                <span> {workDetail.startDate} - {workDetail.endDate} | {workDetail.address}</span>
                <p>{workDetail.work}</p>
        </motion.div>
    </li>
);
export default WorkDetail;