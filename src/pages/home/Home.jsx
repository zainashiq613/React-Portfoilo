import { FaStar } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import { PiStarFourFill } from 'react-icons/pi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { MdDownloadForOffline } from 'react-icons/md';

function Home() {
  return (
    <section>
      <section className="max-w-[1440px] px-[150px] flex flex-col items-center justify-center mx-auto">
        <div className="mt-5 w-full flex flex-col gap-3 items-center justify-center">
          <span className="text-center border border-dark-text px-4.5 text-dark-text py-1 rounded-2xl">
            Hello!
          </span>
          <h1 className="text-6xl text-center">
            I’m <span className="text-primary">Hammas</span>,<br />
            Product Designer
          </h1>
        </div>
        <div className="mt-15 flex justify-between h-[42.5vh] w-full">
          <div>
            <p className="text-lg text-secondary w-[400px]">
              I’m <span className="text-primary">Hammas</span> , A product designer from Pakistan,
              My interests include Web flow, Product Designer, Bubble.io, Graphic Design, Designing
              Start-ups, Cricket, and Music.
            </p>
          </div>
          <div className="bg-[#6AC7D980] rounded-t-full w-[35%] h-[260px] bottom-[11.4%] left-[33%] flex items-center justify-center absolute">
            <img src="/IMG_0825 1.png" className="relative bottom-[24%] w-[351px]" alt="" />
            <div className="absolute backdrop-blur-[5px] flex border rounded-3xl p-1">
              <div>
                <Button text={'Portfolio'} position={'right'} icon={<GoArrowUpRight size={25} />} />
              </div>
              <div>
                <Button text={'Hire Me'} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1 justify-end">
              <FaStar fill="#4FBDD2" size={24} />
              <FaStar fill="#4FBDD2" size={24} />
              <FaStar fill="#4FBDD2" size={24} />
              <FaStar fill="#4FBDD2" size={24} />
              <FaStar fill="#4FBDD2" size={24} />
            </div>
            <p className="text-5xl font-bold text-dark-text">5+ Years</p>
            <span className="text-dark-text text-xl">Experience</span>
          </div>
        </div>
      </section>
      <div className="bg-primary py-3.5">
        <div className="bg-white py-1">
          <marquee behavior="smooth" direction="">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h1 className="text-black text-3xl">UX Design</h1>
                <PiStarFourFill fill="#4FBDD2" />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-black text-3xl">App Design</h1>
                <PiStarFourFill fill="#4FBDD2" />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-black text-3xl">Dashboard</h1>
                <PiStarFourFill fill="#4FBDD2" />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-black text-3xl">Wireframe</h1>
                <PiStarFourFill fill="#4FBDD2" />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-black text-3xl">User Research</h1>
                <PiStarFourFill fill="#4FBDD2" />
              </div>
            </div>
          </marquee>
        </div>
      </div>
      <section className="max-w-[1440px] px-[150px] py-10">
        <div className="grid grid-cols-12 gap-x-3 gap-y-9 w-full">
          <div className="col-span-3 group w-full h-83 [perspective:1000px]">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white shadow flex items-center justify-center [backface-visibility:hidden] rounded-lg border">
                <img src="/linkedin.png" alt="" />
              </div>
              <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg border">
                <div className="flex w-full items-center justify-between">
                  <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
                    <img
                      className="w-full rounded-full h-full object-cover"
                      src="/IMG_0825 1.png"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center w-[50px] h-[50px]">
                    <img
                      className="w-full h-full object-cover"
                      src="/pngwing.com (3) 1.png"
                      alt=""
                    />
                  </div>
                </div>
                <p>Hammas Munir</p>
                <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
                  <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
                  <p>Front-End Developer</p> |<p>WordPress Expert</p>
                </div>
                <p className="text-xs text-[#454545]">
                  I lead teams to create impactful, user-focused digital products using UI/UX
                  design, front-end development, and WordPress. #ui/ux #front-end #wordpress #
                  <span className="text-[#337BFF]">certificate!</span>
                </p>
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <GoArrowUpRight size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 group w-full h-83 [perspective:1000px]">
            <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white shadow flex items-center justify-center [backface-visibility:hidden] rounded-lg border">
                <div className="w-[90%]">
                  <img src="/behance.png" alt="" />
                </div>
              </div>
              <div className="p-4 absolute w-full h-full bg-white flex flex-col gap-1.5 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg border">
                <div className="flex w-full items-center justify-between">
                  <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] bg-primary">
                    <img
                      className="w-full rounded-full h-full object-cover"
                      src="IMG_0825 1.png"
                      alt=""
                    />
                  </div>
                  <div className="flex items-center justify-center w-[50px] h-[50px]">
                    <img className="w-full h-full object-cover" src="/Mask group.png" alt="" />
                  </div>
                </div>
                <p>Hammas Munir</p>
                <div className="flex gap-1 items-center text-xs text-[#A4A4A4] flex-wrap">
                  <p>Director</p> |<p>Product Designer</p> | <p>UI/UX</p>
                </div>
                <div className="w-full h-[120px]">
                  <img className="w-full h-full object-cover" src="/image 24979.png" alt="" />
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <GoArrowUpRight size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group transition duration-300 ease-in-out col-span-6 border shadow rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-3xl font-bold">My Story</h1>
              <div className="inline-block text-4xl">
                <span className="group-hover:hidden transition duration-300 hover:scale-105 cursor-pointer">
                  👀
                </span>
                <span className="hidden group-hover:inline transition duration-300">😊</span>
              </div>
            </div>
            <p className="text-[#555555E5] text-md">
              I hold a Bachelor's degree in design and bring over 5 years of experience in creating
              impactful digital products. My journey began in graphic design, but my passion for
              solving user problems led me into product and user experience design.
            </p>
            <p className="text-[#555555E5] text-md">
              Throughout my career, I’ve worked with multiple software houses and start-ups,
              collaborating with cross-functional teams and mentors. I've successfully delivered 50+
              projects, helping businesses turn ideas into user-friendly, functional solutions.
            </p>
          </div>
          <div className="col-span-9 flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              Have an Awsome Project <br /> Idea?{' '}
              <span className="text-primary">Let’s Discuss</span>
            </h1>
            <Input cn={'w-full'} />
          </div>
          <div class="col-span-3 relative bg-white border shadow rounded-2xl overflow-hidden group">
            <div class="pt-6 flex gap-6 flex-col items-center">
              <h1 className="text-3xl text-center font-bold">CV/Resume</h1>
              <div className="w-[200px]">
                <img className="w-full h-full" src="/173784 1.png" alt="" />
              </div>
            </div>
            <div
              class="absolute inset-0 bg-white flex flex-col gap-3 items-center text-lg font-semibold 
              opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-100 ease-in-out rounded-2xl py-5"
            >
              <p className="text-dark-text text-2xl">Hammas’s Resume</p>
              <p className="text-xl text-secondary-text">Product Design</p>
              <span>
                <MdDownloadForOffline fill="#4FBDD2" size={65} />
              </span>
              <span className="text-xl text-[#0077FF] underline cursor-pointer font-medium">
                View
              </span>
            </div>
          </div>
          {/* <div className="col-span-3 flex gap-6 flex-col items-center bg-white pt-6 border shadow rounded-2xl">
            <h1 className="text-3xl text-center font-bold">CV/Resume</h1>
            <div className="w-[200px]">
              <img className="w-full h-full" src="/173784 1.png" alt="" />
            </div>
          </div> */}
          <div className="col-span-5">
            <img className="w-full h-full" src="/pic.png" alt="" />
          </div>
          <div className="col-span-7 p-9 flex flex-col gap-5">
            <h3 className="text-5xl font-semibold">
              Why <span className="text-primary">Hire me</span> ?
            </h3>
            <p className="text-[#555555E5] text-md">
              With over 5 years of experience in UI/UX and product design, I bring creative thinking
              and strategic execution to every project. I focus on building user-centric,
              aesthetically pleasing, and high-performing designs that help businesses grow and
              stand out.
            </p>
            <div className="flex gap-3">
              <div>
                <p className="text-3xl font-bold">250+</p>
                <span className="text-secondary text-md">Project Completed</span>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <span className="text-secondary text-md">Satisfied Clients</span>
              </div>
            </div>
            <div>
              <Button text={'Hire Now'} position={'right'} icon={<GoArrowUpRight size={25} />} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
