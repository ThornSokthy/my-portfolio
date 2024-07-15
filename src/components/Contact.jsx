const Contact = () => {
  return (
    <section className="grid place-content-center h-[90vh] px-6 relative">
      <div className="w-[450px] sm:w-[500px] md:w-[600px] lg:w-[800px]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Contact.
        </h1>
        <p className="text-sm md:text-xl mt-2">
          Get in touch or shoot me an email directly on{" "}
          <strong>sokthythorn@gmail.com</strong>
        </p>
        <form className="flex flex-col gap-4 mt-5 w-full">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-4 py-2 rounded-md outline-none shadow-sm shadow-[#666] border-2 border-gray-600 bg-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-4 py-2 rounded-md outline-none shadow-sm shadow-[#666] border-2 border-gray-600 bg-transparent"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full pl-4 py-2 rounded-md outline-none shadow-sm shadow-[#666] border-2 border-gray-600 bg-transparent"
          />
          <button
            type="submit"
            className="mt-3 self-start px-8 py-2 rounded-full shadow-sm shadow-[#c060fc] bg-[#c060fc] text-white"
          >
            Send Message
          </button>
        </form>
        <button className="absolute left-8 md:left-20 bottom-[-2rem] flex items-center gap-4">
          Go Back Home <i className="bx bxs-right-arrow-alt text-xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Contact;
