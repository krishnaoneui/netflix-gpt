import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,SetisSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    SetisSignInForm(!isSignInForm) 
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>

      <form className=" bg-opacity-80 rounded-lg align-items: center w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign {isSignInForm ? 'In' : 'Up'}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-lg " />}
        <input type="text" placeholder="E-mail" className="p-2 my-4 w-full bg-gray-700 rounded-lg " />
        <input type="Password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700 rounded-lg" />
        <button className="p-4 my-6 bg-red-800 w-full rounded-lg">Sign {isSignInForm ? 'In' : 'Up'}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? 'New to Netflix? sign up now' : 'Alll ready Registerd Sign-in now'}
          </p>
      </form>
    </div>
  );
};

export default Login;
