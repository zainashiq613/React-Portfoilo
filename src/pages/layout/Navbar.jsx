import { Link } from 'react-router';

function Navbar() {
  const pages = [
    { title: '', link: '' },
    { title: '', link: '' },
    { title: '', link: '' },
    { title: '', link: '' },
  ];

  return (
    <section>
      <div>
        <Link to={'/experience'}>Experience</Link>
      </div>
    </section>
  );
}

export default Navbar;
