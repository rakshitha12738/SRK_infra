import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FaBuilding,
  FaHandshake,
  FaLocationArrow,
  FaTools,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  const features = [
    {
      href: "/about",
      title: "Residential & Commercial Projects",
      text: "We develop premium residential and commercial projects designed for modern living and future-ready business environments — combining comfort, convenience, and strong community value.",
      icon: <FaBuilding />,
      color: "bg-blue-600",
      iconColor: "#2f69ff",
      titleColor: "text-[#2f69ff]",

    },
    {
      href: "/about",
      title: "Seamless Buying Experience",
      text: "We ensure a smooth and transparent property buying journey — from site visit to documentation and handover, supported by timely communication and complete clarity at every stage.",
      icon: <FaHandshake />,
      color: "bg-violet-700",
      iconColor: "#6f1fe6",
      titleColor: "text-[#6f1fe6]",
    },
    {
      href: "/about",
      title: "Prime & Strategic Locations",
      text: "Our projects are carefully planned in high-growth destinations with excellent connectivity, infrastructure, and long-term value appreciation.",
      icon: <FaLocationArrow />,
      color: "bg-emerald-500",
      iconColor: "#1aa85e",
      titleColor: "text-[#1aa85e]",
    },
    {
      href: "/about",
      title: "Quality Construction & Engineering",
      text: "Every SRK development is built using advanced construction technology, durable materials, and strict quality standards to deliver structures that stand the test of time.",
      icon: <FaTools />,
      color: "bg-green-600",
      iconColor: "#17b51b",
      titleColor: "text-[#17b51b]",
    },
    {
      href: "/about",
      title: "Customer-First Philosophy",
      text: "At SRK, customer satisfaction is our highest priority. We listen, understand, and provide dedicated support even after the purchase — building relationships based on trust.",
      icon: <FaUsers />,
      color: "bg-indigo-700",
      iconColor: "#2f4ea2",
      titleColor: "text-[#2f4ea2]",
    },
    {
      href: "/about",
      title: "Legal Compliance & Safety",
      text: "All projects are APCRDA-compliant and approved by major banks and authorities, ensuring legal security, zero risk, and complete peace of mind for every buyer.",
      icon: <FaShieldAlt />,
      color: "bg-rose-400",
      iconColor: "#ff6b6b",
      titleColor: "text-[#ff6b6b]",
    },
  ];

  const teamMembers = [
    {
      image: "/images/ab_person1.png",
      name: "Mr. Sanikommu Thirupathi Reddy",
      role: "Founder & Director",
      paragraphs: [
        <>
          <strong>Mr. Sanikommu Thirupathi Reddy</strong> is a successful and noted
          builder with <strong>25 years of experience</strong> in the field of
          construction, real estate, and the building materials industry.
        </>,
        <>
          He is a well-recognized builder in the <strong>Prakasam and Guntur districts</strong>,
          delivering multiple successful projects. He established his own firms under
          the names <strong>SR Marketing</strong>, <strong>Sri Venkata Lakshmi Padmavathi Agencies</strong>,
          and <strong>Sri Rajeswari Agencies</strong>.
        </>,
        <>
          Mr. Reddy is a <strong>commerce graduate</strong> and continues to drive the company
          with strong leadership and visionary direction.
        </>,
      ],
    },
    {
      image: "/images/ab_person2.png",
      name: "Mr. CH Kalyan Ram",
      role: "Founder & Director",
      paragraphs: [
        <>
          <strong>Mr. Kalyan Ram</strong> is a commerce graduate with <strong>20+ years of experience</strong>
          in real estate and the building material industry. As the co-founder of SRK Infra Developers,
          he plays an integral role in conceptualizing and executing all the ventures.
        </>,
        <>
          He is responsible for strengthening the organization's <strong>overall framework</strong>,
          leading business growth across <strong>marketing, sales, operations, and finance</strong>.
        </>,
        <>
          His strategic decision-making and operational excellence continue to support the company's
          long-term growth, brand success, and market expansion.
        </>,
      ],
    },
    {
      image: "/images/ab_person3.png",
      name: "Mr. Garaga Sateesh",
      role: "Co-Founder & Director - Construction & Quality",
      paragraphs: [
        <>
          <strong>Mr. Sateesh Garaga</strong> is a passionate construction leader with strong expertise
          in <strong>project execution</strong> and <strong>quality management</strong>. He oversees
          end-to-end construction processes, ensuring structural safety, engineering precision, and
          long-lasting durability.
        </>,
        <>
          His commitment to excellence ensures that every project exceeds customer expectations. With a focus
          on <strong>transparency, trust, and uncompromising standards</strong>, he plays a crucial role in
          shaping high-quality developments.
        </>,
        <>
          He continues to strengthen the company's engineering capabilities through innovation and precision
          in every project.
        </>,
      ],
    },
    {
      image: "/images/ab_person4.png",
      name: "Mr. M Vijay Kumar",
      role: "Director - Sales & Marketing",
      paragraphs: [
        <>
          <strong>Mr. M. Vijay Kumar</strong> is an accomplished <strong>IT and MBA professional</strong>
          with <strong>20+ years of experience</strong> in sales, marketing, and business development.
          He has a proven record of driving business growth and building successful customer relationships
          across multiple industry sectors.
        </>,
        <>
          His strategic planning and market-focused approach strengthen the company's <strong>brand visibility</strong>
          and business expansion. Through strong leadership and customer engagement, he contributes to
          sustainable business success and long-term growth.
        </>,
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Poppins, sans-serif" }}>
        <section
          className="relative h-[420px] overflow-hidden bg-black bg-center bg-cover bg-fixed md:h-[460px]"
          style={{ backgroundImage: "url('/images/hero1.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/10" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-5xl">
              <h1
                className="text-[40px] font-semibold leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                style={{
                  WebkitTextStroke: "1px #2d7db1",
                  textShadow:
                    "0 2px 0 rgba(255,255,255,0.55), 0 4px 10px rgba(0,0,0,0.28)",
                }}
              >
                SRK&apos;S VISTAS
              </h1>

              <div className="mt-5 inline-flex bg-gradient-to-b from-[#7a3f13] via-[#b07a47] to-[#ffffff] px-4 py-1.5 shadow-lg">
                <p className="text-[0.95rem] font-semibold italic text-[#232d98] md:text-[1.2rem]">
                  Building Trust, Quality, and Value in Every Project
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-[28px] font-bold text-[#1e2a44]">
              Building Trust, Quality &amp; Future-Ready Communities
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#2f69ff]" />

            <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="flex items-start gap-5">
                  <a
                    href={feature.href}
                    aria-label={feature.title}
                    className={`group flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-transparent text-3xl text-white shadow-lg transition-all duration-300 hover:bg-white hover:border-[color:var(--icon-color)] ${feature.color}`}
                    style={{ "--icon-color": feature.iconColor }}
                  >
                    <span
                      className="transition-colors duration-300 group-hover:text-[color:var(--icon-color)]"
                    >
                      {feature.icon}
                    </span>
                  </a>

                  <div>
                    <h3 className={`text-[1.15rem] font-semibold leading-snug ${feature.titleColor}`}>
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-[320px] text-[13px] leading-[20px] text-[#51607a]">
                      {feature.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f8f8] px-2 py-5 md:px-3 md:py-6">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="text-center text-[28px] font-semibold text-[#16618f] md:text-[32px]">
              Meet Our Team
            </h2>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group bg-white px-3 py-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="h-44 w-44 overflow-hidden rounded-full bg-[#f4f4f4] shadow-md md:h-48 md:w-48">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <h3 className="mt-6 text-[22px] font-medium text-[#2c4f8a] transition-colors duration-300 group-hover:text-[#2f69ff]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#8a8a8a]">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-[12px] leading-[18px] text-[#1e1e1e] md:text-[13px] md:leading-[19px]">
                    {member.paragraphs.map((paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default About;