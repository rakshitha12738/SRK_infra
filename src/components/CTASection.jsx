function CTASection() {
  return (

    <section
      className="
      relative
      h-[500px]
      bg-cover
      bg-center
      bg-fixed"
      style={{
        backgroundImage:
          "url('/images/cta.jpg')",
        backgroundAttachment: "fixed",
      }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="
      relative
      h-full
      flex
      flex-col
      items-center
      justify-center">

        <h2 className="
        text-white
        text-5xl
        font-semibold
        mb-6">

          Looking for a Trusted Real Estate Partner?

        </h2>

        <a
          href="tel:+919642634567"
          className="
          bg-green-500
          text-white
          px-8
          py-3
          rounded
          transition-all
          duration-200
          hover:underline
          hover:underline-offset-4">
          Call Now
        </a>

      </div>

    </section>

  );
}

export default CTASection;