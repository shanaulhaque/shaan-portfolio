import WorkDetail from "../../component/WorkDetail";
import { workDetails } from "../Data";

const Experiance = () => (
    <div>
      {workDetails.map((workDetail) => (
        <WorkDetail workDetail={workDetail}></WorkDetail>
      ))}
    </div>
    );
export default Experiance;