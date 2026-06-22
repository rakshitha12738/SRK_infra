import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projectLabels = {
  villas: "Villas",
  plots: "Plots",
  apartments: "Apartments",
};

function ProjectDetail() {
  const { projectType } = useParams();
  const projectLabel = projectLabels[projectType] || "Projects";

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-bold text-blue-950 md:text-6xl">
          {projectLabel}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
          Explore our {projectLabel.toLowerCase()} offerings and learn more about
          available options, layouts, and investment opportunities.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetail;