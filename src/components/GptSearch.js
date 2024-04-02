import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchPage from "./GptSearchPage";
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL}/>
      </div>
      <GptSearchBar />
      <GptSearchPage />
    </div>
  )
}

export default GptSearch;
