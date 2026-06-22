import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Villas from "./pages/Villas";
import Plots from "./pages/Plots";
import Apartments from "./pages/Apartments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectType" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/apartments" element={<Apartments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;