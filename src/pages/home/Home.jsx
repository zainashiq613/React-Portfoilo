import { FaStar } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { PiStarFourFill } from 'react-icons/pi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdDownloadForOffline } from 'react-icons/md';
import ScrollText from '../../components/home/ScrollText';
import AboutCards from '../../components/home/AboutCards';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const items = ['UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'];

function Home() {
  const [hover, setHover] = useState(false);
  const navigation = useNavigate();
  return (
    <section className="pt-20 flex flex-col gap-10 md:gap-20 items-center overflow-hidden">
      <div className="relative w-full flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-[1310px] flex flex-col gap-5 md:gap-17.5">
          <div className="mt-5 w-full flex flex-col gap-2 items-center justify-center">
            <span className="relative text-center flex items-center justify-end border border-dark-text px-4.5 py-1 rounded-2xl">
              Hello!
              <div className="absolute bottom-6 -right-6">
                <img className="w-7 h-7" src="/Vector 1 (1).png" alt="" />
              </div>
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-center">
              I’m <span className="text-primary">Hammas</span>,<br />
              Product Designer
            </h1>
          </div>
          <div className="px-5 md:px-10 flex flex-col md:flex-row gap-7 md:items-center justify-between">
            <div className="w-full md:max-w-[420px]">
              <p className="text-base text-center md:text-xl font-medium text-[#344054]">
                I’m <span className="text-primary">Hammas</span> , A product designer from Pakistan,
                My interests include Web flow, Product Designer, Bubble.io, Graphic Design,
                Designing Start-ups, Cricket, and Music.
              </p>
            </div>
            <div className="flex flex-col items-end w-full md:w-fit gap-2">
              <div className="flex items-center gap-1 justify-end">
                <FaStar fill="#4FBDD2" size={20} />
                <FaStar fill="#4FBDD2" size={20} />
                <FaStar fill="#4FBDD2" size={20} />
                <FaStar fill="#4FBDD2" size={20} />
                <FaStar fill="#4FBDD2" size={20} />
              </div>
              <div className="text-right flex flex-col">
                <p className="text-2xl md:text-3xl font-bold text-dark-text">5+ Years</p>
                <span className="text-sm md:text-base text-secondary">Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:flex items-center justify-center bottom-10 lg:bottom-18">
          <div className="bg-[#6AC7D980] relative lg:left-10 xl:left-0 flex items-center justify-center rounded-t-full w-[380px] md:w-[690px] lg:w-[710px] h-50 md:h-83 lg:h-90">
            <img
              src="/IMG_0825 1.png"
              className="relative h-80 md:h-108 lg:h-127 bottom-10 md:bottom-12 lg:bottom-25"
              alt=""
            />
            <div className="absolute bottom-10 md:bottom-15 backdrop-blur-[5px] flex gap-2 border rounded-3xl p-1">
              <div>
                <button
                  onClick={() => {
                    navigation('/project');
                    window.scroll(0, 0);
                  }}
                  className={`transition-all duration-500 flex items-center gap-2.5 py-2 rounded-3xl text-white text-sm md:text-base ${
                    hover ? 'px-2' : 'bg-primary !px-6'
                  }`}
                >
                  Portfolio {!hover && <GoArrowUpRight size={20} />}
                </button>
              </div>
              <div>
                <button
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigation('/contact')}
                  className={`flex px-3 items-center gap-2.5 text-sm py-2 rounded-3xl text-white md:text-base hover:!px-6 bg-transparent transition-all duration-500 hover:bg-primary`}
                >
                  Hire Me {hover && <GoArrowUpRight size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="z-1 mt-45 md:mt-95 lg:mt-80 xl:mt-75 w-full">
          <ScrollText />
        </div>
      </div>
      <div className="w-full">
        <AboutCards />
      </div>
    </section>
  );
}

export default Home;
