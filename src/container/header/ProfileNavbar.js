import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './profile_navbar.css'

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#experience">Experience</a></p>
    <p><a href="#education">Education</a></p>
    <p><a href="#achievements">Achievements</a></p> 
    </>
  )
  
  const ProfileNavbar = () => {
  
    const [ toggleMenu, setToggleMenu] = useState(false);
  
    return (
      <div className='profile__navbar'>
        <div className='profile__navbar-links'>
            <div className='profile__navbar-links_logo'>
              <h1 className="gradient__text">SH</h1>
            </div>
            <div className='profile__navbar-links_container'>
              <Menu/>
            </div>
        </div>
        <div className='profile__navbar-menu'>
          { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
          {toggleMenu && (
          <div className="profile__navbar-menu_container scale-up-center">
            <div className="profile__navbar-menu_container-links">
             <Menu/>
            </div>
          </div>
          )}
        </div>
  
      </div>
    )
  }
  
  export default ProfileNavbar