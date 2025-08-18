import { MdEmail } from 'react-icons/md';
import Button from './Button';
import { RiMedalFill } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

function Input({ cn }) {
  return (
    <div className="flex flex-col w-full items-center gap-3">
      <div
        className={`w-[75%] border grid grid-cols-12 items-center justify-between p-1.5 rounded-4xl ${cn}`}
      >
        <div className="col-span-10 flex items-center gap-4 w-[full] h-full">
          <div className="bg-[#B4E2EB66] flex items-center justify-center rounded-full w-11 h-11">
            <MdEmail fill="#4FBDD2" size={30} />
          </div>
          <input
            className="text-[#282828] text-sm md:text-base font-bold bg-white w-[calc(100%-50px)] outline-none h-full"
            placeholder="h.mhammas@gmail.com"
            type="email"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <Button text={'Send'} cn={'underline !px-2 md:!px-4 md:text-base text-sm'} />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-x-10 gap-y-3 justify-center md:flex-row md:items-center">
        <p className="text-secondary text-xs md:text-sm lg:text-base flex items-center gap-1">
          <span>
            <FaStar fill="#4FBDD2" />
          </span>
          4.9/5 Average Ratings
        </p>
        <p className="text-secondary text-xs md:text-sm lg:text-base flex items-center gap-1">
          <span>
            <RiMedalFill fill="#4FBDD2" />
          </span>
          25+ Winning Awards
        </p>
        <p className="text-secondary text-xs md:text-sm lg:text-base flex items-center gap-1">
          <span>
            <MdVerifiedUser fill="#4FBDD2" />
          </span>
          Certified Product Designer
        </p>
      </div>
    </div>
  );
}

export default Input;
