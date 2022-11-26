import React from 'react'
import './hours.css'
import masterbg from '../assets/masterbackground.png';
import card from '../assets/ourhours.png';


function hours() {
  return (
    <div style={{backgroundImage:`url(${masterbg})`}} className="cont">
        <div className="Hours">
            <div className="InfoContainer">
                <img src={card} className="ourhours" alt='cardwithtext'></img>
                <div className="textContainer">
                    <h1>Monday<br/>Tuesday<br/>Wednesday<br/>Thursday<br/>Friday<br/>Saturday<br/>Sunday</h1>
                    <h2>4-11p.m.<br/>4-11p.m.<br/>4-11p.m.<br/>4-11p.m.<br/>4-11p.m.<br/>12-11p.m.<br/>12-11p.m.</h2>
                </div>
                
            </div>



            <div className="Maps">
                <iframe className="responsive-iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=G1%20-%20220%20King%20St%20N%20N2J%203Y7,%20Waterloo,%20ON%20N2J%202Y7&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

        </div>
    </div>
  )
}

export default hours