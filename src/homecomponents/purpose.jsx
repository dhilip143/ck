import React from "react";
import on from "/src/assets/home/one.png";
import tw from "/src/assets/home/two.png";
import thr from "/src/assets/home/three.png";
import fr from "/src/assets/home/four.png";

const slides = [on, tw, thr, fr];

const CarousalRow = ({ reverse = false, duration = 14 }) => {
  return (
    <div className="relative w-full overflow-hidden my-4">
      {/* Left & Right Fade Overlay */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

      {/* Sliding Row */}
      <div
        className="flex items-center"
        style={{
          width: `${slides.length * 2 * 24}rem`,
          animation: `${reverse ? "reverseScroll" : "scroll"} ${duration}s linear infinite`,
        }}
      >
        {slides.concat(slides).map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-60 h-60 mx-4 transition-transform duration-500 hover:scale-105"
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default function Purpose() {
  return (
    <div className="text-gray-900 py-12 relative bg-white">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-3">
        Our Purpose
      </h2>
      <p className="text-center text-gray-600 text-xs md:text-lg px-4 sm:px-6 md:px-8 mb-8">
        Driving impact continuously with our initiatives.
      </p>

      {/* Continuous Carousel */}
      <CarousalRow duration={14} />
    </div>
  );
}
