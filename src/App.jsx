import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Navbar from './pages/layout/Navbar';
import Footer from './pages/layout/Footer';
import Experience from './pages/experience/Experience';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
