import React from 'react';
import { PiStarFourFill } from 'react-icons/pi';

const items = ['UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'];

function ScrollText() {
  return (
    <div className="z-3 bg-primary py-3 md:py-5.5 lg:py-7.5">
      <div className="bg-white flex items-center py-1">
        <marquee behavior="" scrollamount="15" direction="">
          <div className="flex items-center justify-center gap-3.5">
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
