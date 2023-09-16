import React from 'react'
import './MovieCard.css'
import { Link } from "react-router-dom";
import heartregular from '../assets/heartregular.svg'
import heart from '../assets/heart.svg'
import { useState } from 'react';


function MovieCard({movie}) {
    let url = 'https://image.tmdb.org/t/p/w500'
  return (
    <div data-testid='movie-card'>
        
          <div className='image_div'>
          <Link to={`/movies/${movie.id}`}><img className='img' data-testid='movie-poster' src={`${url}${movie.poster_path}`} alt="" /></Link>
        <img id='btn' className='heart' src={heartregular} alt="" />
          </div>
          
        <span data-testid='movie-release-date'>USA, {movie.release_date}</span>
        <Link to={`/movies/${movie.id}`}><h4 data-testid='movie-title'>{movie.original_title}</h4></Link>
        <span>Action, Adventure, Drama</span>
        
        
    </div>
  )
}

export default MovieCard