import { MdEmail } from 'react-icons/md';
import Button from './Button';

function Input() {
  return (
    <div className="w-[70%] border grid grid-cols-12 items-center justify-between p-1.5 rounded-4xl">
      <div className="col-span-10 flex items-center gap-4 w-[full] h-full">
        <div className="bg-[#B4E2EB66] flex items-center justify-center rounded-full w-11 h-11">
          <MdEmail fill="#4FBDD2" size={30} />
        </div>
        <input
          className="text-[#282828] text-xl font-bold bg-white w-[calc(100%-50px)] outline-none h-full"
          placeholder="h.mhammas@gmail.com"
          type="email"
        />
      </div>
      <div className="col-span-2 flex justify-end">
        <Button />
      </div>
    </div>
  );
}

export default Input;
