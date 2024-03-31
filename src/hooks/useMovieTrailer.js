import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVides = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (movies) => movies.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0]; //handled the error when there is no trailer
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVides();
  }, []);
};

export default useMovieTrailer;
