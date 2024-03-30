import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'

const Browse = () => {


  const getNowPlayingMovies = async () => {
   const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc', API_OPTIONS);
   const json = await data.json();
   console.log(json);
  } 
   useEffect(() => {
    getNowPlayingMovies();
   },[]);

  
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
