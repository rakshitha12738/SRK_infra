import {
  FaHandshake,
  FaBuilding,
  FaCog,
  FaUsers,
} from "react-icons/fa";

function WhyChooseUs() {

  const cards = [
    {
      title: "Trust & Transparency",
      icon: <FaHandshake />,
      color: "bg-blue-900",
      text: "At SRK Infra Developers, integrity is at the heart of everything we build. We believe every customer deserves clear communication, honest commitments, and complete visibility throughout their investment journey. Our transparent process ensures confidence and peace of mind at every stage of development — from planning to handover."
    },
    {
      title: "Engineering Excellence",
      icon: <FaBuilding />,
      color: "bg-red-700",
      text: "Our projects are powered by world-class engineering standards, modern construction technology, and uncompromised quality. With a strong focus on durability, safety, and precision, we create structures built to last and designed to perform. Every detail is carefully planned to deliver long-term value and reliability."
    },
    {
      title: "Future Ready Designs",
      icon: <FaCog />,
      color: "bg-green-700",
      text: "We build communities that reflect tomorrow’s lifestyle needs — blending smart planning, innovative amenities, and sustainable design principles. Our spaces are crafted to enhance everyday living, support well-being, and evolve with time, ensuring comfort, functionality, and modern living experiences."
    },
    {
      title: "Customer Centric",
      icon: <FaUsers />,
      color: "bg-yellow-700",
      text: "At SRK, our customers come first. We listen, understand, and deliver beyond expectations — offering personalized support, timely updates, and dedicated service throughout the journey. Our mission is not just to build properties, but to build lifelong relationships based on trust and satisfaction."
    },
  ];

  return (
    <section className="bg-white py-16">

      <h2 className="
      text-center
      text-5xl
      font-bold
      text-[#2d6cb7]
      mb-14">

        Why to choose SRK

      </h2>

      <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-4
      gap-6
      px-6">

        {cards.map((card, index) => (

                    <div
            key={index}
            className="
              bg-white
              rounded-2xl
              shadow-xl
              p-8
              text-center
              transform
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >



            <div
              className={`
              w-20
              h-20
              rounded-full
              text-white
              flex
              items-center
              justify-center
              text-3xl
              mx-auto
              mb-6
              ${card.color}
              `}
            >
              {card.icon}
            </div>

            <h3 className="font-semibold mb-4">
              {card.title}
            </h3>

            <p className="italic text-gray-600 text-sm">
              {card.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
