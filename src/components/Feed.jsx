import React from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
const Feed = () => {
  return (
    <div className="feed">
          <div className='feed__inputContainer'>
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#7085f9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
            </div>
          </div>
          {/* posts */}
          <Post />
    </div>
      
  )
}

export default Feed