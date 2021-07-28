import React from 'react';
import "./Header.css";
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';

const Header = () => {
    return(
        <div className="header">
            <PetsIcon />
            <img 
            className="header__logo" src="https://media.istockphoto.com/vectors/hare-hug-vector-id472279927?k=6&m=472279927&s=612x612&w=0&h=9_n2H93UVE2sWta-frQHsxGc2vWgf_qHQcP4QhPITZo=" alt="bunny pair" />
            <ChatIcon />
        </div>
    )
}

export default Header;
