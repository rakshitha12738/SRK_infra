import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-gray-100 bg-white font-[Poppins,sans-serif]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-12 object-contain"
        />

        <nav>
          <ul className="flex items-center gap-8 text-[14px] font-bold uppercase tracking-wide text-blue-900">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>

            <li
              className="group relative cursor-pointer"
              onMouseEnter={() => setOpen(true)}
            >
              <button
                type="button"
                className="flex items-center gap-2"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
              >
                <span>PROJECTS</span>
                <span className="text-[10px] leading-none">▼</span>
              </button>
              {open && (
  <ul className="absolute left-0 mt-3 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
    <li>
      <Link
        to="/villas"
        className="block px-6 py-4 text-left text-[14px] font-semibold uppercase tracking-wide text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:underline hover:text-blue-600"
        onClick={() => setOpen(false)}
      >
        Villas
      </Link>
    </li>

    <li>
      <Link
        to="/plots"
        className="block px-6 py-4 text-left text-[14px] font-semibold uppercase tracking-wide text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:underline hover:text-blue-600"
        onClick={() => setOpen(false)}
      >
        Plots
      </Link>
    </li>

    <li>
      <Link
        to="/apartments"
        className="block px-6 py-4 text-left text-[14px] font-semibold uppercase tracking-wide text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:underline hover:text-blue-600"
        onClick={() => setOpen(false)}
      >
        Apartments
      </Link>
    </li>
  </ul>
)}
                  
            </li>

            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
