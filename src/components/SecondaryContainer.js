import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black '>
      <div className='-mt-60 pl-12 z-20 relative'>
      <MovieList title={"Upcoming Movies"} movies = {movies.upcomingMovies} />
      <MovieList title={"Now Playing Movies"} movies = {movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies = {movies.topRatedMovies} />
      <MovieList title={"Popular Movies"} movies = {movies.popularMovies} />
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
