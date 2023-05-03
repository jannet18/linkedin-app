import React from 'react';
import { Avatar } from '@mui/material';
import "../styles/Sidebar.css";
import background from "../assets/images/background.jpeg"


const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={background} alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Janet Ngei</h2>
            <h4>Software Engineer</h4>
        </div>
        <div className="sidebar__stats">
        <div className="sidebar__stat">
        <p>Grow your network</p>
        <p className="sidebar__statNumber">Connections 89</p>
        </div>
            <div className="sidebar__stat">
                {/* <p>Grow your network</p> */}
                <p>Who's viewed your profile</p>
                <p className="sidebar__statNumber">2,300</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("react.js")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar