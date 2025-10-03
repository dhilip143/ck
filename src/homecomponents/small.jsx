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
      <div className="w-full px-20 md:px-40 py-28 flex flex-col justify-start items-center gap-6">
        <h2 className="text-center text-slate-800 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          How One Small Sachet Sparked a Giant Revolution
        </h2>
        <p className="text-center text-gray-500 text-lg md:text-xl font-normal font-['Inter'] leading-loose max-w-3xl">
          A story of bold thinking, inclusive innovation, and how a drop of
          shampoo changed the Indian market forever.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
        <div ref={scrollRef} className="flex w-max h-full gap-20 px-10 md:px-20">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="w-[90vw] md:w-[518px] h-full flex-shrink-0 flex flex-col justify-center items-center gap-6"
            >
              {/* Year */}
              <div className="text-slate-800 text-6xl font-bold font-['Host_Grotesk']">
                {item.year}
              </div>

              {/* Image */}
              <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={chi}
                  alt={item.year}
                  className="w-full h-full object-cover rounded-tr-[80px]"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl flex flex-col gap-4 text-center">
                <div className="text-slate-800 text-2xl md:text-3xl font-semibold font-['Host_Grotesk'] leading-snug">
                  {item.title}
                </div>
                <div className="text-slate-800/60 text-xl md:text-2xl font-normal font-['Host_Grotesk'] leading-loose">
                  {item.quote}
                </div>
                <div className="text-slate-800 text-xl md:text-2xl font-semibold font-['Host_Grotesk'] leading-loose">
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
