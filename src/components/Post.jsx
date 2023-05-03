import React from 'react';
import '../styles/Post.css';
import { Avatar } from '@mui/material';
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from './InputOption';

const Post = ({name, description, message, photoUrl}) => {
  return (
    <div className='post'>
        <div className="post__header">
        <Avatar/>
        <div className="post__info">
            <h2>Jane Doe</h2>
            <p>Description</p>
        </div>
        </div>
        <div className="post__body">
            <p>Message</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpOffAltIcon } title='Like' />
            <InputOption Icon={ChatOutlinedIcon} title='Comment' />
            <InputOption Icon={ShareOutlinedIcon } title='Share' />
            <InputOption Icon={SendOutlinedIcon} title='Send' />
        </div>
        
    </div>
  )
}

export default Post