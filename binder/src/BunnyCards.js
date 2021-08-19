import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import {getAllPets} from './lib/api';
// import WantedAnimal from './Components/WantedAnimals/WantedAminal'
import "./SwipeButtons.css"
import { Link  } from 'react-router-dom'

import { Card, CardWrapper } from 'react-swipeable-cards';
import { IconButton } from '@material-ui/core';



import FavoriteIcon from '@material-ui/icons/Favorite';
import RefreshIcon from '@material-ui/icons/Refresh';
import CancelIcon from '@material-ui/icons/Cancel';
import StarRateIcon from '@material-ui/icons/StarRate';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';



import './BunnyCards.css';



const BunnyCards = () => {


    const [petList, setPetList] = useState([])

    const [likedPetList, setLikedPetList] = useState([])

    useEffect(() => {
        const fetchPet = async () =>{
            const result =  await getAllPets()
        setPetList(result.data)
    };
    fetchPet();
    }, []);

            console.log(likedPetList)


            //   const cardStyle = {
            //     backgroundColor: "#059FFF",
            //     position: 'relative',
            //     width: '600px',
            //     padding: '20px',
            //     maxWidth: '85vw',
            //     height: '50vh',
            //     borderRadius: '20px',
            //     backgroundPosition: 'center',
            //     backgroundSize: 'cover',
            //     boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3)'
            //   }


        return(
        
            <div className="bunnyCard__container" >
    <CardWrapper >
            {petList.map(animal => (
                <Card   
                    className="swipe"
                    key={animal.name}
                    preventSwipe={['up','down']}  
                    onSwipeLeft={() =>  setLikedPetList(likedPetList => likedPetList.concat(animal))} 
                    >
    

                    <div
                        style={{ backgroundImage: `url(${animal.image})` }} 
                        className="card"
                    >
                    <h3>{animal.name}</h3>
                    </div> 
                {/* // </TinderCard> */}
                </Card>
            ))}
            </CardWrapper>
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
            <div className="swipeButtons">
            <IconButton className="swipeButtons__fav">
            <Link to="/WantedAnimals">
    
                <FavoriteIcon fonsize="large" />
                {/* <WantedAnimal data ={likedPetList.data} /> */}
    
            </Link>
            </IconButton>
            </div>
            <IconButton className="swipeButtons__flash">
                <FlashOnIcon fonsize="large" />
            </IconButton>
       
         
            </div>
        </div>
        )
    
}    



export default BunnyCards;