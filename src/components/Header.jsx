import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 flex h-14 px-4 md:px-24 lg:px-40 justify-between items-center w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800 bg-opacity-70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link to="/">
        <h1 className="text-gradient text-3xl drop-shadow-green">THY.</h1>
      </Link>

      {/* Desktop Menu */}
      <nav className="gap-8 hidden sm:flex">
        <Link
          className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
          to="/"
        >
          Home
        </Link>
        <Link
          className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
          to="/about"
        >
          About
        </Link>
        <Link
          className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
          to="/project"
        >
          Projects
        </Link>
        <Link
          className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
          to="/contact"
        >
          Contact
        </Link>
      </nav>

      <button
        onClick={toggleMobileMenu}
        className="text-3xl block sm:hidden"
        aria-label="Toggle Menu"
      >
        <i className="bx bx-menu-alt-right"></i>
      </button>

      {isMobileMenuOpen && (
        <div className=" z-10 absolute top-0 right-0 w-64 pt-16 h-[100vh] bg-gray-800 bg-opacity-90 backdrop-blur-md flex flex-col gap-4 items-center py-4 px-6 sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl absolute left-4 top-4 block sm:hidden"
            aria-label="Toggle Menu"
          >
            <i class='bx bx-x'></i>
          </button>

          <Link
            className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
            to="/project"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="transition-all duration-75 hover:drop-shadow-green hover:text-green-400"
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
