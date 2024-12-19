import profile from "../assets/sokthy.jpg";
import Skills from "./Skills";
const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen flex-col md:flex-row flex items-center justify-center gap-6 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <section id="about" className="mb-16 mt-16">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-pink-400">
            <span className="text-sm font-bold mb-4 text-white">
              Hi, my name is
            </span>
            <br />
            THORN SOKTHY.
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            I'm a{" "}
            <span className="text-green-400">Software & Web Developer</span>
          </h2>
          <p className="max-w-2xl mb-6">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human- centered products at Upstatement.
          </p>
          <button className="bg-transparent border border-pink-400 text-pink-400 px-6 py-2 rounded hover:bg-pink-400 hover:text-white transition-colors">
            Contact Me
          </button>
        </section>
        <section className="w-[300px] md:w-[25%] rounded-full overflow-hidden">
          <img
            className="w-full"
            src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp"
          />
        </section>
      </div>
      <div className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
