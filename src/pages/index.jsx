import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { Outlet } from 'react-router';

function HomePage() {
  return (
    <>
      <section>
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <main className="min-h-[calc(100vh-170px)]">
          <Outlet />
        </main>
        <div className="mx-auto px-5 w-full max-w-[1408px]">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default HomePage;
