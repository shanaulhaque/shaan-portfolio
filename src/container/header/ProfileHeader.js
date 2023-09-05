
//import ai from '../../assets/ai.png';
import ai from '../../assets/developer-pic-1.png';
import './profile_header.css'
const ProfileHeader = ({ name, title, location }) => (

  <div className="profile__header section__padding" id="home">
    <div className="profile__header-content">
      <h1 className="gradient__text">{name}</h1>
      <p>{title}</p>
      <p>Software Developer based in {location}</p>
      <div className='profile_header-contact'>
        <a href='https://in.linkedin.com/in/shanaulhaque'><i class='bx bxl-linkedin'></i></a>
        <a href='https://github.com/shanaulhaque'><i class='bx bxl-github'></i></a>
        <a href='https://www.instagram.com/shanaulhaque/'><i class='bx bxl-instagram' ></i></a>
        {/* <a href='https://twitter.com/shanaulhaque1'><i class='bx bxl-twitter' ></i></a>
        <a href='https://m.facebook.com/shanaulhaque/'><i class='bx bxl-facebook' ></i></a>
        <a href='https://wa.me/910000000000'><i class='bx bxl-whatsapp' ></i></a> */}
        <a href='mailto:shanaulhaque@live.com'><i class='bx bx-envelope' ></i></a>
        
      </div>
    </div>
    <div className="profile__header-image">
      <img src={ai} alt="AI"/>
    </div>
  </div>
);

  export default ProfileHeader;

  
  