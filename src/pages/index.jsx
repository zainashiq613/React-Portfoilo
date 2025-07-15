import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { Outlet } from 'react-router';

function HomePage() {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        <main>
          <Outlet />
        </main>
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default HomePage;
