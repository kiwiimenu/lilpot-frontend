import React from 'react'
import './fooddisplay.css'
import card from '../assets/meet1.jpg';

function fooddisplay() {
    return (
        <div className="collage">
            <div className="row">
                <div className="column">
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                </div>
                <div className="column">
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                </div>
                <div className="column">
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                </div>
                <div className="column">
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                    <img src={card} className="fade_hov" alt='cardwithtext'></img>
                </div>
            </div>
        </div>

    )
}

export default fooddisplay