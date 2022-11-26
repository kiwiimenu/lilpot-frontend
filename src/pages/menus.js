import React from 'react'
import "./menus.css"
import masterbg from '../assets/masterbackground.png';
import regmenu from '../assets/regularmenu.png'
import litemenu from '../assets/regularmenu.png'

function menus() {
  return (
    <div  className="big" style={{backgroundImage:`url(${masterbg})`}}>
        <div className='menu_containers'>
            <div className='menu'>
                <h1 className='menutitle'>Regular Menu</h1>
                <img src={regmenu} className="img" alt='regularmenupic'></img>
            </div>
            <div className='menu'>
                <h1 className='menutitle'>Lite Menu</h1>
                <img src={litemenu} className="img" alt='litemenupic'></img>
            </div>
        </div>
    </div>
  )
}

export default menus