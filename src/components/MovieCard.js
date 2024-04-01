import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    
    <div className='w-48 pr-3'>
      <img alt='Movie Card' className='rounded-md'src={IMG_URL+posterPath} />
    </div>
  )
}

export default MovieCard
