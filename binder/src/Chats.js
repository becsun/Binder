import React from 'react';
import Chat from "./Chat";
import './Chats.css'


const Chats = () => {
    return <div className="chats"> 
    <Chat
        name="dotty"
        message="whats up"
        timestamp="40sec"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDeNeTBEcCSV0zQ4cawDZJtlptGNnlSF_Mw&usqp=CAU"
        />
        <Chat
        name="greg"
        message="whats up"
        timestamp="40sec"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcPbZ_p5Lv1UBwm6frhjxQUBkRpzCLlpcfw&usqp=CAU"
        />
    <Chat
        name="john"
        message="whats up"
        timestamp="40sec"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMA6hooCy2Tb2ayAL6x1dvo7yGz1GFfKZog&usqp=CAU"
        />
    </div>;
}

export default Chats