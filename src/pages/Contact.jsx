import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    enquiry: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [submitted]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate(values) {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!values.enquiry) {
      newErrors.enquiry = "Please select enquiry type.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!values.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (
      !/^\d{10}$/.test(values.contact.replace(/\D/g, ""))
    ) {
      newErrors.contact =
        "Enter a valid 10-digit mobile number.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isLoading) return;

    const validationErrors = validate(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);

        setFormData({
          name: "",
          enquiry: "",
          email: "",
          contact: "",
          message: "",
        });
      }, 1200);
    }
  }

  return (
    <>
      <Navbar />

      <main
        className="bg-[#f7f7f7]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* HERO SECTION */}
        <section
          className="relative h-[420px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">
              Contact Us
            </h1>

            <p className="text-lg">
              Premium living spaces designed with passion
              and precision.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
<section className="bg-[#f2f2f2] py-14">
  <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">

    {/* Visit Office */}
    <div className="bg-white p-10 text-center shadow-sm">
      <FaMapMarkerAlt className="mx-auto mb-5 text-4xl text-green-600" />
      <h3 className="mb-4 text-xl font-semibold">Visit our office</h3>
      <Link
        to="/contact"
        className="text-gray-600 hover:text-[#24408e] transition duration-300"
      >
        D.No. 24-1-85
        <br />
        Prathuru, Tadepalli
        <br />
        Andhra Pradesh - 522501
      </Link>
    </div>

    {/* Mail Us */}
    <div className="bg-white p-10 text-center shadow-sm">
      <FaEnvelope className="mx-auto mb-5 text-4xl text-green-600" />
      <h3 className="mb-4 text-xl font-semibold">Mail Us</h3>
      <Link
        to="/contact"
        className="text-gray-600 hover:text-[#24408e] transition duration-300"
      >
        info@srkinfradev.com
      </Link>
    </div>

    {/* Call Us */}
    <div className="bg-white p-10 text-center shadow-sm">
      <FaPhoneAlt className="mx-auto mb-5 text-4xl text-green-600" />
      <h3 className="mb-4 text-xl font-semibold">Call Us</h3>
      <div className="space-y-2">
        <Link
          to="/contact"
          className="block font-medium hover:text-[#24408e] transition duration-300"
        >
          +91 96426 34567
        </Link>
        <Link
          to="/contact"
          className="block font-medium hover:text-[#24408e] transition duration-300"
        >
          +91 73793 34567
        </Link>
        <Link
          to="/contact"
          className="block font-medium hover:text-[#24408e] transition duration-300"
        >
          +91 94400 03583
        </Link>
      </div>
      <p className="mt-4 text-gray-500">Support Hours: 9 AM - 6 PM</p>
    </div>

  </div>
</section>


        {/* GET IN TOUCH */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-5xl font-bold">
              Get in touch
            </h2>

            <p className="text-gray-600">
              Have questions, need consultation, or want
              pricing details? Reach out and our support
              team will respond at the earliest.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl bg-white p-10 shadow-xl">

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* NAME */}
              <div>
                <label className="mb-2 block font-medium">
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded border p-3 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* ENQUIRY */}
              <div>
                <label className="mb-2 block font-medium">
                  Enquiry *
                </label>

                <select
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  className={`w-full rounded border p-3 ${
                    errors.enquiry
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">
                    Select Enquiry
                  </option>
                  <option value="Villas">
                    Villas
                  </option>
                  <option value="Plots">
                    Plots
                  </option>
                  <option value="Apartments">
                    Apartments
                  </option>
                </select>

                {errors.enquiry && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.enquiry}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded border p-3 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* CONTACT */}
              <div>
                <label className="mb-2 block font-medium">
                  Contact *
                </label>

                <input
                  type="text"
                  name="contact"
                  maxLength={10}
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter contact number"
                  className={`w-full rounded border p-3 ${
                    errors.contact
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contact}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block font-medium">
                  Message *
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className={`w-full rounded border p-3 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                w-full
                rounded
                bg-[#24408e]
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#1f377b]
                disabled:opacity-70
                "
              >
                {isLoading
                  ? "Submitting..."
                  : "Submit"}
              </button>

              {submitted && (
                <div className="rounded border border-green-500 bg-white p-3 text-sm shadow-sm">
                  Thank you for your message.
                  Your enquiry has been submitted
                  successfully.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="relative h-[450px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/cta.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-blue-950/80"></div>

          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">

            <h2 className="mb-4 text-5xl font-bold">
              Ready to Own Your Dream Property?
            </h2>

            <p className="mb-8 max-w-3xl">
              We’re here to guide you with expert
              support on villas, plots and investment
              opportunities. Connect with our team for
              pricing details, site visits and project
              consultations.
            </p>

            <a
              href="/contact"
              className="
              border
              border-white
              px-8
              py-3
              uppercase
              text-white
              transition-all
              duration-300
              hover:border-green-800
              hover:bg-green-800
            "
            >
              Contact Us
            </a>

          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Contact;