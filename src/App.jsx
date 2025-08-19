import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Navbar from './pages/layout/Navbar';
import Footer from './pages/layout/Footer';
import Experience from './pages/experience/Experience';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import HomePage from './pages';
import ProjectDetail from './pages/project/ProjectDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index path="" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
