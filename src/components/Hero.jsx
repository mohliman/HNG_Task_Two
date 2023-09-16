import React from 'react'
import Navbar from './Navbar'
import './Hero.css'


function Hero({movie}) {
  let url = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='Hero' style={{backgroundImage: `url('${url}${movie.backdrop_path}')`}}>
       <div className='Hero_container'>
          <Navbar/>
            <div className='Hero_details'>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <button className='Hero_btn'>WATCH TRAILER</button>
            </div>
       </div>
    </div>
  )
}

export default Hero