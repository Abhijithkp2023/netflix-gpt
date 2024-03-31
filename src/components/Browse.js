import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondayContainer from "./SecondaryContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () => {
useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
    </div>
  )
}

export default Browse;
