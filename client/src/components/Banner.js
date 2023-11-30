import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "https://i.ibb.co/D1yL79W/cosmetics-banner2.webp",
    "https://i.ibb.co/g9t00F9/makeup-professional-cosmetics-on-pink-600nw-1398700589.webp",
    "https://i.ibb.co/1MQhHTW/banner-e562416e-ed91-4b4d-819e-e3c7847e4fc8.webp",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="justify-center mt-8">
      <div className="relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`cosmetics-banner${index}`}
            className={`w-full h-80 absolute top-0 left-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="px-4 py-6 absolute top-0 left-0 p-4 text-white shadow-lg">
          <h1 className="text-5xl font-bold">Use code BEAUTY503 for 15% off!</h1>
          <button className="text-3xl font-bold">
            <NavLink to="/register">Register to receive exclusive deals!</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

