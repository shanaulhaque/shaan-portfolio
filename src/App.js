import ProfileHeader from "./container/header/ProfileHeader";
import { profileData } from "./container/Data";
// import About from "./container/about/About";
// import Experiance from "./container/experience/Experience";
import Educations from "./container/education/Educations";
// import Achievements from "./container/achivements/Achivements";
// import Footer from "./container/footer/Footer";
import './App.css'
import ProfileNavbar from "./container/header/ProfileNavbar";


function App() {
  return (
    <div className="App"> 
        <div className="gradient__bg"> 
        <ProfileNavbar/>
        <ProfileHeader name={profileData.name} title={profileData.title} location={profileData.location} ></ProfileHeader>
        </div>
        <div>
        {/* <About/>
        <Experiance/> */}
        <Educations/>
        {/*<Achievements/>
        <Footer/> */}
        </div>
    </div>
  );
}

export default App;
