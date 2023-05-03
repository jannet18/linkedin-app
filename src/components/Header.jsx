import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/images/linkedin.png";
import profile from "../assets/images/member-1.png";
import "../styles/Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Header = () => {
  return (
    <div className='header'>
    <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
            <SearchIcon />
            <input type="text" />
        </div>
    </div>
    <div className="header__right">
     <HeaderOption Icon={HomeIcon} title="Home" /> 
     <HeaderOption Icon={SupervisorAccountIcon} title="My Network" /> 
     <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /> 
     <HeaderOption Icon={ChatIcon} title="Messaging" /> 
     <HeaderOption Icon={NotificationsIcon} title="Notifications" />
     <HeaderOption avatar={profile} title="me" />
    </div>
    </div>
  )
}

export default Header