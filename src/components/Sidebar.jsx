import React from 'react';
import { Avatar } from '@mui/material';
import "../styles/Sidebar.css";
import background from "../assets/images/background.jpeg"


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={background} alt="" />
            <Avatar/>
            <h2>Janet Ngei</h2>
            <h4>Software Engineer</h4>
        </div>
        <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p className="sidebar__statNumber">Connections 89</p>
            <p>Grow your network</p>
        </div>
            <div className="sidebar__stat">
                <p>Who's viewed your profile</p>
                <p className="sidebar__statNumber">2,300</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar