import { useNavigate } from 'react-router';
import Button from '../Button';

function Dashboards({ data }) {
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
            <h2 className="text-3xl md:text-4xl font-bold">{item.title}</h2>
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
              <Button
                onClick={() => navigation(`/project/${item.id}`)}
                cn={'text-sm md:text-base !px-5'}
                text={'View Case Study'}
              />
              <Button cn={'text-sm md:text-base !px-5'} text={'View Live'} />
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

export default Dashboards;
