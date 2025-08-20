import { useNavigate } from 'react-router';
import Button from '../Button';
import { CgArrowTopRight } from 'react-icons/cg';

function LandingPages({ data }) {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      {data.map((item) => (
        <div
          style={{ borderColor: item.color }}
          key={item.id}
          className="rounded-2xl border p-5 flex flex-col-reverse lg:grid grid-cols-2 items-center gap-4"
        >
          <div className="col-span-1 flex flex-col gap-5">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-bold">{item.title}</h2>
            <p className="text-secondary-text text-sm md:text-base">{item.desc}</p>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg md:text-xl font-medium">Key Features:</h3>
              <ul className="pl-5">
                {item.features.map((item) => (
                  <li className="text-secondary-text text-sm list-disc md:text-base" key={item.id}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <button
                style={{ background: item.color }}
                onClick={() => navigation(`/project/${item.id}`)}
                className="flex px-5 items-center text-sm md:text-base gap-2 bg-primary text-white rounded-3xl  py-2"
              >
                View Case Study {<CgArrowTopRight size={20} />}
              </button>
              <button
                style={{
                  color: item.color,
                  border: `1px solid ${item.color}`,
                }}
                onClick={() => navigation(`/project/${item.id}`)}
                className="flex px-5 items-center text-sm md:text-base gap-2 bg-transparent text-primary rounded-3xl border border-primary py-2"
              >
                View Live
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <img src={item.src} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingPages;
