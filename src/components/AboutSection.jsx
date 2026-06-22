function AboutSection() {
  return (
    <section className="bg-[#dedbdb] py-5">

      <div className="max-w-5xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="
            text-5xl
            font-bold
            text-[#2d6cb7]
            mb-6">

              SRK AT A GLANCE

            </h2>

            <p className="text-black-700 leading-6">
              At SRK Infra Developers, we are driven by trust, transparency, and a commitment to redefining real estate standards. We create exceptional living and working environments through modern design, quality construction, and sustainable development.With a passion for innovation and excellence, we build thoughtfully planned communities that enrich lifestyles and deliver long-term value.
For us, building is more than construction — it is about creating meaningful spaces where families grow and businesses thrive.
            </p>

          </div>

          <div>

            <img
              src="/images/family.png"
              alt=""
              className="w-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;