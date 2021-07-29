import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import './BunnyCards.css' 



const BunnyCards=() =>{

    const [bunny, setBunny] = useState([
        {
            name: 'thumper',
            url: 'https://res.cloudinary.com/do68wjft3/image/upload/v1610400315/4B86CE54-AC68-4CFE-B446-C13927F2BB27_1_201_a_kuqymi.jpg'
        },
        {
            name: 'spotty',
            url: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg'
        }
    ]);
    //const people = [];




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