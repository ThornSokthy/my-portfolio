const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <section id="about" className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hi, my name is
          <br />
          <span className="text-pink-400">THORN SOKTHY.</span>
        </h1>
        <h2 className="text-3xl font-bold mb-4">
          I'm a <span className="text-green-400">Software & Web Developer</span>
        </h2>
        <p className="max-w-2xl mb-6">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human- centered products at Upstatement.
        </p>
        <button className="bg-transparent border border-pink-400 text-pink-400 px-6 py-2 rounded hover:bg-pink-400 hover:text-white transition-colors">
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
