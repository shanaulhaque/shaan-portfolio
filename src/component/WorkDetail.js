const WorkDetail = ({ workDetail }) =>  (
    <div>
        <div>
            <img src={workDetail.logo} alt="img"></img>
        </div>
        <div>
            <h2>{workDetail.companyName}</h2>
            <p>{workDetail.startDate}</p>
            <p>{workDetail.endDate}</p>
            <p>{workDetail.title}</p>
        </div>
    </div>
);
export default WorkDetail;