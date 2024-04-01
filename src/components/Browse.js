import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondayContainer from "./SecondaryContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
    </div>
  )
}

export default Browse;
