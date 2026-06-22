import { useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FaPlus,
  FaMinus,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

import { 
  MdStoreMallDirectory, 
  MdShield, 
  MdVideocam, 
  MdOutlineCelebration,
  MdChair,
  MdLightbulb,
  MdFence,      
  MdWaterDrop   
} from "react-icons/md";

function Plots() {
  const [activeSection, setActiveSection] = useState("connectivity");
  
  // Modal & OTP States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1); // 1 = Details Form, 2 = OTP Input
  const [userData, setUserData] = useState({ name: "", email: "", mobile: "" });
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Step 1: Send OTP via EmailJS AND Save lead to Database
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    const expiryTime = new Date(Date.now() + 15 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      to_name: userData.name,
      to_email: userData.email, 
      passcode: otp,             
      time: expiryTime,          
    };

    try {
      // --- DATABASE INSERTION ---
      const { error: dbError } = await supabase
        .from('SRK_infra')
        .insert([
          { 
            "Name": userData.name, 
            "Email": userData.email, 
            "Mobile Number": userData.mobile 
          }
        ]);

      if (dbError) {
        console.error("Database Save Error Details:", dbError);
      }

      // --- EMAIL DISPATCH ---
      await emailjs.send(
        "service_pdjm9cl", 
        "template_zc94kuk", 
        templateParams, 
        "JQHgKsJcKUK9Jg4bt"
      );
      
      setModalStep(2);
    } catch (error) {
      console.error("Error Processing Request Details:", error);
      setErrorMessage(`Error: ${error.text || error.message || "Check network connections"}`);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and Trigger PDF Download
  const handleVerifyAndDownload = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (userOtp === generatedOtp) {
      const link = document.createElement("a");
      link.href = "./brochure.pdf"; 
      link.download = "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean reset states
      setIsModalOpen(false);
      setModalStep(1);
      setUserData({ name: "", email: "", mobile: "" });
      setUserOtp("");
      setGeneratedOtp("");
    } else {
      setErrorMessage("Invalid OTP code. Please verify and try again.");
    }
  };

  return (
    <>
      <Navbar />

      <main
        className="bg-[#f6f6f6]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* HERO IMAGE */}
        <section>
          <img
            src="/images/hero2.jpg"
            alt="Plots Development"
            className="w-full h-[500px] object-cover"
          />
        </section>

        {/* NEW: PROJECT OVERVIEW SECTION */}
        {/* PROJECT OVERVIEW SECTION (Structured like image_146bc1.jpg) */}
        <section className="max-w-7xl mx-auto py-16 px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <h2 className="text-[#34489b] text-[28px] font-bold uppercase tracking-wide">
                Project Overview
              </h2>
              
              <div className="space-y-5 text-gray-600 text-[16px] leading-[1.7]">
                <p>
                  SRK's premium open plots development is spread across a vast 03-acre expanse, 
                  offering residents not just land but an estate of elegance, privacy, and tranquility.
                  Within this carefully planned community, only 41 premium plots have been designed, 
                  ensuring exclusivity and a close-knit neighborhood of like-minded families.
                  Each plot ranges from 125 to 275 square yards and is available with flexible design 
                  possibilities, clear titles, and optimal orientations that maximize natural light, 
                  cross ventilation, and spacious independent living.
                </p>
              </div>
            </div>

            {/* Right Column: Overview Rendering Image */}
            <div className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <img
                src="/images/projects/project2.jpg" 
                alt="SRK Plots Community Overview"
                className="w-full h-[380px] object-cover"
              />
            </div>

          </div>
        </section>

        {/* PROJECT DETAILS */}
        <section className="max-w-7xl mx-auto py-12 px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Box visual matches spec image styling layout */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-8 flex flex-col justify-between h-full border border-gray-100">
              <div>
                <h2 className="text-[#34489b] text-[28px] font-bold mb-6 uppercase tracking-wide">
                  Project Details
                </h2>

                <div className="divide-y divide-gray-100">
                  {[
                    ["APCRDA NO", "1143/0053/B/TDP/PRTU/2025"],
                    ["LOCATION", "Chirravuru - Tadepalli"],
                    ["PROPERTY TYPE", "Semi - Gated Community"],
                    ["AREA", "03 Acres"],
                    ["UNITS", "41"],
                    ["UNIT TYPE", "Open Plots"],
                    ["UNIT SIZES", "125 - 275 Sq. Yards"],
                  ].map((item) => (
                    <div
                      key={item[0]}
                      className="flex justify-between py-4 text-[16px]"
                    >
                      <span className="text-gray-400 font-medium tracking-normal w-1/3">
                        {item[0]}
                      </span>
                      <span className="font-bold text-[#111] text-left w-2/3 pl-4">
                        {item[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DOWNLOAD BROCHURE BUTTON */}
              <div className="pt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-semibold text-[15px] py-3 px-4 rounded flex items-center justify-center gap-2 shadow transition duration-200 uppercase"
                >
                  <FaDownload className="text-sm" />
                  Download Brochure
                </button>
              </div>
            </div>

            <img
              src="/images/villas_house.jpg"
              alt="Grand Entrance Rendering"
              className="w-full rounded-[20px] shadow-lg object-cover h-full"
            />
          </div>
        </section>

        {/* AMENITIES */}
        
            {/* AMENITIES */}
                <section className="max-w-7xl mx-auto py-14 px-5">
                <h2 className="text-center text-[#34489b] text-[32px] font-bold mb-12 tracking-wide uppercase">
                    Project Amenities
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                    ["Grand entrance arch with security room", <MdStoreMallDirectory className="text-2xl text-[#0056b3]" />],
                    ["Compound wall with solar fencing", <MdFence className="text-2xl text-[#0056b3]" />], // <--- FIXED
                    ["CC cameras", <MdVideocam className="text-2xl text-[#0056b3]" />],
                    ["Children's play area", <MdOutlineCelebration className="text-2xl text-[#0056b3]" />],
                    ["Sit-out area", <MdChair className="text-2xl text-[#0056b3]" />],
                    ["Landscaped park with Avenue plantation", <MdShield className="text-2xl text-[#0056b3]" />],
                    ["Water tap for each plot", <MdWaterDrop className="text-2xl text-[#0056b3]" />],        // <--- FIXED
                    ["Electricity facility", <MdLightbulb className="text-2xl text-[#0056b3]" />],
                    ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-100 rounded-xl py-10 px-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-300 min-h-[200px]"
                    >
                        <div className="border border-blue-100 rounded-xl p-4 mb-5 bg-blue-50/50 inline-flex items-center justify-center w-16 h-16">
                        {item[1]}
                        </div>
                        <h3 className="text-[#444] text-[16px] font-medium tracking-tight px-1 leading-snug">
                        {item[0]}
                        </h3>
                    </div>
                    ))}
                </div>
                </section>

        {/* LOCATION HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto py-12 px-5">
          <h2 className="text-[#34489b] text-[27px] font-bold mb-8 uppercase">
            Location Highlights
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              {/* CONNECTIVITY */}
              <div className="border border-gray-200 bg-white mb-4 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("connectivity")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-bold text-left text-[16px] text-[#34489b]"
                >
                  {activeSection === "connectivity" ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  CONNECTIVITY
                </button>

                {activeSection === "connectivity" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-3 text-[16px] text-gray-700">
                      <li>10 min to NH 16 Chennai-Kolkota HW</li>
                      <li>12 min to Manipal super specialty hospital</li>
                      <li>15 min to Mangalagiri AllMS hospital</li>
                      <li>20 min to Central Bus Stand</li>
                      <li>25 min to Vijaywada Railway Station</li>
                      <li>26 min to Mangalagiri IT Park</li>
                      <li>30 min to High Court</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* EDUCATION */}
              <div className="border border-gray-200 bg-white mb-4 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("education")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-bold text-left text-[16px] text-[#34489b]"
                >
                  {activeSection === "education" ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  QUALITY EDUCATION
                </button>

                {activeSection === "education" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-3 text-[16px] text-gray-700">
                      <li>06 min to AIMEE International School</li>
                      <li>09 min to KL University</li>
                      <li>12 min to Geethanjali School</li>
                      <li>14 min to Aravinda School</li>
                      <li>25 min to NRI Medical College</li>
                      <li>30 min to Nagarjuna Univeristy</li>
                      <li>40 min to SRM & VIT Universities</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* SHOPPING */}
              <div className="border border-gray-200 bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("shopping")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-bold text-left text-[16px] text-[#34489b]"
                >
                  {activeSection === "shopping" ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  SHOPPING & ENTERTAINMENT
                </button>

                {activeSection === "shopping" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-3 text-[16px] text-gray-700">
                      <li>10 min to D-Mart</li>
                      <li>15 min to Ratnadeep Super Market</li>
                      <li>20 min to Ushodaya super market</li>
                      <li>22 min to Besant road</li>
                      <li>20 min to PVP Mall & Cinepolis</li>
                      <li>25 min to LEPL Inox Cinemas</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=Prathuru%20Vijayawada&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[480px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* POPUP BROCHURE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40 backdrop-blur-xs">
          <div className="relative bg-[#f8fafd] w-full max-w-md rounded-2xl p-8 shadow-xl border-2 border-[#007bff] transition duration-300">
            
            <button
              onClick={() => {
                setIsModalOpen(false);
                setModalStep(1);
                setErrorMessage("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <FaTimes className="text-lg" />
            </button>

            <h3 className="text-[#007bff] text-[26px] font-semibold text-center mb-6 tracking-wide">
              Download Brochure
            </h3>

            {/* STEP 1: Form Inputs */}
            {modalStep === 1 && (
              <form onSubmit={handleSendOtp} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={userData.name}
                    onChange={handleInputChange}
                    placeholder="* Full Name"
                    className="w-full px-4 py-3 bg-[#eef3f8] border border-gray-300 rounded-lg text-[15px] placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="* Email Address"
                    className="w-full px-4 py-3 bg-[#eef3f8] border border-gray-300 rounded-lg text-[15px] placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={userData.mobile}
                    onChange={handleInputChange}
                    placeholder="* Mobile Number"
                    className="w-full px-4 py-3 bg-[#eef3f8] border border-gray-300 rounded-lg text-[15px] placeholder-gray-500 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <p className="text-gray-600 text-[13px] font-normal pl-1">
                  Note: OTP will be shared to your email
                </p>

                {errorMessage && (
                  <p className="text-red-500 text-[13px] pl-1">{errorMessage}</p>
                )}

                <div className="pt-2 space-y-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#de1e4f] text-white py-3 rounded-lg font-bold text-[15px] shadow hover:bg-[#c91743] transition duration-200 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </button>

                  <button
                    type="button"
                    disabled
                    className="w-full bg-white border border-red-200 text-red-300 py-3 rounded-lg font-bold text-[15px] opacity-50 cursor-not-allowed"
                  >
                    Verify & Download
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Input Verification Screen */}
            {modalStep === 2 && (
              <form onSubmit={handleVerifyAndDownload} className="space-y-5">
                <div className="text-center py-2">
                  <p className="text-gray-600 text-[14px]">
                    Enter the code dispatched to <b>{userData.email}</b>
                  </p>
                </div>

                <div>
                  <input
                    type="text"
                    maxLength="6"
                    required
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value.trim())}
                    placeholder="Enter 6-Digit OTP"
                    className="w-full px-4 py-3 border text-center font-bold tracking-widest text-lg rounded-lg border-gray-300 focus:outline-none focus:border-[#007bff]"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-[13px] text-center">{errorMessage}</p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalStep(1)}
                    className="w-1/3 border border-gray-300 text-gray-600 py-3 rounded-lg text-[14px] font-medium uppercase hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-[#de1e4f] text-white py-3 rounded-lg font-bold text-[14px] shadow hover:bg-[#c91743] transition duration-200"
                  >
                    Verify & Download
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Plots;