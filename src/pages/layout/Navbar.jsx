import { Link, useLocation } from 'react-router';
import Logo from '../../assets/svgs/Logo';
import React, { useEffect, useState } from 'react';

const pages = [
  {
    id: 1,
    title: 'Home',
    link: ['/'],
    icon: '',
  },
  {
    id: 2,
    title: 'Experience',
    link: ['/experience'],
    icon: '',
  },
  {
    id: 3,
    title: 'Hammas',
    link: [''],
    icon: <Logo />,
  },
  {
    id: 4,
    title: 'Projects',
    link: ['/project'],
    icon: '',
  },
  {
    id: 5,
    title: 'Contact',
    link: ['/contact'],
    icon: '',
  },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <section className="fixed z-50 w-full h-[68px] px-[150px]">
      <section className="mt-3 rounded-[50px] flex items-center text-white justify-between max-w-[1440px] mx-auto border bg-dark-text py-1.5 px-1.5">
        {pages.map((item) => (
          <LinkItem key={item.id} page={item} pathname={pathname} />
        ))}
      </section>
    </section>
  );
}

export default Navbar;

const LinkItem = ({ page, pathname }) => {
  const isLinkActive = page?.link.some((item) => item === pathname);

  if (page.title === 'Hammas') {
    return (
      <div className={`flex items-center`}>
        {React.cloneElement(page?.icon)}
        <div className={`flex items-center py-[10px] px-[12px] text-sm`}>{page.title}</div>
      </div>
    );
  }

  return (
    <Link
      to={page?.link[0]}
      className={`flex rounded-[32px] w-[170px] justify-center items-center py-[10px] px-[12px] text-sm ${
        isLinkActive
          ? 'bg-primary text-white'
          : 'text-white hover:text-white bg-none hover:bg-primary'
      }`}
    >
      <span className={`transition-all duration-100 text-nowrap`}>{page?.title}</span>
    </Link>
  );
};
