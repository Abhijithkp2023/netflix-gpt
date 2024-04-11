import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector,useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //This is GPT API to make to get movie results
    const gptQuery =
      "Act as a movie recommendation system suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies , comma seperated like the example ahead. Example: Result: movie1, movie2, movie3, movie4, movie5";

    const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){
      //handle error
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  }
  

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black grid grid-cols-12 w-1/2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-2 m-3"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="col-span-3 bg-red-700 m-3 p-2 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
