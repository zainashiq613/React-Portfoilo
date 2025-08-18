import Button from '../Button';

function Dashboards() {
  const projects = [
    {
      color: '#2A91A9',
      src: '/Invoyx.png',
      id: '1',
      title: 'Invoyx',
      desc: 'Invoyx is a complete courier and logistics platform designed to simplify deliveries for businesses and individuals. The project involved designing the full digital ecosystem including the marketing website, merchant app, driver app, and admin dashboard, along with structured user flows and contract management.',
      features: [
        { id: '1', text: 'Multi-role user flows for Admin, Merchant, and Driver' },
        { id: '2', text: 'Website and mobile app UI/UX design' },
        { id: '3', text: 'Driver onboarding and contract documentation' },
        { id: '4', text: 'Real-time delivery tracking and earnings overview' },
        { id: '5', text: 'Merchant booking and payment management' },
        { id: '6', text: 'Data-driven dashboards and performance analytics' },
      ],
    },
    {
      color: '#F14445',
      src: '/Pickup Pointe.png',
      id: '2',
      title: 'Pickup Pointe',
      desc: 'Pickup Pointe is a local delivery and pickup platform that connects shoppers with nearby vendors. It offers a seamless experience for local ordering, vendor management, and admin oversight. Designed for community-driven commerce, the platform features real-time updates and intuitive UI flows.',
      features: [
        { id: '1', text: 'Landing page design with shopper and vendor onboarding' },
        { id: '2', text: 'Admin and vendor dashboards with clear workflow structures' },
        { id: '3', text: 'Smart order tracking with location-based delivery views' },
        { id: '4', text: 'User-friendly product browsing and cart experience' },
        { id: '5', text: 'Review, rating, and community feedback integrations' },
        { id: '6', text: 'Flexible pricing plans for vendors and shoppers with custom CTAs' },
      ],
    },
    {
      color: '#929292',
      src: '/AI App.png',
      id: '3',
      title: 'AI App',
      desc: 'AI Marketplace is a centralized platform where users can discover, test, and purchase AI-powered tools, APIs, and services. It connects developers with businesses, offering a seamless experience for exploring and adopting AI solutions through a clean, intuitive web interface.',
      features: [
        { id: '1', text: 'Explore AI tools by category and use case' },
        { id: '2', text: 'Try live demos before making a purchase' },
        { id: '3', text: 'Smart search with filters and sorting options' },
        { id: '4', text: 'Verified seller profiles with reviews and ratings' },
        { id: '5', text: 'Transparent pricing with multiple plan types' },
        { id: '6', text: 'Secure payments and user dashboard for tool access' },
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

export default Dashboards;
