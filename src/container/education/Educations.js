
import EducationDetail from "../../component/EducationDetail";
import { educationData } from "../Data";
import './education.css';
import laptop from '../../assets/laptop.png';

const Educations = () =>  (
    <div id="education">
      <div className="education_title">
        <h1>Education</h1>
        <div className="education_title_bar"></div>
      </div>
    
    <div className="education_content">
      <div className="education_content-image">
        <img src={laptop} alt="im"></img>
      </div>
      <div className="education_content-detail"> 
          {educationData.map((educationDetail) => (
              <EducationDetail educationDetail={educationDetail}></EducationDetail>
          ))}
      </div>
    </div>
    </div>
    );
export default Educations;