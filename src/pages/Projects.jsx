import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <Navbar />

      <main
        className="bg-[#f7f7f7] min-h-screen py-24"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-center text-5xl font-bold text-[#34489b] mb-16">
            Our Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <ProjectCard
  image="/images/hero1.jpg"
  title="SRK Vistas Villas"
  description="Premium villa community."
  link="/villas"
/>

<ProjectCard
  image="/images/hero2.jpg"
  title="SRK Vistas Plots"
  description="Premium plotted development."
  link="/plots"
/>

<ProjectCard
  image="/images/hero3.jpg"
  title="SRK Vistas Apartments"
  description="Luxury apartment living."
  link="/apartments"
/>

          </div>

        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Projects;