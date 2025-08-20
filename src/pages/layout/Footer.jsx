function Footer() {
  return (
    <section className="relative py-5">
      <section className="mt-3 rounded-lg p-4 flex items-center border border-[#EEEEEE] bg-white justify-between max-w-[1440px] mx-auto">
        <div className="bg-primary rounded-lg w-full flex flex-col sm:flex-row gap-5 sm:items-center justify-between px-5 py-2">
          <div className="text-white text-sm">h.mhammas@gmail.com</div>
          <div className="flex justify-end gap-2.5">
            <div>
              <img src="/facebook 1.png" alt="" />
            </div>
            <div>
              <img src="/instagram 1.png" alt="" />
            </div>
            <div>
              <img src="/linkedin 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
