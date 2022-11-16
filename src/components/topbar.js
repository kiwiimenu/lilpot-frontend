import React from 'react'
import './topbar.css'
import lilpotlogo from '../assets/lilpotlogo.png'
import lilpottext from '../assets/lolpotlogotext.png'
import lilpotchinese from '../assets/lolpotlogochinese.png'



function topbar() {
  return (
    <div className='header'>
        <div className='lilpot-logo'>
          <img src={lilpotlogo}></img>
        </div>
        <div className="lilpot-logo">
          <img src={lilpottext} ></img>
        </div>
        <div className="lilpot-logo">
        <img src={lilpotchinese} ></img>
        </div>
        
      <ul className='nav-menu'>
        <a
          className="btn"
          href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>
        <a
          className="btn"
          href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Menu
        </a>
        <a
          className="btn"
          href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Events
        </a>
        <a
          className="btn"
          href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Opening Hours
        </a>
        <a
          className="btn"
          href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Locations
        </a>
      </ul>
    </div>
  )
}

export default topbar