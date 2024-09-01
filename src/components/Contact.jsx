const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <section id="contact" className="w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
