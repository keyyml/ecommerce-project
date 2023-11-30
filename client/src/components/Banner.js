import React from "react";
import { NavLink } from "react-router-dom";

function Banner(){

  return(
    <div className="justify-center mt-8">
      <div className="relative">
        <img
          src="https://i.ibb.co/D1yL79W/cosmetics-banner2.webp"
          alt="cosmetics-banner2"
          className="w-full h-96"
        />
        <div
          className="absolute top-0 left-0 p-4 text-white"
        >
          <h1 className="text-5xl font-bold">Use code BEAUTY503 for 15% off!</h1>
          <button className="text-3xl font-bold"><NavLink to="/register">Register to receive exclusive deals!</NavLink></button>
        </div>
      </div>
    </div>
    )
}
export default Banner 