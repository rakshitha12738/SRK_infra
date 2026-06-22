import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Apartments() {
  return (
    <>
      <Navbar />

      <main
        className="bg-[#f6f6f6] min-h-screen pb-16"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >

        {/* COMING SOON SECTION (From image_13e406.jpg) */}
        <section className="max-w-7xl mx-auto py-16 px-5">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column: Image Asset */}
            <div className="overflow-hidden rounded-2xl shadow-md h-[400px] lg:h-auto">
              <img
                src="/images/projects/project1.jpg" 
                alt="Premium Quality Living View"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Gradient Promo Card */}
            <div className="bg-gradient-to-tr from-[#f9a8b9] via-[#ecd2cf] to-[#a3f4cd] rounded-2xl p-10 lg:p-14 flex flex-col justify-center shadow-md">
              <div className="space-y-4 max-w-xl">
                <p className="text-[#222222] text-[16px] font-medium leading-[1.6]">
                  Experience the perfect blend of comfort, connectivity, and
                  contemporary design.
                </p>
                
                <p className="text-[#222222] text-[16px] font-medium leading-[1.6]">
                  Premium apartments designed for families who value
                  quality living.
                </p>
              </div>

              {/* Bold Coming Soon Status Banner */}
              <h2 className="text-[#22579d] text-[32px] md:text-[36px] font-bold tracking-wide mt-12">
                Coming Soon – SRK Apartments
              </h2>
            </div>

          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Apartments;