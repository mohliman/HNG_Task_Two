import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'


function App() {
  const [movies, setMovies] = useState([])
  const [Heromovie, setHeroMovie] = useState([])
  // 81fa6eba844e4ba0b3492444e7380461
  const MOVIE_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=81fa6eba844e4ba0b3492444e7380461'
  let url = 'https://image.tmdb.org/t/p/original'
  let fetchMovies = async () => {
      let data = await fetch(MOVIE_API)
      let moviesData = await data.json()
      console.log(moviesData.results)
      const top10Movies = moviesData.results.slice(0, 10);
      setMovies(top10Movies)
      setHeroMovie(moviesData.results[0])
  };

  useEffect(()=>{

    fetchMovies()

  },[])

  return (
    <div className='app'>
      
          <Hero movie={Heromovie}/>
          <div className='app_container'>
          <div className='app_flex'>
                  <h2>Featured Movie</h2>
                  <span className='span'>See More</span>
                 </div>
              <div className='MovieList'>
                      {movies.map(movie => 
                      (
                        <MovieCard key ={movie.id} movie = {movie}/>
                      ))}
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default App
