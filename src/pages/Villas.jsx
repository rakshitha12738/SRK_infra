import { useState } from "react";
import emailjs from "@emailjs/browser";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FaSwimmingPool,
  FaChild,
  FaWalking,
  FaBasketballBall,
  FaDumbbell,
  FaUsers,
  FaChair,
  FaPlus,
  FaMinus,
  FaDownload,
  FaTimes,
} from "react-icons/fa";

function Villas() {
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

    // 1. Generate random 6-digit OTP string
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    // 2. Calculate expiration time (current time + 15 minutes) formatted nicely
    const expiryTime = new Date(Date.now() + 15 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // 3. THIS MUST MATCH YOUR DASHBOARD CONFIGS EXACTLY
    const templateParams = {
      to_name: userData.name,
      to_email: userData.email, 
      passcode: otp,             
      time: expiryTime,          
    };

    // Find this section inside your handleSendOtp function and update it exactly like this:
try {
  // --- DATABASE INSERTION ---
  const { error: dbError } = await supabase
    .from('SRK_infra')
    .insert([
      { 
        "Name": userData.name,            // Match column 'Name'
        "Email": userData.email,          // Match column 'Email'
        "Mobile Number": userData.mobile  // Match column 'Mobile Number' (must be in quotes due to space)
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
            alt="Villas"
            className="w-full h-[500px] object-cover"
          />
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="max-w-7xl mx-auto py-10 px-5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[#34489b] text-[27px] font-bold mb-6 uppercase">
                Project Overview
              </h2>

              <p className="text-[14px] leading-[1.6] text-[#222]">
                SRK’s Vistas is spread across a vast 2.10-acre expanse,
                offering residents not just homes but an estate of elegance,
                privacy and tranquility.
                <br /><br />
                Within this carefully planned community,
                only 29 premium villas have been designed,
                ensuring exclusivity and a close-knit neighborhood
                of like-minded families.
                <br /><br />
                Each villa stands on 204 square yards and is available
                in both East-facing and West-facing orientations,
                with layouts that maximize natural light,
                cross ventilation and spacious living.
              </p>
            </div>

            <div>
              <img
                src="/images/hero1.jpg"
                alt=""
                className="w-full rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* PROJECT DETAILS */}
        <section className="max-w-7xl mx-auto py-10 px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-center text-[#34489b] text-[27px] font-bold mb-6 uppercase">
                  Project Details
                </h2>

                <div className="space-y-4 mb-6">
                  {[
                    ["APCRDA NO", "1143/0053/B/TDP/PRTU/2025"],
                    ["LOCATION", "Prathuru - Vijayawada"],
                    ["PROPERTY TYPE", "Gated Community"],
                    ["AREA", "2.10 Acres"],
                    ["UNITS", "29"],
                    ["UNIT TYPE", "Villas"],
                    ["UNIT SIZES", "204 Sq.Yards"],
                    ["FLOORS", "G + 2 Floors"],
                  ].map((item) => (
                    <div
                      key={item[0]}
                      className="flex justify-between border-b pb-3 text-[14px]"
                    >
                      <span className="text-gray-500 uppercase text-[13px]">
                        {item[0]}
                      </span>

                      <span className="font-semibold text-gray-800">
                        {item[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DOWNLOAD BROCHURE BUTTON */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-semibold text-[15px] py-3 px-4 rounded flex items-center justify-center gap-2 shadow transition duration-200 uppercase mt-auto"
              >
                <FaDownload className="text-sm" />
                Download Brochure
              </button>
            </div>

            <img
              src="/images/villas_house.jpg"
              alt=""
              className="w-full rounded shadow-lg"
            />
          </div>
        </section>

        {/* AMENITIES */}
        <section className="max-w-7xl mx-auto py-14 px-5">
          <h2 className="text-center text-[#34489b] text-[32px] font-bold mb-10 tracking-wide uppercase">
            Project Amenities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              [<FaSwimmingPool />, "Swimming Pool"],
              [<FaUsers />, "Party Lawn"],
              [<FaChild />, "Children's Play Area"],
              [<FaChair />, "Elder's Seating Areas"],
              [<FaBasketballBall />, "Half Basketball Court"],
              [<FaUsers />, "Banquet Hall"],
              [<FaDumbbell />, "Gym"],
              [<FaWalking />, "Walking/Jogging Track"],
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl py-10 px-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="border border-[#d4a72c] p-3 mb-5 inline-flex items-center justify-center">
                  <div className="text-[#d4a72c] text-3xl">
                    {item[0]}
                  </div>
                </div>

                <h3 className="text-[#333] text-[15px] font-medium tracking-tight">
                  {item[1]}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION HIGHLIGHTS */}
        <section className="max-w-7xl mx-auto py-12 px-5">
          <h2 className="text-[#34489b] text-[27px] font-bold mb-6 uppercase">
            Location Highlights
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              {/* CONNECTIVITY */}
              <div className="border bg-white mb-4">
                <button
                  onClick={() => toggleSection("connectivity")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-semibold text-left text-[14px]"
                >
                  {activeSection === "connectivity" ? <FaMinus /> : <FaPlus />}
                  CONNECTIVITY
                </button>

                {activeSection === "connectivity" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-2 text-[13px]">
                      <li>NH-16 Chennai–Kolkata Highway – <b>10 min</b></li>
                      <li>Manipal Super Speciality Hospital – <b>12 min</b></li>
                      <li>Mangalgiri AIIMS Hospital – <b>15 min</b></li>
                      <li>Central Bus Stand – <b>20 min</b></li>
                      <li>Vijayawada Railway Station – <b>20 min</b></li>
                      <li>Mangalagiri IT Park – <b>26 min</b></li>
                      <li>High Court – <b>30 min</b></li>
                      <li>Amaravathi – <b>35 min</b></li>
                      <li>Assembly & Secretariat – <b>38 min</b></li>
                      <li>Airport – <b>45 min</b></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* EDUCATION */}
              <div className="border bg-white mb-4">
                <button
                  onClick={() => toggleSection("education")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-semibold text-left text-[14px]"
                >
                  {activeSection === "education" ? <FaMinus /> : <FaPlus />}
                  QUALITY EDUCATION
                </button>

                {activeSection === "education" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-2 text-[13px]">
                      <li>AAMEE International School – <b>05 min</b></li>
                      <li>Geethanjali School – <b>09 min</b></li>
                      <li>Ravindra Bharathi School – <b>10 min</b></li>
                      <li>KLU University – <b>10 min</b></li>
                      <li>NRI Medical College – <b>12 min</b></li>
                      <li>Narayana University – <b>25 min</b></li>
                      <li>SRM & VIT Universities – <b>39 min</b></li>
                    </ul>
                  </div>
                )}
              </div>

              {/* SHOPPING */}
              <div className="border bg-white">
                <button
                  onClick={() => toggleSection("shopping")}
                  className="w-full flex items-center gap-4 px-5 py-4 font-semibold text-left text-[14px]"
                >
                  {activeSection === "shopping" ? <FaMinus /> : <FaPlus />}
                  SHOPPING & ENTERTAINMENT
                </button>

                {activeSection === "shopping" && (
                  <div className="px-10 pb-6">
                    <ul className="list-disc space-y-2 text-[13px]">
                      <li>D-Mart – <b>10 min</b></li>
                      <li>Reliance Digital – <b>10 min</b></li>
                      <li>Croma – <b>10 min</b></li>
                      <li>Ushodaya Super Market – <b>10 min</b></li>
                      <li>Hyderabad Super Market – <b>11 min</b></li>
                      <li>PVP Mall & Cinepolis – <b>17 min</b></li>
                      <li>Benz Circle – <b>19 min</b></li>
                      <li>LEPL Inox Cinemas – <b>21 min</b></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=Prathuru%20Vijayawada&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[650px]"
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

export default Villas;