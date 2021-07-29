import React from "react";
import "./SwipeButtons.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import CancelIcon from '@material-ui/icons/Cancel';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';



const SwipeButtons =() => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <RefreshIcon fonsize="large" />
            </IconButton>
            <IconButton className="swipeButtons__cancel">
                <CancelIcon fonsize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fonsize="large" />
            </IconButton>
            <IconButton className="swipeButtons__fav">
                <FavoriteIcon fonsize="large" />
            </IconButton>
            <IconButton className="swipeButtons__flash">
                <FlashOnIcon fonsize="large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons