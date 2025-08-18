import React from 'react';
import { PiStarFourFill } from 'react-icons/pi';

const items = ['UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'];

function ScrollText() {
  return (
    <div className="z-3 bg-primary py-5 md:py-7.5">
      <div className="bg-white py-1">
        <marquee behavior="" scrollamount="70" direction="">
          <div className="flex items-center gap-3.5">
            {items.map((item, idx) => (
              <div className="flex items-center gap-3.5 text-2xl text-dark-text" key={idx}>
                {item}
                <PiStarFourFill fill="#4FBDD2" />
              </div>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default ScrollText;
