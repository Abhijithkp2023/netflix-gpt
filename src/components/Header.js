import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  const handleSigneOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen h-24 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user && <div className="flex">
        <img
          className="w-12 h-12 my-4"
          alt="user-icon"
          src={user?.photoURL} 
        />
        <button
          className="m-5 p-2 border border-black bg-gray-700 text-white"
          onClick={handleSigneOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
