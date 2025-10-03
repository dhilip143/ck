import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chi from "/src/assets/home/fivehome/chii.png";

gsap.registerPlugin(ScrollTrigger);

function Small() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;

    let ctx = gsap.context(() => {
      const totalWidth = scrollContainer.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(scrollContainer, {
        x: -(totalWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`, // scroll distance
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const timelineData = [
    {
      year: "1983",
      title: "CavinKare launches India’s first affordable shampoo sachet.",
      quote: "“Why should affordability stop someone from self-care?”",
      price: "10 paise. No bottle. No barrier.",
    },
    {
      year: "1990s",
      title: "Sachet culture spreads across India.",
      quote: "A revolution in affordability begins.",
      price: "Accessible self-care for all.",
    },
    {
      year: "2000s",
      title: "Sachets dominate FMCG packaging.",
      quote: "From shampoo to coffee – everything in sachets.",
      price: "A new way of consumption.",
    },
    {
      year: "2010s",
      title: "From rural markets to cities.",
      quote: "Inclusivity drives innovation.",
      price: "Affordable convenience everywhere.",
    },
    {
      year: "2020s",
      title: "Global recognition for sachet innovation.",
      quote: "Small packs, big impact.",
      price: "A model studied worldwide.",
    },
    {
      year: "Today",
      title: "Sachet – a symbol of accessibility.",
      quote: "One drop changed the market forever.",
      price: "Still inspiring innovation.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Heading */}
      <div className="w-full px-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-20 md:py-28 flex flex-col justify-start items-center gap-6">
  {/* Gradient Heading */}
  <h2 className="text-center text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[100px] font-extrabold leading-tight font-['Inter'] 
                 bg-gradient-to-r from-[#1a3038] via-[#1a3038] to-[#003da6] bg-clip-text text-transparent">
    How One Small Sachet Sparked a Giant Revolution
  </h2>

  {/* Normal paragraph */}
  <p className="text-center text-gray-500 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal font-['Inter'] leading-relaxed max-w-3xl">
    A story of bold thinking, inclusive innovation, and how a drop of
    shampoo changed the Indian market forever.
  </p>
</div>


      {/* Horizontal Scroll Section */}
      <div ref={sectionRef} className="relative w-full h-[85vh] md:h-screen overflow-hidden">
        <div ref={scrollRef} className="flex w-max h-full gap-6 md:gap-10 lg:gap-16 xl:gap-20 px-4 md:px-10 lg:px-20">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="w-[90vw] md:w-[480px] lg:w-[518px] xl:w-[550px] 2xl:w-[650px] h-full flex-shrink-0 flex flex-col justify-center items-center gap-4 md:gap-6"
            >
              {/* Year */}
              <div className="text-slate-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-['Host_Grotesk']">
                {item.year}
              </div>

              {/* Image */}
              <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={chi}
                  alt={item.year}
                  className="w-full h-full object-cover rounded-tr-[60px] md:rounded-tr-[80px]"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl flex flex-col gap-2 md:gap-4 text-center">
                <div className="text-slate-800 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold font-['Host_Grotesk'] leading-snug">
                  {item.title}
                </div>
                <div className="text-slate-800/60 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal font-['Host_Grotesk'] leading-relaxed">
                  {item.quote}
                </div>
                <div className="text-slate-800 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-['Host_Grotesk'] leading-relaxed">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer so next section doesn't overlap */}
      <div className="h-[200px] w-full"></div>
    </div>
  );
}

export default Small;
