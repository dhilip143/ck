import React from "react";

// ✅ Imported asset
import cav from "/src/assets/home/fourhome/cavins.png";

function Brands() {
  return (
    <div className="w-full px-6 md:px-20 xl:px-40 2xl:px-60 py-28 flex flex-col justify-center items-center">
      
      {/* Heading */}
     <h2 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] font-extrabold font-['Host_Grotesk'] leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1a3038] to-[#003da6]">
  Our Brands
</h2>


      {/* ✅ Only Cavins image full width */}
      <div className="relative w-full flex justify-center items-center mt-12">
        <img
          className="w-full h-[400px] sm:h-[500px] md:h-[577px] lg:h-[650px] xl:h-[750px] 2xl:h-[900px] object-contain"
          src={cav}
          alt="Cavins"
        />
      </div>

      {/* Description + Button */}
      <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-8 mt-16">
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium font-['Host_Grotesk'] leading-relaxed">
          From haircare to snacks, salon care to pet hygiene — our brands are
          built to enrich lives with trust, quality, and innovation.
        </p>
        <div className="inline-flex justify-center items-center gap-4">
          <button className="px-5 py-3 md:px-6 md:py-4 bg-gradient-to-br from-slate-800 to-blue-800 rounded-3xl text-white font-semibold shadow-md text-lg md:text-xl lg:text-2xl">
            Explore Our Brands
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brands;
