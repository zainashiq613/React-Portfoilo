const experience = [
  {
    id: '1',
    src: '/tetra-in-tech.png',
    title: 'Director | Lead UI/UX Designer | Front-End Developer',
    location: 'Lahore, Pakistan',
    date: '(Jan 2022 – Present)',
    duration: '3 yrs 6 mos',
    typoOfJob: 'On-site',
    desc: 'Led the design and development of user-centered, responsive digital products. Specialized in UI/UX design, front-end development, and WordPress. Focused on blending aesthetics with functionality to drive business outcomes.',
    keyResponsibilities: [
      { id: '1', text: 'Designed intuitive and responsive interfaces for web platforms' },
      { id: '2', text: 'Led cross-functional teams and managed end-to-end design processes' },
      { id: '3', text: 'Developed and maintained scalable front-end systems' },
      { id: '4', text: 'Delivered WordPress-based solutions customized to client needs' },
      { id: '5', text: 'Ensured quality and usability through regular testing and iteration' },
    ],
  },
  {
    id: '2',
    src: '/upwork.png',
    title: 'UI/UX Designer & Front-End Developer (Freelance)',
    location: '',
    date: '(Jan 2018 – Present)',
    duration: '7 yrs 6 mos',
    typoOfJob: 'Remote',
    desc: 'Worked with international clients to deliver creative UI/UX solutions and web development services. Focused on mobile and web interface design while ensuring client satisfaction through transparent communication.',
    keyResponsibilities: [
      { id: '1', text: 'Collaborated with global clients for product design and development' },
      { id: '2', text: 'Designed mobile and web app interfaces with usability in mind' },
      { id: '3', text: 'Managed projects, timelines, and deliverables independently' },
      { id: '4', text: 'Delivered responsive front-end development and WordPress sites' },
      { id: '5', text: 'Maintained high design standards and clear design systems' },
    ],
  },
  {
    id: '3',
    src: '/kodex.png',
    title: 'User Experience Designer',
    location: 'Lahore, Pakistan',
    date: '(Jul 2020 – Dec 2022)',
    duration: '2 yrs 6 mos',
    typoOfJob: 'On-site',
    desc: 'Played a pivotal role in the UI/UX design of digital products, focusing on improving user satisfaction through intuitive design and seamless interactions.',
    keyResponsibilities: [
      { id: '1', text: 'Conducted UX research and translated findings into design solutions' },
      { id: '2', text: 'Designed high-fidelity mockups and prototypes' },
      { id: '3', text: 'Collaborated with development teams to ensure design accuracy' },
      { id: '4', text: 'Improved user journeys and experience flows across products' },
      { id: '5', text: 'Maintained consistency with design systems and guidelines' },
    ],
  },
  {
    id: '4',
    src: '/bix-soft.png',
    title: 'UI/UX Designer',
    location: 'Lahore, Pakistan',
    date: '(May 2019 – Jun 2020)',
    duration: '1 yrs 2 mos',
    typoOfJob: 'On-site',
    desc: 'Delivered responsive UI designs and improved the user flow of web-based enterprise tools. Contributed to both design and front-end implementation.',
    keyResponsibilities: [
      { id: '1', text: 'Created responsive UI components for web platforms' },
      { id: '2', text: 'Worked closely with product teams to meet design goals' },
      { id: '3', text: 'Developed clean, interactive prototypes for validation' },
      { id: '4', text: 'Refined UX flows to enhance user satisfaction' },
      { id: '5', text: 'Supported front-end development with design handoffs' },
    ],
  },
  {
    id: '5',
    src: '/null-brainer.png',
    title: 'User Interface Designer',
    location: 'Lahore, Pakistan',
    date: '(Jan 2018 – Apr 2019)',
    duration: '1 yrs 4 mos',
    typoOfJob: 'Remote',
    desc: 'Focused on crafting clean, intuitive, and visually compelling interfaces. Supported remote development teams with consistent UI designs for various products.',
    keyResponsibilities: [
      { id: '1', text: 'Designed user interfaces for SaaS and enterprise tools' },
      { id: '2', text: 'Ensured mobile and web compatibility for all screens' },
      { id: '3', text: 'Created detailed UI libraries and reusable design components' },
      { id: '4', text: 'Communicated with developers to ensure pixel-perfect execution' },
      { id: '5', text: 'Contributed to brand consistency across platforms' },
    ],
  },
];

function Experience() {
  return (
    <section className="pt-28 px-6 lg:px-[150px]">
      <section className="max-w-[1280px] w-full flex flex-col gap-6 mx-auto">
        {experience.map((item) => (
          <div className="grid grid-cols-12 gap-6 items-start" key={item.id}>
            <div className="col-span-12 md:col-span-3 bg-white flex items-center justify-center px-10 rounded-2xl shadow border py-5 md:py-7">
              <img src={item.src} className="h-9 md:w-full" alt="" />
            </div>
            <div className="col-span-12 md:col-span-9 bg-white px-4 border flex flex-col gap-5 shadow rounded-2xl py-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl lg:text-2xl font-bold">{item.title}</h2>
                <p className="text-secondary-text text-xs lg:text-base">
                  {item.location} {item.date} {item.duration} | {item.typoOfJob}
                </p>
              </div>
              <p className="text-sm text-secondary-text">{item.desc}</p>
              <div className="flex flex-col gap-3">
                <h3 className="text-dark-text text-lg lg:text-xl font-medium">
                  Key Responsibilities:
                </h3>
                <ul className="pl-5">
                  {item.keyResponsibilities.map((item) => (
                    <li
                      className="text-secondary-text text-sm lg:text-base list-disc"
                      key={item.id}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Experience;
