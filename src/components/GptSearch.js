import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL}/>
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  )
}

export default GptSearch;
