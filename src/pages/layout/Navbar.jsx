import { Link, useLocation } from 'react-router';
import Logo from '../../assets/svgs/Logo';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const pages = [
  { id: 1, title: 'Home', link: ['/'], icon: '' },
  { id: 2, title: 'Experience', link: ['/experience'], icon: '' },
  { id: 3, title: 'Hammas', link: [''], icon: <Logo /> },
  { id: 4, title: 'Projects', link: ['/project'], icon: '' },
  { id: 5, title: 'Contact', link: ['/contact'], icon: '' },
];

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <section className="hidden lg:block px-10 z-50 w-full mx-auto h-[68px] max-w-[1280px]">
        <section className="mt-3 rounded-[50px] flex items-center text-white justify-between max-w-[1440px] mx-auto border bg-dark-text py-1.5 px-1.5">
          {pages.map((item) => (
            <LinkItem key={item.id} page={item} pathname={pathname} />
          ))}
        </section>
      </section>
      <section className="text-white lg:hidden z-50 py-4 px-5 w-full flex items-center justify-between bg-dark-text">
        <div className="z-50 flex gap-2 items-center text-white">
          <img className="w-10" src="/logo.png" alt="logo" />
          Hammas
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="z-50">
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
        <div
          className={`fixed top-0 z-10 left-0 w-full h-full bg-dark-text/30 backdrop-blur-3xl flex flex-col items-center justify-center gap-4 py-6 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-[120%]'
          }`}
        >
          {pages.map(
            (item) =>
              item.title !== 'Hammas' && (
                <LinkItem
                  key={item.id}
                  page={item}
                  pathname={pathname}
                  onClick={() => setIsOpen(false)}
                />
              )
          )}
        </div>
      </section>
    </>
  );
}

export default Navbar;

const LinkItem = ({ page, pathname, onClick }) => {
  const isLinkActive = page?.link.some((item) => item === pathname);

  if (page.title === 'Hammas') {
    return (
      <div className="flex items-center">
        {React.cloneElement(page?.icon)}
        <div className="flex items-center py-[10px] px-[12px] text-sm">{page.title}</div>
      </div>
    );
  }

  return (
    <Link
      to={page?.link[0]}
      onClick={onClick}
      className={`flex rounded-[32px] w-[170px] justify-center items-center py-[10px] px-[12px] text-sm ${
        isLinkActive ? 'bg-primary text-white' : 'text-white hover:text-white hover:bg-primary'
      }`}
    >
      <span className="transition-all duration-100 text-nowrap">{page?.title}</span>
    </Link>
  );
};
