import React from 'react'
import './landing.css'
import Topbar from '../components/topbar'
import sample from '../assets/background.mp4';
import Cover from '../assets/backgroundcover.png';

function Landing() {
  return (
    <div className='Wrapper'>
        <Topbar></Topbar>
        <img src={Cover} alt="" className='cover'/>
        <div className='videoContainer'>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        </div>
    </div>
  )
}

export default Landing