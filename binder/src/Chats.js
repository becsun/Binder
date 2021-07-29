import Chat from '@material-ui/icons/Chat';
import React from 'react';
import './Chats.css'

const Chats = () => {
    return <div className="chats"> 
    <Chat
        name="mark"
        message="whats up"
        timestamp="40sec"
        profilePic=".."
        />
    </div>;
}

export default Chats