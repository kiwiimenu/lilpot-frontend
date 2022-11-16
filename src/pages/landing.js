import React from 'react'
import './landing.css'
import Topbar from '../components/topbar'
import sample from '../assets/background.mp4';

function Landing() {
  return (
    <div className='Wrapper'>
        <Topbar></Topbar>
        <div className='cover'></div>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
    </div>
  )
}

export default Landing