import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './BunnyCards.css';



const BunnyCards=() =>{

    const [bunny, setBunny] = useState([]);
    //const people = [];


    useEffect(() => {
        // where the code runs, only once and never again
        database.collection('bunnies').onSnapshot(snapshot =>{
            setBunny(snapshot.docs.map(doc => doc.data()))
        })
    }, [bunny]); 

    return(
            <div className="bunnyCard__container">
            {bunny.map((bunny) => (
                <TinderCard
                    className="swipe"
                    key={bunny.name}
                    preventSwipe={['up','down']}
                >
                    <div
                        style={{ backgroundImage: `url(${bunny.url})` }} 
                        className="card"
                    >
                    
                    <h3>{bunny.name}</h3>
                    </div> 
                /</TinderCard>
            ))}
        </div>
        
    );
}

export default BunnyCards;