import Button from '../Button';

function MobileApps() {
  const projects = [
    {
      color: '#FF491C',
      src: '/Mosiqaar.png',
      id: '1',
      title: 'Mosiqaar',
      desc: 'This music app is a modern platform for creators to showcase, sell, and manage their music with ease. Built with a user-first design, it offers complete branding and a polished app interface. It blends creative freedom with business workflow—perfect for musicians and audio sellers.',
      features: [
        { id: '1', text: 'Upload and manage music tracks and audio assets' },
        { id: '2', text: 'Create personalized artist or brand storefronts' },
        { id: '3', text: 'Organize albums, genres, and licensing info' },
        { id: '4', text: 'Support for custom branding (logos, banners, themes)' },
        { id: '5', text: 'Built-in licensing and royalty management tools' },
        { id: '6', text: 'Secure checkout and user dashboard for purchases' },
      ],
    },
    {
      color: '#0084FF',
      src: '/Shiftworx.png',
      id: '2',
      title: 'Shiftworx',
      desc: 'ShiftWorx is a mobile-first scheduling app designed specifically for healthcare staff. It helps users easily view available shifts and request changes when needed. The app also allows real-time tracking of individual schedules. By simplifying shift management, it reduces administrative workload.',
      features: [
        { id: '1', text: 'Browse and select available shifts anytime' },
        { id: '2', text: 'Request shift swaps directly through the app' },
        { id: '3', text: 'View upcoming schedule in an easy calendar view' },
        { id: '4', text: 'Track completed, pending, and missed shifts' },
        { id: '5', text: 'Get real-time notifications and important updates' },
        { id: '6', text: 'Enjoy a simple, mobile-friendly, and responsive UI' },
      ],
    },
    {
      color: '#929292',
      src: '/Seychelles Sphere.png',
      id: '2',
      title: 'Seychelles Sphere',
      desc: 'Seychelles is a mobile platform that connects local businesses with consumers across Seychelles. It allows businesses to list and manage their products or services, while users can easily discover, book, or shop—all in one app. With dedicated flows for vendors and service providers, the app supports local growth and community engagement.',
      features: [
        { id: '1', text: 'Separate mobile apps for business owners and vendors' },
        { id: '2', text: 'Easily list, manage, and sell products or services' },
        { id: '3', text: 'Discover and book services directly from the app' },
        { id: '4', text: 'Location-based search with smart category filters' },
        { id: '5', text: 'In-app messaging, booking, and real-time order tracking' },
        { id: '6', text: 'Community-focused design with local branding elements' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {projects.map((item) => (
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
              <Button cn={'text-sm md:text-base !px-5'} text={'View Case Study'} />
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

export default MobileApps;
