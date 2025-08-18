import Button from '../Button';

function LandingPages() {
  const projects = [
    {
      color: '#009DFF',
      src: '/RideEase.png',
      id: '1',
      title: 'RideEase',
      desc: 'RideEase is a smart travel platform designed to simplify urban mobility. The landing page showcases how the app unifies taxis, buses, trains, bikes, and e-scooters into a single, user-friendly solution. The design emphasizes affordability, eco-friendliness, and convenience—encouraging users to explore smarter ways to move.',
      features: [
        { id: '1', text: 'Landing page UI for a multi-modal travel app' },
        { id: '2', text: 'Focused messaging on eco-friendly and affordable transit' },
        { id: '3', text: 'Seamless presentation of transport options in one app' },
        { id: '4', text: 'Engaging layout with icons, illustrations, and app preview' },
        { id: '5', text: 'Call-to-action sections for app downloads and user sign-ups' },
        { id: '6', text: 'Fully responsive design optimized for performance' },
      ],
    },
    {
      color: '#418611',
      src: '/SavorEase.png',
      id: '2',
      title: 'SavorEase',
      desc: 'SavorEase is a smart and flexible meal planning platform designed to make mealtime effortless. Whether it’s for individuals, families, or businesses, the landing page was crafted to highlight ease, customization, and variety—encouraging users to create their perfect plan or let the system surprise them with fresh options.',
      features: [
        { id: '1', text: 'Clean and modern landing page design' },
        { id: '2', text: 'Tailored messaging for individuals, families, and businesses' },
        { id: '3', text: 'Easy-to-follow meal plan customization flow' },
        { id: '4', text: 'Bold visuals with food-themed aesthetics' },
        { id: '5', text: 'CTA-driven layout to boost sign-ups and engagement' },
        { id: '6', text: 'Fully responsive and optimized for conversion' },
      ],
    },
    {
      color: '#BFDD36',
      src: '/Integriti Studio.png',
      id: '3',
      title: 'Integriti Studio',
      desc: 'Integriti Studio is a creative web development brand specializing in WordPress and Shopify solutions. The landing page was designed to highlight their expertise in custom website design, logo creation, and tailored digital strategies that help businesses grow and build a standout online presence.',
      features: [
        { id: '1', text: 'Landing page design for a web development studio' },
        { id: '2', text: 'Service highlights: WordPress, Shopify, branding & logo design' },
        { id: '3', text: 'Clean, modern layout with trust-building content' },
        { id: '4', text: 'Dedicated sections for case studies and client testimonials' },
        { id: '5', text: 'Strategic call-to-actions for consultations and quote requests' },
        { id: '6', text: 'Fully responsive, scalable, and SEO-friendly design' },
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

export default LandingPages;
