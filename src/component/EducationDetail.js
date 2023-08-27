import './education_detail.css'

const EducationDetail = ({ educationDetail }) =>  (
    <div className="education_detail-container">
        <div className="education_detail-container-content" >
            <h2>{educationDetail.institute}</h2>
            <p>{educationDetail.startDate}</p>
            <p>{educationDetail.endDate}</p>
        </div>
    </div>
);
export default EducationDetail;