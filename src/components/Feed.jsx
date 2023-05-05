import React, { useState,  useEffect } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
// import firebase from 'firebase';
import { db } from '../Firebase/Config';
import { addDoc, doc, collection, onSnapshot } from 'firebase/firestore';

const Feed = () => {
    const[input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        onSnapshot(doc(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
        // try{
        //     const docRef = await addDoc(collection(db, 'posts'), {

        //     })
        // }
        // db.collection('posts').onSnapshot((snapshot) => (
        //     setPosts(snapshot.docs.map(doc => (
        //         {
        //             id:doc.id,
        //             data: doc.data(),
        //         }
        //     )))
        // )
        // )
    },[])

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'posts'), {
            name: 'Janet Ngei',
            description: 'This is a test.',
            message: input,
            photoUrl: '',
            // timestamp: firebase.firestore.fieldValue.serverTimestamp(),
        })
    
    }
  return (
    <div className="feed">
          <div className='feed__inputContainer'>
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost}type='submit'>Send</button>
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
          {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
          ))}
          <Post />
    </div>
      
  )
}

export default Feed