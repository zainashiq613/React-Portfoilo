import { useState } from 'react';
import Button from '../../components/Button';
import WebsiteDesigns from '../../components/projects/WebsiteDesigns';
import LandingPages from '../../components/projects/LandingPages';
import Dashboards from '../../components/projects/Dashboards';
import MobileApps from '../../components/projects/MobileApps';
import { projects } from '../../data';

function Project() {
  const [tab, setTab] = useState('Website designs');

  const filteredProjects = projects.filter((p) => p.projectType.includes(tab));

  return (
    <section className="pt-25 px-5">
      <section className="max-w-[1290px] mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold text-secondary w-full">
          Lets have a look at my <span className="text-primary">Projects</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4">
          {['Website designs', 'Landing Pages', 'Dashboard Design', 'Mobile App'].map((item) => (
            <div key={item}>
              <Button
                cn={`w-full border truncate border-secondary-text justify-center text-xs lg:text-base md:text-[11px] bg-transparent !text-secondary-text ${
                  item === tab ? '!bg-primary !border-primary !text-white' : ''
                }`}
                text={item}
                onClick={() => {
                  setTab(item);
                }}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="w-full">
            {tab === 'Website designs' && <WebsiteDesigns data={filteredProjects} />}
          </div>
          <div className="w-full">
            {tab === 'Landing Pages' && <LandingPages data={filteredProjects} />}
          </div>
          <div className="w-full">
            {tab === 'Dashboard Design' && <Dashboards data={filteredProjects} />}
          </div>
          <div className="w-full">
            {tab === 'Mobile App' && <MobileApps data={filteredProjects} />}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Project;
