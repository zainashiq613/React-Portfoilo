function Footer() {
  return (
    <section className="relative py-5">
      <section className="mt-3 rounded-lg p-4 flex items-center bg-primary justify-between max-w-[1440px] mx-auto">
        {/* <div className="bg-primary rounded-lg w-full flex items-center justify-between px-5 py-2"> */}
        <div className="text-white">h.mhammas@gmail.com</div>
        <div className="flex gap-4">
          <a className="transition-all duration-500 transform hover:scale-130" href="#">
            <img className="w-8 md:w-12" src="/facebook 1.png" alt="" />
          </a>
          <a className="transition-all duration-500 transform hover:scale-130" href="#">
            <img className="w-8 md:w-12" src="/instagram 1.png" alt="" />
          </a>
          <a
            className="transition-all duration-500 transform hover:scale-130"
            href="https://www.linkedin.com/in/hammas-munir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <img className="w-8 md:w-12" src="/linkedin 1.png" alt="" />
          </a>
        </div>
        {/* </div> */}
      </section>
    </section>
  );
}

export default Footer;
