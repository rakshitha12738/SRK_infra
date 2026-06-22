import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobCategory: "",
    email: "",
    contactNumber: "",
    resume: null,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!submitted) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  function handleChange(event) {
    const { name, value, files } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === "resume" ? files?.[0] ?? null : value,
    }));
  }

  function validate(values) {
    const nextErrors = {};
    const trimmedFullName = values.fullName.trim();
    const trimmedEmail = values.email.trim();
    const trimmedContactNumber = values.contactNumber.trim();
    const trimmedMessage = values.message.trim();

    if (!trimmedFullName) nextErrors.fullName = "Full name is required.";
    if (!values.jobCategory) nextErrors.jobCategory = "Select a job category.";
    if (!trimmedEmail) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!trimmedContactNumber) {
      nextErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(trimmedContactNumber.replace(/\D/g, ""))) {
      nextErrors.contactNumber = "Enter a valid 10-digit contact number.";
    }
    if (!values.resume) nextErrors.resume = "Upload your resume.";
    if (!trimmedMessage) nextErrors.message = "Message is required.";

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsLoading(true);
      setSubmitted(false);
      window.setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
        setFormData({
          fullName: "",
          jobCategory: "",
          email: "",
          contactNumber: "",
          resume: null,
          message: "",
        });
      }, 1200);
    }
  }

  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "Poppins, sans-serif" }} className="bg-[#f8f8f8]">
        <section className="w-full">
          <img
            src="/images/careers_img.png"
            alt="Careers banner"
            className="h-[340px] w-full object-cover object-center md:h-[420px]"
          />
        </section>

        <section className="px-4 py-8 md:px-8 md:py-12">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-[20px] font-semibold uppercase tracking-[0.08em] text-[#5f63b3] md:text-[26px]">
              Join Our Talent Network
            </h1>
            <p className="mx-auto mt-2 max-w-3xl text-[12px] leading-5 text-[#4a4a4a] md:text-[14px] md:leading-6">
              Enter your details and we will keep you informed about the exciting job opportunities with us.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white px-5 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.08)] md:px-10 md:py-10">
            <form className="space-y-6 md:space-y-7" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded border px-3 py-2 text-[12px] outline-none transition md:text-[13px] ${
                    errors.fullName ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-[11px] text-red-600">{errors.fullName}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="jobCategory">
                  Job Category *
                </label>
                <select
                  id="jobCategory"
                  name="jobCategory"
                  value={formData.jobCategory}
                  onChange={handleChange}
                  className={`w-full rounded border bg-white px-3 py-2 text-[12px] outline-none transition md:text-[13px] ${
                    errors.jobCategory ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                >
                  <option value="">Select job category</option>
                  <option value="Site Engineer">Site Engineer</option>
                  <option value="Business Development Manager">Business Development Manager</option>
                  <option value="Sales / Marketing">Sales / Marketing</option>
                  <option value="Site In-charge / Supervisor">Site In-charge / Supervisor</option>
                  <option value="Office Assistant">Office Assistant</option>
                  <option value="Tele-caller">Tele-caller</option>
                </select>
                {errors.jobCategory && <p className="mt-1 text-[11px] text-red-600">{errors.jobCategory}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded border px-3 py-2 text-[12px] outline-none transition md:text-[13px] ${
                    errors.email ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                />
                {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="contactNumber">
                  Contact Number *
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className={`w-full rounded border px-3 py-2 text-[12px] outline-none transition md:text-[13px] ${
                    errors.contactNumber ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                />
                {errors.contactNumber && <p className="mt-1 text-[11px] text-red-600">{errors.contactNumber}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="resume">
                  Upload Resume *
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className={`w-full rounded border px-3 py-2 text-[12px] outline-none transition file:mr-3 file:rounded file:border-0 file:bg-[#efefef] file:px-3 file:py-1 file:text-[12px] md:text-[13px] ${
                    errors.resume ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                />
                {errors.resume && <p className="mt-1 text-[11px] text-red-600">{errors.resume}</p>}
                {formData.resume && <p className="mt-1 text-[11px] text-[#4a4a4a]">Selected: {formData.resume.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="mb-1 block text-[11px] font-semibold text-[#1f1f1f] md:text-[12px]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className={`w-full rounded border px-3 py-2 text-[12px] outline-none transition md:text-[13px] ${
                    errors.message ? "border-red-400" : "border-[#d9d9d9]"
                  }`}
                />
                {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded bg-[#24408e] py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#1f377b] disabled:cursor-not-allowed disabled:opacity-80 md:text-[13px]"
              >
                {isLoading && <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />}
                {isLoading ? "Submitting..." : "Apply Now"}
              </button>

              {submitted && (
                <div className="rounded border border-[#28b04b] bg-white px-3 py-2 text-[12px] text-[#1d1d1d] shadow-sm md:px-4">
                  Thank you for your message. It has been sent.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default Careers;