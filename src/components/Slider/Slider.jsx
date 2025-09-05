import React, { useEffect, useState } from "react";
import { slide1, slide2 } from '../../assets';
import ActionCard from "../ExtraComponent/ActionCard";
import RegisterLoginSection from "../ExtraComponent/RegisterLoginSection";
import MobileViewSideBar from "../ExtraComponent/MobileViewSideBar";
import DecorativeDivider from "../ExtraComponent/DecorativeDivider";

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
    <section className="">
      <div className="flex relative">
        <div className="container mx-auto">
          <div className="bg-white border-b h-[512px] md:h-auto">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full block object-cover object-[80%_0%] md:object-[60%_0%] lg:object-[100%_0] transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
          <div className="hidden md:block relative z-10 flex items-center justify-start h-full">
            {children}
          </div>
        </div>
      </div>
      {/* mobile search bar area */}
      <div className="block md:hidden">
        <MobileViewSideBar />
        <DecorativeDivider />
      </div>
      <RegisterLoginSection />
    </section>
  );
}
