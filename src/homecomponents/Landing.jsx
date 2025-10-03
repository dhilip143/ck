import React from "react";

// ✅ Imported assets
import dal from "/src/assets/home/homelanding/lad.png";
import mak from "/src/assets/home/homelanding/make.png";
import ram from "/src/assets/home/homelanding/Frame 61.png";
import chik from "/src/assets/home/homelanding/Frame 63.png";
import nur from "/src/assets/home/homelanding/nurse.png";
import blo from "/src/assets/home/homelanding/blood.png";
import chi from "/src/assets/home/homelanding/chik.png";

function Landing() {
  return (
    <div className="w-full px-6 md:px-20 py-28 relative bg-transparent flex flex-col justify-center items-center gap-16 font-['Host_Grotesk']">
      
      {/* Heading */}
      <h1 className="text-center text-slate-800 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
        A house of{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #1A3038 55%, #0030A6 100%)",
          }}
        >
          everyday
        </span>{" "}
        <br />
        innovations that care.
      </h1>

      {/* ✅ 7 Images in curved layout (no shadow, no rounded) */}
      <div className="self-stretch h-80 relative mt-10">
        <img
          src={dal}
          alt="dal"
          className="w-64 h-64 left-[16px] top-[90px] absolute origin-top-left -rotate-[10deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={mak}
          alt="mak"
          className="w-64 h-64 left-[182px] top-[32px] absolute origin-top-left -rotate-[7deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={ram}
          alt="ram"
          className="w-64 h-64 left-[358px] top-[41px] absolute origin-top-left -rotate-[4deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={chik}
          alt="chik"
          className="w-64 h-64 left-[511px] top-[30px] absolute transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={nur}
          alt="nur"
          className="w-64 h-64 left-[662px] top-[18px] absolute origin-top-left rotate-[3deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={blo}
          alt="blo"
          className="w-64 h-64 left-[836px] top-[21px] absolute origin-top-left rotate-[7deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={chi}
          alt="chi"
          className="w-64 h-64 left-[1010px] top-[13px] absolute origin-top-left rotate-[11deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
      </div>

      {/* Description + Buttons */}
      <div className="max-w-3xl flex flex-col justify-start items-center gap-6 mt-6">
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
          From personal care to beverages and salons, our brands redefine how
          India lives, eats, and feels every day.
        </p>
        <div className="inline-flex gap-4">
          <button className="px-5 py-3 bg-gradient-to-br from-slate-800 to-blue-800 rounded-3xl text-white font-semibold shadow-md">
            Explore Our Brands
          </button>
          <button className="px-5 py-3 rounded-3xl border-2 border-slate-800 text-blue-800 font-semibold shadow-md">
            Our Impact Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
