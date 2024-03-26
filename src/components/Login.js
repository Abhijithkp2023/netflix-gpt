import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="bg-black absolute w-3/12 p-12 my-60 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="my-2 p-2 font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="my-4 p-4 w-full bg-gray-700"
        />}
        
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-700"
        />
        <button className="w-full p-4 my-6 bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
