import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// FIXED: Removed the invalid "react-serif" import completely
import { FaArrowLeft as ArrowLeftIcon, FaArrowRight as ArrowRightIcon } from "react-icons/fa";

function HeroSlider() {
  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "SRK's Vistas",
      subtitle: "Premium Villas, Plots and Apartments in Vijayawada",
      buttonLabel: "Projects",
      buttonTo: "/projects",
    },
    {
      image: "/images/hero2.jpg",
      title: "Luxury Villas",
      subtitle: "Vibrance Meets Sophistication",
      buttonLabel: "Villas",
      buttonTo: "/villas",
    },
    {
      image: "/images/hero3.jpg",
      title: "SRK Sri Balaji Open Plots",
      subtitle: "Approved layouts with reliable infrastructure",
      buttonLabel: "Plots",
      buttonTo: "/plots",
    },
  ];

  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(null);
  const dragEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
    dragEndX.current = event.clientX;
  };

  const handlePointerMove = (event) => {
    if (dragStartX.current === null) return;
    dragEndX.current = event.clientX;
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null || dragEndX.current === null) {
      dragStartX.current = null;
      dragEndX.current = null;
      return;
    }

    const distance = dragEndX.current - dragStartX.current;
    if (Math.abs(distance) > 40) {
      if (distance < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    dragStartX.current = null;
    dragEndX.current = null;
  };

  return (
    <section className="bg-[#f3f3f3] py-10">
      <div className="max-w-6xl mx-auto relative">
        <img
          src={slides[current].image}
          alt=""
          className="w-full h-[650px] object-cover shadow-xl rounded-lg"
        />

        <style>{`
          @keyframes heroRise {
            from {
              opacity: 0;
              transform: translateY(48px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 px-6 text-center"
          style={{ fontFamily: "Poppins, sans-serif" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div key={current} className="max-w-4xl">
            <h1
              className="text-3xl font-bold text-white md:text-2xl"
              style={{ animation: "heroRise 0.7s ease-out both" }}
            >
              {slides[current].title}
            </h1>
            <p
              className="mt-1 text-base text-white/95 md:text-xl"
              style={{ animation: "heroRise 0.7s ease-out 0.15s both" }}
            >
              {slides[current].subtitle}
            </p>

            <Link
              to={slides[current].buttonTo}
              className="mt-6 inline-flex rounded-sm border-2 border-white bg-[#44793a] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#3b6832] hover:underline hover:underline-offset-4 md:text-base"
              style={{ animation: "heroRise 0.7s ease-out 0.3s both" }}
            >
              {slides[current].buttonLabel}
            </Link>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center"
        >
          <ArrowLeftIcon className="text-blue-900" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center"
        >
          <ArrowRightIcon className="text-blue-900" />
        </button>
      </div>
    </section>
  );
}

export default HeroSlider;