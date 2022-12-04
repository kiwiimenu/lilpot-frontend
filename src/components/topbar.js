import React from 'react'
import './topbar.css'
import lilpotlogo from '../assets/lilpotlogo.png'
import lilpottext from '../assets/lolpotlogotext.png'
import lilpotchinese from '../assets/lolpotlogochinese.png'
import {Link} from 'react-router-dom'


function TopBar() {
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
          {/* do you want a home page? The ones done with Link tag are done by Sarina using router */}
          <Link to='/aboutus' className='btn'>About Us</Link>
          
          
          <a
            className="btn"
            href={"https://www.linkedin.com/in/dorian-chen-343058247/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Menu
          
          
          </a>
          
          
          <Link to='/events' className='btn'>Events</Link>
          
          
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

export default TopBar;