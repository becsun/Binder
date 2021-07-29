import React from 'react';
import "./Header.css";
import PetsIcon from '@material-ui/icons/Pets';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Header = ({backButton}) => {
    const history = useHistory();
    return(
        <div className="header">
            {backButton? (
                <IconButton onClick={() => history.replace(backButton)}>    
                    <ArrowBackIcon fontSize="large" classname="header__icon" />
                </IconButton>
            ): (
            <IconButton>
            <PetsIcon className="header__icon" fontSize="large"/>
            </IconButton>
            )}

            <Link to ="/">
            <img 
            className="header__logo" src="https://media.istockphoto.com/vectors/hare-hug-vector-id472279927?k=6&m=472279927&s=612x612&w=0&h=9_n2H93UVE2sWta-frQHsxGc2vWgf_qHQcP4QhPITZo=" alt="bunny pair" 
            />
            </Link>
            <Link to="/chat">
            <IconButton>
            <ChatIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>

        </div>
    )
}

export default Header;
