import './Movie.css'
import play from '../assets/play.svg'
import arrowright from '../assets/arrowright.svg'
import calender from '../assets/calender.svg'
import house from '../assets/house.svg'
import list from '../assets/list.svg'
import tv from '../assets/tv.svg'
import video from '../assets/video.svg'
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";





const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=81fa6eba844e4ba0b3492444e7380461`;
  let url = 'https://image.tmdb.org/t/p/original'

    let fetchMovies = async () => {
      let data = await fetch(movieDetailsUrl)
      let moviesData = await data.json()
      setMovieDetails(moviesData)
    }

  useEffect(()=>{

    fetchMovies()

  },[id])
    // Make an API call to fetch movie details using 'id'
    // Update 'movieDetails' state with the fetched data

    return (
      <div className="movie_container">
          <div className="sideBar">
              <Link className='Link' to='/'>
                <div className="logo">
                 <img className='logo__icon' src={play} alt="" />
                 <span className='logoText'>MovieBox</span>
              </div></Link>
              <div className='menuOptions'>
                  <ul>
                   <Link className='Link' to='/'> <li>
                      <img className='detailIcon'  src={house} alt="" />
                      <span className='hide'>Home</span>
                    </li>
                    </Link>
                    <li>
                      <img className='detailIcon' src={video} alt="" />
                      <span className='hide'>Movies</span>
                    </li>
                    <li>
                      <img className='detailIcon' src={tv} alt="" />
                      <span className='hide'>TV Series</span>
                    </li>
                    <li>
                      <img className='detailIcon' src={calender} alt="" />
                      <span className='hide'>Upcoming</span>
                    </li>
                  </ul>
              </div>
              <div className='div hide'>
                <p>PLay movie quizes and earn free tickets</p>
                <span>50k people are playing now</span>
                <button>Start playing</button>
              </div>
              <div className='logOut'>
                <img src={arrowright} alt="" />
                <span>Log Out</span>
              </div>
          </div>
          <div className="mainFeed">
            <div className='main_pic' style={{backgroundImage: `url('${url}${movieDetails.backdrop_path}')`}}></div>
            <div className='main_bottom'>
              <div>
                <div className='details'>
                <span data-testid='movie-title' className='h2'>{movieDetails.title}</span>
                <span data-testid='movie-release-date'>{movieDetails.release_date}</span>
                <span>PG-13</span>
                <span data-testid='movie-runtime'>{movieDetails.runtime}</span>
                </div>
                  <p data-testid='movie-overview' className='overview'>{movieDetails.overview}</p>
              </div>
              <div>
                <button className='btn'>See Showtimes</button>
                <button className='btn pale_red'>More watch options</button>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default Movie;