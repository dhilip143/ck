import React from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { FaStar } from 'react-icons/fa';

// This is a small helper component to avoid repeating code for each card.
const StatCard = ({ stat }) => (
  <div
    // The base styles for each card
    className={`relative rounded-2xl p-6 flex flex-col overflow-hidden ${stat.className}`}
  >
    {/* Decorative background elements */}
    {stat.children}

    {/* This div keeps the main content on top of the background decorations */}
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div className={stat.valueClassName}>{stat.value}</div>
        <div className={stat.textClassName}>
          {stat.textLines.map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
        </div>
      </div>
      {stat.footer && <div className="mt-4">{stat.footer}</div>}
    </div>
  </div>
);

function Years() {
  // The data for the cards. I have updated the classNames to include your
  // specific height requirements and removed the old grid classes.
  const statsData = [
    {
      id: 1,
      value: '91%',
      textLines: ['Consumer', 'Satisfaction', 'Score'],
      footer: (
        <div className="flex justify-start items-center gap-2">
          {[...Array(4)].map((_, i) => <FaStar key={i} className="text-blue-500" size={24} />)}
          <FaStar className="text-gray-300" size={24} />
        </div>
      ),
      className: 'bg-slate-50 justify-between text-left h-[437px]',
      valueClassName: "text-slate-800 text-7xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-3xl font-extrabold font-['Host_Grotesk'] leading-tight",
    },
    {
      id: 2,
      value: '25+',
      textLines: ['Exports to Over', 'Countries'],
      className: 'bg-slate-50 justify-center text-left h-[286px] w-full',
      valueClassName: "text-slate-800 text-7xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-3xl font-extrabold font-['Host_Grotesk'] leading-tight",
    },
    {
      id: 3,
      value: '16+',
      textLines: ['Patents Filed'],
      className: 'bg-slate-50 justify-center items-center text-center h-[286px] w-full',
      valueClassName: "text-slate-800 text-7xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-3xl font-extrabold font-['Host_Grotesk'] leading-tight",
      children: (
        <div className="w-52 h-52 absolute -bottom-10 -right-10 opacity-20 scale-75">
          <div className="w-44 h-52 left-0 top-0 absolute bg-gradient-to-l from-slate-300 via-slate-200 to-blue-50" />
          <div className="w-24 h-1.5 left-[37.19px] top-[48.13px] absolute bg-white" />
          <div className="w-24 h-1.5 left-[37.19px] top-[64.82px] absolute bg-white" />
          <div className="w-24 h-1.5 left-[37.19px] top-[81.52px] absolute bg-white" />
        </div>
      ),
    },
    {
      id: 4,
      value: '44%',
      textLines: ['Sustainable', 'Packaging Rate'],
      className: 'bg-slate-50 justify-center text-left h-[437px]',
      valueClassName: "text-slate-800 text-7xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-3xl font-extrabold font-['Host_Grotesk'] leading-tight",
      children: (
        <div className="w-32 h-32 absolute top-0 right-0 opacity-80">
          <img src="https://i.imgur.com/gY9n53H.png" alt="Leaf Icon" className="w-full h-full" />
        </div>
      ),
    },
    {
      id: 5,
      value: '1.5M+',
      textLines: ['Retail', 'Touchpoints', 'Globally'],
      className: 'text-white items-end text-right justify-end h-[286px]',
      valueClassName: "text-6xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-4xl font-extrabold font-['Host_Grotesk'] leading-tight",
      children: (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-600/50 to-rose-900 rounded-2xl blur-lg" />
      ),
    },
    {
      id: 6,
      value: '30+',
      textLines: ['YEARS OF INNOVATION'],
      className: 'text-white justify-center items-center text-center bg-rose-900 h-[286px]',
      valueClassName: "text-9xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-3xl font-medium font-['Host_Grotesk']",
      children: (
        <>
          <div className="w-12 h-12 left-[10%] top-[80%] absolute bg-rose-300 rounded-3xl blur-[6px]" />
          <div className="w-6 h-6 left-[20%] top-[50%] absolute bg-rose-300 rounded-xl blur-[9.50px]" />
          <div className="w-6 h-6 left-[8%] top-[25%] absolute bg-rose-300 rounded-xl blur-sm" />
          <div className="w-8 h-8 right-[10%] top-[20%] absolute bg-rose-300 rounded-2xl blur-[6px]" />
          <div className="w-6 h-6 right-[5%] bottom-[10%] absolute bg-rose-300 rounded-xl blur-[6px]" />
        </>
      ),
    },
    {
      id: 7,
      value: '1.2M+',
      textLines: ['Lives impacted through CSR programs'],
      className: 'bg-slate-50 !flex-row items-center gap-4 text-left p-4 h-[135px]',
      valueClassName: "text-slate-800 text-5xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-2xl font-extrabold font-['Host_Grotesk'] leading-tight",
    },
    {
      id: 8,
      value: '62%',
      textLines: ['Of products made with herbal or natural ingredients'],
      className: 'bg-slate-50 !flex-row items-center gap-2 text-left p-4 h-[135px]',
      valueClassName: "text-slate-800 text-3xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-sm font-extrabold font-['Host_Grotesk'] leading-tight",
    },
    {
      id: 9,
      value: '19M+',
      textLines: ['CHIK Sachets/mo'],
      className: 'bg-slate-50 justify-center text-left h-[135px]',
      valueClassName: "text-slate-800 text-5xl font-extrabold font-['Host_Grotesk']",
      textClassName: "text-slate-800 text-2xl font-extrabold font-['Host_Grotesk'] leading-tight",
    },
  ];

  // This converts the array to an object for easier access, like statsMap[1]
  const statsMap = statsData.reduce((acc, stat) => {
    acc[stat.id] = stat;
    return acc;
  }, {});

  return (
    <section className="bg-white font-['Host_Grotesk'] w-full py-16 px-4 md:px-8">
      {/* Main container uses Flexbox. It stacks columns on mobile and puts them in a row on desktop. */}
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto">
        
        {/* === COLUMN 1 (Left) === */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <StatCard stat={statsMap[1]} />
          <StatCard stat={statsMap[5]} />
        </div>

        {/* === COLUMN 2 & 3 (Center) === */}
        <div className="flex flex-col gap-4 w-full md:w-2/4">
          <div className="flex flex-col sm:flex-row gap-4">
            <StatCard stat={statsMap[2]} />
            <StatCard stat={statsMap[3]} />
          </div>
          <StatCard stat={statsMap[6]} />
          <StatCard stat={statsMap[7]} />
        </div>

        {/* === COLUMN 4 (Right) === */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <StatCard stat={statsMap[4]} />
          <StatCard stat={statsMap[8]} />
          <StatCard stat={statsMap[9]} />
        </div>

      </div>
    </section>
  );
}

export default Years;