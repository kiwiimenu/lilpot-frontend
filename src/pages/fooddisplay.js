import React from 'react'
import './fooddisplay.css'
import card from '../assets/meet1.jpg';
import masterbg from '../assets/masterbackground.png';

function fooddisplay() {
    return (
        <div style={{ backgroundImage: `url(${masterbg})` }}>
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
        </div>

    )
}

export default fooddisplay