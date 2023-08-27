
import ai from '../../assets/ai.png';
import './profile_header.css'
const ProfileHeader = ({ name, title, location }) => (

  <div className="profile__header section__padding" id="home">
    <div className="profile__header-content">
      <h1 className="gradient__text">{name}</h1>
      <p>{title}</p>
      <p>Software Developer based in {location}</p>
    </div>
    <div className="profile__header-image">
      <img src={ai} alt="AI"/>
    </div>
  </div>
);

  export default ProfileHeader;

  
  