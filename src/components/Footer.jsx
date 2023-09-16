import React from 'react'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import './Footer.css'

function Footer() {
  return (
   
        <footer>
            <div className='img_flex'>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
              <a href="#">
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className='flex'>
               <p>Conditions of Use</p>
               <p>Privacy & Policy</p>
               <p>Press Room</p>
            </div>
            <p>2023 MovieBox by Abubakar Muhammad Baqir</p>
        </footer>
  
  )
}

export default Footer