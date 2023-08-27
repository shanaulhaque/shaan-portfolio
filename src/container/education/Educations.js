
import EducationDetail from "../../component/EducationDetail";
import { educationData } from "../Data";
import './education.css';
import logo512 from '../../assets/logo512.png';

const Educations = () =>  (
    <div className="education_content" id="education">
      <div className="education_content-image">
        <img src={logo512} alt="im"></img>
      </div>
      <div className="education_content-detail"> 
          {educationData.map((educationDetail) => (
              <EducationDetail educationDetail={educationDetail}></EducationDetail>
          ))}
      </div>
    </div>
    );
export default Educations;