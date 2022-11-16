import React from 'react'
import './topbar.css'
import lilpotlogo from '../assets/lilpotlogo.png'
import lilpottext from '../assets/lolpotlogotext.png'
import lilpotchinese from '../assets/lolpotlogochinese.png'



function topbar() {
  return (
    <div className='header'>
      <ul className={"nav-menu"}>
        <img src={lilpotlogo} className="lilpotlogo"></img>
        <img src={lilpottext} className="lilpottext"></img>
        <img src={lilpotchinese} className="lilpotchinese"></img>
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