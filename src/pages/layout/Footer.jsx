function Footer() {
  return (
    <section className="relative py-5">
      <section className="mt-3 rounded-lg p-4 flex items-center bg-primary justify-between max-w-[1440px] mx-auto">
        {/* <div className="bg-primary rounded-lg w-full flex items-center justify-between px-5 py-2"> */}
        <div className="text-white">h.mhammas@gmail.com</div>
        <div className="flex gap-2.5">
          <div>
            <img className="w-10 md:w-12" src="/facebook 1.png" alt="" />
          </div>
          <div>
            <img className="w-10 md:w-12" src="/instagram 1.png" alt="" />
          </div>
          <div>
            <img className="w-10 md:w-12" src="/linkedin 1.png" alt="" />
          </div>
        </div>
        {/* </div> */}
      </section>
    </section>
  );
}

export default Footer;
