import React from 'react';
import logo from '../assert/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function BaseLayout({ children, animationClass }) {
  return (
    <div className="bg-[#2D3041] flex flex-col items-center justify-center h-screen">
      <div className="text-center flex flex-col items-center py-10">
        <img className="w-64" src={logo} alt="logo"></img>
        <h1 className="text-white">LOGIN/SIGNUP/FORGOT PANEL ALL IN ONE SINGLE PAGE</h1>
        <p className="text-white text-sm">
          <i>by <u>Farhadur Rahim</u></i>
        </p>
      </div>
      {/* main container */}
      <div className="bg-[#C5C9CA] flex flex-col rounded-t-lg w-[50%] h-[600px]"> {/* Fixed height added */}
        <div className="flex gap-2 justify-start py-4 pb-2 px-4">
          {/* three color dots */}
          <div className="w-4 h-4 bg-[#F16063] rounded-full"></div>
          <div className="w-4 h-4 bg-[#FDBD37] rounded-full"></div>
          <div className="w-4 h-4 bg-[#40C246] rounded-full"></div>
        </div>
        <div className="flex h-[560px]">
          {/* left container */}
          <div className="bg-[#2D324E] flex-2 text-white flex flex-col gap-10 justify-center py-20 px-10">
            <img className="w-40" src={logo} alt="logo"></img>
            <p className="text-lg">Login using social media to <br /> get quick access</p>
            <div className="flex flex-col gap-3">
              <button className="bg-[#3B5998] flex items-center justify-center px-10 py-3 rounded-lg">
                <FontAwesomeIcon icon={faFacebookF} className="mr-2" /> Sign in with Facebook
              </button>
              <button className="bg-[#245A6A] flex items-center justify-center mt-2 px-10 py-3 rounded-lg">
                <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Sign in with Twitter
              </button>
              <button className="bg-[#C32E10] flex items-center justify-center mt-2 px-10 py-3 rounded-lg">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Sign in with Google
              </button>
            </div>
          </div>
          {/* right container */}
          <div className={`bg-white flex-1 py-10 px-20 ${animationClass}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
