import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'



const BunnyCards=() =>{

    const [bunny, setBunny] = useState([
        {
            name: 'thumper',
            url: 'https://media.newyorker.com/photos/59096937019dfc3494ea1169/master/pass/Frazier-Bunny-Rabbits.jpg'
        },
        {
            name: 'spotty',
            url: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg'
        }
    ]);
    //const people = [];




    return(
        <div>
            <hi>Hi</hi>
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
                        <h3>{performance.name}</h3>
                    </div> 
                /</TinderCard>
            ))}
        </div>
        
    );
}

export default BunnyCards;