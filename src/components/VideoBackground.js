import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer({ movieId });

  return (
    <div className="w-full">
    <iframe
    className="w-screen aspect-video"
    src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?si=PptrMrE94__51O5A&amp;controls=0?&autoplay=1&mute=1" }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    </div>
  );
};

export default VideoBackground;
