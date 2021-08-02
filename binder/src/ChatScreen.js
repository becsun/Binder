import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name:"dotty",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIf16DwZM4TpRrzUMUG4k11wipK13L8yQUQ&usqp=CAU",
            message: "what's up"
        },
        {
            name:"dotty",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIf16DwZM4TpRrzUMUG4k11wipK13L8yQUQ&usqp=CAU",
            message: "you good"
        },
        {
            message: "how's it going"
        }
    ]);

    return (
        <div className="chatScreen">
            <p>you matched with..</p>
            {messages.map((message) => (
                <div className="chatScreen__message">
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;