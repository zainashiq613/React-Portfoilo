function Footer() {
  return (
    <section className="px-[30px] pb-5">
      <section class="mt-3 rounded-lg p-4 flex items-center border border-[#EEEEEE] bg-white justify-between max-w-[1440px] mx-auto">
        <div className="bg-primary rounded-lg w-full flex items-center justify-between px-5 py-2">
          <div className="text-white">h.mhammas@gmail.com</div>
          <div className="flex gap-2.5">
            <div>
              <img src="/src/assets/facebook 1.png" alt="" />
            </div>
            <div>
              <img src="/src/assets/instagram 1.png" alt="" />
            </div>
            <div>
              <img src="/src/assets/linkedin 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Footer;
