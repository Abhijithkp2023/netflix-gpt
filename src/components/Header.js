import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const handleSigneOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser")
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <div className="absolute w-screen h-20 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { user && <div className="flex text-xs">
        <img
          className="w-8 h-8 my-4"
          alt="user-icon"
          src={user?.photoURL} 
        />
        <button
          className="m-5 p-1 border border-black bg-gray-700 text-white"
          onClick={handleSigneOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
