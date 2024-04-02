import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant.js";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    

    const filterData = json?.results?.filter(
      (movies) => movies.type === "Trailer"
     
    );
    const trailer = filterData?.length ? filterData[0] : json[0]; //handled the error when there is no trailer
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};

export default useMovieTrailer;
