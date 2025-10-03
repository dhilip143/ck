import cha from "/src/assets/home/chair.png"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const jobsData = [
  {
    isPrimary: true,
    title: 'R&D Executive – Personal Care',
    description: 'Join our innovation team to develop future-ready products across haircare and skincare. Work with advanced labs and formulation systems.',
    location: 'Chennai',
    type: 'Full-Time',
  },
  {
    isPrimary: false,
    title: 'HR Business Partner – Corporate',
    description: 'Support teams with people-first HR strategies, talent development, and employee engagement. Help shape our growing workplace culture.',
    location: 'Chennai',
    type: 'Full-Time',
  },
  {
    isPrimary: false,
    title: 'Marketing Manager – Sustainable Products',
    description: 'Lead marketing strategies for our eco-friendly product lines. Collaborate with cross-functional teams to promote sustainability initiatives.',
    location: 'Mumbai',
    type: 'Full-Time',
  },
  {
    isPrimary: false,
    title: 'Sales Representative – Health & Wellness',
    description: 'Drive sales and build relationships with retailers in the health and wellness sector. Provide product knowledge and support to partners.',
    location: 'Bangalore',
    type: 'Remote',
  },
  {
    isPrimary: false,
    title: 'Digital Content Creator – Cosmetics',
    description: 'Produce engaging content for digital platforms to promote our cosmetics range. Collaborate with designers and marketers to enhance brand visibility.',
    location: 'Delhi',
    type: 'Contract',
  },
];

const JobCard = ({ job }) => {
  const cardClasses = job.isPrimary
    ? "bg-gradient-to-br from-slate-800 to-blue-800 text-white outline-white"
    : "bg-gradient-to-r from-white to-slate-100 text-slate-800 outline-blue-900";
  
  const buttonClasses = job.isPrimary
    ? "outline-white text-white"
    : "outline-blue-800 text-gray-500";
    
  const tagClasses = job.isPrimary
    ? "outline-white text-white"
    : "outline-blue-800 text-slate-800";

  return (
    <div className={`job-card flex-shrink-0 w-[736px] min-h-[480px] p-8 relative rounded-3xl shadow-2xl outline outline-8 outline-offset-[-8px] flex flex-col justify-between gap-4 ${cardClasses}`}>
      <div>
        <div className={`px-3 py-1 mb-4 rounded-3xl outline outline-2 outline-offset-[-2px] inline-flex ${tagClasses}`}>
          <div className="text-sm font-semibold leading-tight">New</div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-extrabold leading-tight">{job.title}</h3>
          <p className={`text-xl font-medium leading-loose ${job.isPrimary ? 'text-white/80' : 'text-gray-500'}`}>{job.description}</p>
          <p className={`text-xl font-medium leading-loose ${job.isPrimary ? 'text-white/80' : 'text-gray-500'}`}>{`Location: ${job.location} | Type: ${job.type}`}</p>
        </div>
      </div>
      <div className="self-end">
        <div className={`px-5 py-3 rounded-3xl outline outline-2 outline-offset-[-2px] inline-flex ${buttonClasses}`}>
          <div className="text-base font-semibold leading-normal">Apply Now</div>
        </div>
      </div>
    </div>
  );
};

function Grow() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".job-card");
      const totalWidth = containerRef.current.scrollWidth;
      const viewportWidth = containerRef.current.offsetWidth;

      gsap.to(cards, {
        x: () => -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    {/* -------- Section 1 (unchanged) -------- */}
    <section ref={sectionRef} className="bg-slate-200 w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Column */}
        <div className="w-full md:w-1/3 md:sticky md:top-28">
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-800 text-5xl lg:text-6xl font-extrabold leading-tight">Grow With a Company That Grows With You</h2>
            <p className="text-gray-500 text-xl lg:text-2xl font-medium leading-loose">Discover a culture where innovation is encouraged, ideas are heard, and careers are built for impact.</p>
            <div className="mt-4">
              <div className="px-5 py-3 bg-gradient-to-br from-slate-800 to-blue-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-white flex justify-center items-center gap-2.5 w-max cursor-pointer">
                <div className="text-white text-base font-semibold leading-normal">Explore Careers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div ref={containerRef} className="w-full md:w-2/3 relative flex overflow-hidden">
          <div className="flex gap-8">
            {jobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* -------- Section 2 (cards with image hover effect) -------- */}
    <div className="self-stretch flex flex-col justify-start items-start gap-12 py-16">
      <div className="self-stretch text-center text-slate-800 text-6xl font-extrabold leading-[88px]">
        Our People, Their Stories
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-6">
        
        {/* Card with only text */}
        <div className="flex-1 h-96 px-6 py-8 relative bg-slate-50 rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
          <div>
            <div className="text-slate-800 text-2xl font-extrabold leading-loose">Usha Guru</div>
            <div className="text-gray-500 text-base font-medium leading-normal">Director & Business Head</div>
          </div>
          <div className="text-gray-500 text-base font-medium leading-normal">
            CavinKare gave me more than a job — it gave me a stage to grow. I joined as a trainee and now lead a product team. The trust, mentorship, and innovation-first mindset here is unmatched.
          </div>
        </div>

        {/* Card with text */}
        <div className="flex-1 h-96 px-6 py-8 relative bg-slate-50 rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
          <div>
            <div className="text-slate-800 text-2xl font-extrabold leading-loose">Pranavesh</div>
            <div className="text-gray-500 text-base font-medium leading-normal">Data Analyst</div>
          </div>
          <div className="text-gray-500 text-base font-medium leading-normal">
            Joining CavinKare was a turning point in my career. I’ve been able to leverage data storytelling to drive decisions and contribute to impactful strategies that shape our company's future.
          </div>
        </div>

        {/* Card with IMAGE that animates */}
        <div className="flex-1 relative flex justify-start items-center group">
          <img 
            className="w-72 h-96 left-0 top-0 absolute rounded-3xl transform transition duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2" 
            src="https://placehold.co/302x380" 
            alt="profile" 
          />
          <div className="flex-1 h-96 px-6 py-8 relative bg-slate-50 rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden transform transition duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
            <div>
              <div className="text-slate-800 text-2xl font-extrabold leading-loose">Anup Nandan HM</div>
              <div className="text-gray-500 text-base font-medium leading-normal">Senior UX Designer</div>
            </div>
            <div className="text-gray-500 text-base font-medium leading-normal">
              At CavinKare, I’ve transformed user experiences by leading design sprints and collaborating closely with developers. The focus on user-centric design has allowed me to push creative boundaries.
            </div>
          </div>
        </div>

        {/* Card with text */}
        <div className="flex-1 h-96 px-6 py-8 relative bg-slate-50 rounded-3xl inline-flex flex-col justify-between items-start overflow-hidden transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl">
          <div>
            <div className="text-slate-800 text-2xl font-extrabold leading-loose">Leila Khan</div>
            <div className="text-gray-500 text-base font-medium leading-normal">Marketing Manager</div>
          </div>
          <div className="text-gray-500 text-base font-medium leading-normal">
            In my role at CavinKare, I orchestrate campaigns that resonate with audiences. The culture of creativity and support here has empowered me to innovate and exceed our marketing goals.
          </div>
        </div>

      </div>
    </div> 

    </>
  );
}

export default Grow;
