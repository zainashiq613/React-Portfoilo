import React from 'react';

function ProjectCard() {
  return (
    <>
      {projects.map((item) => (
        <div
          style={{ borderColor: item.color }}
          key={item.id}
          className="rounded-2xl border p-5 grid grid-cols-12 items-center gap-4"
        >
          <div className="col-span-7 flex flex-col gap-5">
            <h2 className="text-4xl font-bold">{item.title}</h2>
            <p className="text-secondary-text text-base">{item.desc}</p>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-medium">Key Features:</h3>
              <ul className="pl-5">
                {item.features.map((item) => (
                  <li className="text-secondary-text text-base list-disc" key={item.id}>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Button text={'View Case Study'} />
              <Button text={'View Live'} />
            </div>
          </div>
          <div className="col-span-5">
            <img src={item.src} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
