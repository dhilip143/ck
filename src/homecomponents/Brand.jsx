import React from "react";

// ✅ Imported asset
import cav from "/src/assets/home/fourhome/cavins.png";

function Brands() {
  return (
    <div className="w-full px-6 md:px-20 py-28 flex flex-col justify-center items-center">
      
      {/* Heading */}
      <h2 className="text-center text-slate-800 text-4xl md:text-6xl lg:text-7xl font-extrabold font-['Host_Grotesk'] leading-tight">
        Our Brands
      </h2>

      {/* ✅ Only Cavins image full width */}
      <div className="relative w-full flex justify-center items-center mt-12">
        <img
          className="w-full h-[577px] object-contain  "
          src={cav}
          alt="Cavins"
        />
      </div>

      {/* Description + Button */}
      <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-8 mt-16">
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl font-medium font-['Host_Grotesk'] leading-relaxed">
          From haircare to snacks, salon care to pet hygiene — our brands are
          built to enrich lives with trust, quality, and innovation.
        </p>
        <div className="inline-flex justify-center items-center gap-4">
          <button className="px-5 py-3 bg-gradient-to-br from-slate-800 to-blue-800 rounded-3xl text-white font-semibold shadow-md">
            Explore Our Brands
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brands;
