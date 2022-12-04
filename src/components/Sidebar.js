import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
import './topbar.css'
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <Link to='/' className='btn'>Home</Link>
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
    </Menu>
  );
};