import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black grid grid-cols-12 w-1/2 rounded-md'>
        <input type='text' className='col-span-9 p-2 m-3' placeholder={lang[langKey].getSearchPlaceholder} />
        <button className='col-span-3 bg-red-700 m-3 p-2 rounded-lg'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
