import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { Outlet } from 'react-router';

function HomePage() {
  return (
    <>
      <section>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <main>
          <Outlet />
        </main>
        <div className="hidden lg:block">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default HomePage;
