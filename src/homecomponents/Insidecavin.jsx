import lay from "/src/assets/home/secondhome/ck bg layout.png";
import uni from "/src/assets/home/secondhome/Union.png";
import aks from "/src/assets/home/secondhome/akshay.png";
import grn from "/src/assets/home/secondhome/green.png";
import lam from "/src/assets/home/secondhome/lamp.png";

function Insidecavin() {
  return (
    <>
      <div
        className="w-full px-80 py-28 inline-flex flex-col justify-start items-center gap-12 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${lay})` }}
      >
        {/* Heading */}
        <div className="flex flex-col justify-start items-center gap-1">
          <div className="text-center justify-start text-slate-800 text-8xl font-extrabold font-['Host_Grotesk'] leading-[116px]">
            Inside CavinKare
          </div>
          <div className="text-center justify-start text-gray-500 text-2xl font-medium font-['Host_Grotesk'] leading-loose">
            Stay updated with our latest news, innovations, and stories that
            shape our journey
          </div>
        </div>

        {/* Cards */}
        <div className="w-[1248px] inline-flex justify-start items-center gap-6 overflow-hidden">
          {/* Left Big Block */}
          <div className="w-[681px] h-[660px] relative overflow-hidden rounded-2xl">
            {/* ✅ Union PNG Background */}
            <img
              src={uni}
              alt="Union background"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="w-96 left-[24px] top-[558px] absolute inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-white text-xl font-semibold font-['Host_Grotesk'] leading-normal">
                CavinKare Ability Awards
              </div>
              <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['Host_Grotesk'] leading-normal">
                Engaging in initiatives that would make world a better place to
                live in.
              </div>
            </div>

            {/* ✅ Lamp PNG Background for bottom card */}
            <div className="left-[427px] top-[354px] absolute w-64 h-80 rounded-2xl overflow-hidden">
              <img
                src={lam}
                alt="Lamp background"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute left-[24px] top-[180px] flex flex-col justify-start items-start gap-1.5 p-2">
                <div className="self-stretch justify-start text-white text-xl font-semibold font-['Host_Grotesk'] leading-normal">
                  Where work is fun & fun is work!
                </div>
                <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['Host_Grotesk'] leading-normal">
                  Here's the place where you can enjoy freedom
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-6">
            {/* ✅ GreenTrends with grn PNG */}
            <div className="self-stretch flex-1 relative rounded-2xl overflow-hidden">
              <img
                src={grn}
                alt="GreenTrends"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 p-6 bg-gradient-to-b from-black/0 to-black flex flex-col justify-end items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['Host_Grotesk'] leading-normal">
                    Franchisee - GreenTrends Unisex Hair & Style Salon
                  </div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['Host_Grotesk'] leading-normal">
                    Trends Division of CavinKare came into being in July 2002
                    with a clear-cut focus on providing styling and beauty
                    solutions.
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Indica with akshay PNG */}
            <div className="self-stretch flex-1 relative rounded-2xl overflow-hidden">
              <img
                src={aks}
                alt="Akshay Indica"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 p-6 bg-gradient-to-b from-black/0 to-black flex flex-col justify-end items-start gap-2.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['Host_Grotesk'] leading-normal">
                    Hair colour brand Indica ropes in Akshay Kumar and Ileana
                    D'Cruz as brand ambassadors
                  </div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['Host_Grotesk'] leading-normal">
                    Indica has been growing rapidly over the years and is in the
                    verge of accelerating its growth further.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Insidecavin;
