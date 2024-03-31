import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-4/12 text-md my-5">{overview}</p>
      <div>
        <button className="text-black  bg-white border p-4 px-10 text-xl rounded-md hover:opacity-80">
          ▶Play
        </button>
        <button className="mx-4 text-white  bg-gray-500 border p-4 px-10 text-xl bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
