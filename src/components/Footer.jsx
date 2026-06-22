import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-[#ded4d4] px-6 pt-6 text-[#111827]"
      style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px" }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 pb-10 md:grid-cols-[1.35fr_0.9fr] md:gap-20">
        <div className="space-y-6 leading-6">
          <div>
            <h3 className="mb-1 font-bold">Head Office</h3>
            <p>D.No. 24-1-85, Prathuru, Tadepalli,</p>
            <p>Andhra Pradesh - 522501</p>
          </div>

          <div>
            <h3 className="mb-1 font-bold">Registered Office</h3>
            <p>Bandar Road, Poranki, Vijayawada - 521137,</p>
            <p>Andhra Pradesh, India.</p>
          </div>

          <div>
            <h3 className="mb-1 font-bold">Phone:</h3>
            <p>+91 96426 34567</p>
            <p>+91 73793 34567</p>
            <p>+91 94400 03583</p>
          </div>

          <div>
            <h3 className="mb-1 font-bold">Email:</h3>
            <p>info@srkinfradev.com</p>
          </div>

          <div>
            <h3 className="mb-1 font-bold">Location:</h3>
            <a
              href="https://share.google/NlN7YTMUQ6ev3v4ac"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[#1d73ff] transition-colors hover:text-[#1556c2] hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="leading-6">
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <ul className="space-y-1 text-[#1d73ff]">
            <li>
              <Link to="/" className="transition-colors hover:text-[#1556c2] hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-[#1556c2] hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-[#1556c2] hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="transition-colors hover:text-[#1556c2] hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/careers" className="transition-colors hover:text-[#1556c2] hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-[#1556c2] hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 pb-4 pt-4">
        <div className="relative min-h-[78px]">
          <p className="text-center text-[12px] text-[#111827]">
            © 2025 SRK Infra Developers - All Rights Reserved
          </p>

          <div className="mt-14 flex items-center justify-center gap-5">
            <a href="https://www.facebook.com/SriRadhaKrishnaDevelopers" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-[#1877f2] transition-transform hover:-translate-y-0.5">
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sriradhakrishnadevelopers?fbclid=IwY2xjawOgxrlleHRuA2FlbQIxMABicmlkETFKVk1MQ1diOVFJU0h4MUxxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgcTNstj0qRVWXa5RoZICYiuxIVq0BxDOf5iwrdc4tqLa0keiUKPgQDyOyEn_aem_o_OvVfyYqNtgWwVmJdcK0A"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:-translate-y-0.5"
            >
              <FaInstagram className="text-[#e1306c]" />
            </a>
            <a href="https://www.youtube.com/@SriRadhaKrishnaDevelopers" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[#ff0000] transition-transform hover:-translate-y-0.5">
              <FaYoutube />
            </a>
          </div>

          <div
            className="box-border absolute right-0 -top-[-25px] block w-[275px] text-right text-[12px] font-semibold leading-[18px] text-[rgb(33,37,41)]"
            style={{
              WebkitFontSmoothing: "antialiased",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              textSizeAdjust: "100%",
            }}
          >
            Powered by{" "}
            <a
              href="https://vhub.in/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-current underline-offset-2 transition-colors hover:text-[#1d73ff]"
            >
              vhub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;