import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';

function Header(){
    return(
        <div className="header">
            <PetsIcon />
            <h1>header</h1>
            <ChatIcon />
        </div>
    )
}

export default Header;
