import React, { useEffect, useState } from "react";
import { slide1, slide2 } from '../../assets';

const images = [slide1, slide2];

export default function Slider({ children }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="flex relative">
        <div className="container mx-auto">
            <div className="bg-white border-b">
                {images.map((src, index) => (
                    <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-20">
                    {children}
                </div>
            </div>
    </div>
  );
}
