import './education_detail.css'

const EducationDetail = ({ educationDetail }) =>  (
    <div className="education_detail-container">
        <div className="education_detail-container-content" >
            <h2>{educationDetail.institute}</h2>
            <h3>{educationDetail.program}</h3>
        </div>
    </div>
);
export default EducationDetail;