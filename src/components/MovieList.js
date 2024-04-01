import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
  <div className=" py-6  ">
    <h1 className="text-white text-3xl font-bold py-6 ">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar scroll-smooth ">
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
