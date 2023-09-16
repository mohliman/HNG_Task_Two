import React from 'react'
import play from '../assets/play.svg'
import bars from '../assets/bars.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <div className='gap flex'>
            <img className='icon1' src={play} alt="" />
            <span className='logo'>MovieBox</span>
        </div>
        <input className='nav_input' type="text" placeholder='What do you want to watch?'/>
        <div className='gap flex'>
            <span className='hero__span'>Sign in</span>
            <img className='icon2' src={bars} alt="" />
        </div>
    </div>
  )
}

export default Navbar