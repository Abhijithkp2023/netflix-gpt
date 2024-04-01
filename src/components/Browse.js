import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondayContainer from "./SecondaryContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
    </div>
  )
}

export default Browse;
