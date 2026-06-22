import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Blog() {
  const galleryItems = [
    {
      image: "/images/blog/pooja1.png",
      caption:
        "Project site prepared for the Bhoomi Pooja and foundation rituals.",
    },
    {
      image: "/images/blog/pooja2.png",
      caption:
        "Traditional Bhoomi Pooja setup with sacred kalash, offerings, and pooja materials.",
    },
    {
      image: "/images/blog/pooja3.png",
      caption:
        "Priest conducting sacred rituals and homam invoking divine blessings.",
    },
    {
      image: "/images/blog/pooja4.png",
      caption:
        "A token of appreciation respectfully presented to Banda Uma garu, MLA, TDP, for gracing the occasion.",
    },
    {
      image: "/images/blog/pooja5.png",
      caption:
        "Warm welcome and interaction with guests during the Bhoomi Pooja ceremony.",
    },
    {
      image: "/images/blog/pooja6.png",
      caption:
        "Token of appreciation presented to honor guests and participants.",
    },
  ];

  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Poppins, sans-serif" }}>
        <section className="w-full pt-0">
    
          <img
            src="/images/blog/blog_hero.png"
            alt="Blog banner placeholder"
            className="h-[320px] w-full object-cover md:h-[420px]"
          />
        </section>

        <section className="bg-white px-4 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-6xl">
            <h1 className="mt-10 mb-6 text-center text-[30px] font-extrabold leading-tight text-[#31339c] md:text-[34px]">
              Bhoomi Pooja for SRK VISTAS
            </h1>

            <div className="grid gap-x-0 gap-y-10 lg:grid-cols-4">
              {galleryItems.map((item, index) => (
                <article key={item.caption} className="flex flex-col">
                  {/* Replace the image paths in galleryItems above with your final photos. */}
                  <a
                    href={item.image}
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("openLightbox", { detail: index }));
                    }}
                    title="Open image"
                    className="group block h-[180px] overflow-hidden bg-[#f4f4f4] md:h-[190px]"
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                  <p className="px-4 pt-3 text-center text-[12px] italic leading-[18px] text-[#3d3d3d] md:text-[13px] md:leading-[20px]">
                    {item.caption}
                  </p>
                </article>
              ))}
            </div>

            {/* Lightbox modal */}
            {typeof window !== "undefined" && (
              <Lightbox
                items={galleryItems}
              />
            )}
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Blog;

function Lightbox({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleOpen(e) {
      setCurrent(Number(e.detail) || 0);
      setIsOpen(true);
    }
    function handleKeys(e) {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % items.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + items.length) % items.length);
      if (e.key === "z") setZoom((z) => !z);
    }
    window.addEventListener("openLightbox", handleOpen);
    window.addEventListener("keydown", handleKeys);
    function onFullChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFullChange);
    return () => {
      window.removeEventListener("openLightbox", handleOpen);
      window.removeEventListener("keydown", handleKeys);
      document.removeEventListener("fullscreenchange", onFullChange);
    };
  }, [isOpen, items.length]);

  if (!isOpen) return null;

  const item = items[current];
  const filename = item.image.split("/").pop();

  function prev() {
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }
  function next() {
    setCurrent((c) => (c + 1) % items.length);
  }

  function toggleZoom() {
    setZoom((z) => !z);
  }

  function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (containerRef.current && containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } catch {
      // ignore
    }
  }

  function downloadImage() {
    const a = document.createElement("a");
    a.href = item.image;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={() => setIsOpen(false)}
    >
      <div ref={containerRef} className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
        <div className={zoom ? "overflow-auto max-h-[80vh]" : ""}>
          <img
            src={item.image}
            alt={item.caption}
            className={`block ${
              zoom
                ? "transform scale-150"
                : isFullscreen
                ? "w-screen h-screen object-contain"
                : "max-h-[80vh] w-auto object-contain"
            } shadow-xl`}
          />
        </div>

        {/* Counter (top-left) - fixed to page corner */}
        <div className="fixed left-3 top-3 z-60 text-white text-sm bg-black/50 px-3 py-1 rounded">
          {current + 1} / {items.length}
        </div>

        {/* Top-right action icons - fixed to page corner in one row */}
        <div className="fixed right-3 top-3 z-60 flex items-center gap-2">
          <button
            onClick={toggleZoom}
            className="text-white bg-black/50 p-2 rounded"
            title="Zoom"
          >
            🔍
          </button>
          <button
            onClick={toggleFullscreen}
            className="text-white bg-black/50 p-2 rounded"
            title="Fullscreen"
            aria-label="Fullscreen"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v3" />
              <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
          <button
            onClick={downloadImage}
            className="text-white bg-black/50 p-2 rounded"
            title="Download"
          >
            ⬇
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white bg-black/50 p-2 rounded"
            aria-label="Close"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Prev/Next */}
        <button
          onClick={prev}
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-white hidden md:block"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-white hidden md:block"
          aria-label="Next"
        >
          ▶
        </button>

      </div>
    </div>
  );
}