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
    <div className="w-full px-6 md:px-20 2xl:px-40 py-20 relative bg-transparent flex flex-col justify-center items-center gap-10 font-['Host_Grotesk']">

      {/* Heading */}
      <h1 className="text-center text-slate-800 text-[60px] md:text-[92px] 2xl:text-[120px] font-extrabold leading-tight">
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

      {/* 7 Images in curved layout with gradient background */}
      <div
        className="self-stretch h-[350px] md:h-[450px] 2xl:h-[550px] relative mt-8"
        style={{
          background: `linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 30%, #FFFFFF 70%, #FFFFFF 100%)`,
        }}
      >
        <img
          src={dal}
          alt="dal"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[20px] md:left-[16px] 2xl:left-[60px] top-[80px] md:top-[60px] 2xl:top-[100px] absolute origin-top-left -rotate-[10deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={mak}
          alt="mak"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[120px] md:left-[162px] 2xl:left-[300px] top-[50px] md:top-[40px] 2xl:top-[70px] absolute origin-top-left -rotate-[7deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={ram}
          alt="ram"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[240px] md:left-[358px] 2xl:left-[600px] top-[60px] md:top-[35px] 2xl:top-[80px] absolute origin-top-left -rotate-[4deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={chik}
          alt="chik"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[360px] md:left-[511px] 2xl:left-[900px] top-[45px] md:top-[25px] 2xl:top-[70px] absolute transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={nur}
          alt="nur"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[480px] md:left-[662px] 2xl:left-[1200px] top-[30px] md:top-[15px] 2xl:top-[50px] absolute origin-top-left rotate-[3deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={blo}
          alt="blo"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[620px] md:left-[836px] 2xl:left-[1500px] top-[35px] md:top-[18px] 2xl:top-[60px] absolute origin-top-left rotate-[7deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
        <img
          src={chi}
          alt="chi"
          className="w-56 md:w-80 2xl:w-[450px] h-56 md:h-80 2xl:h-[450px] left-[740px] md:left-[1010px] 2xl:left-[1800px] top-[25px] md:top-[10px] 2xl:top-[50px] absolute origin-top-left rotate-[11deg] transition-transform duration-300 hover:scale-110 hover:z-10"
        />
      </div>

      {/* Description + Buttons (unchanged) */}
      <div className="max-w-3xl flex flex-col justify-start items-center gap-4 mt-4">
        <p className="text-center text-gray-500 text-[24px] md:text-[24px] 2xl:text-[32px] font-medium leading-relaxed">
          From personal care to beverages and salons, our brands redefine how
          India lives, eats, and feels every day.
        </p>
        <div className="inline-flex gap-4">
          <button className="px-6 py-4 md:px-6 md:py-4 2xl:px-8 2xl:py-5 bg-gradient-to-br from-slate-800 to-blue-800 rounded-3xl text-white font-semibold shadow-md">
            Explore Our Brands
          </button>
          <button className="px-6 py-4 md:px-6 md:py-4 2xl:px-8 2xl:py-5 rounded-3xl border-2 border-slate-800 text-blue-800 font-semibold shadow-md">
            Our Impact Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
