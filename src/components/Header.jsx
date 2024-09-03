import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      className={`fixed top-0 z-10 flex h-14 px-4 md:px-24 lg:px-40 justify-between items-center w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800 bg-opacity-70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link to="/">
        <h1 className="text-gradient text-3xl drop-shadow-green">THY.</h1>
      </Link>

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

      <button className="text-3xl block sm:hidden" onClick={toggleMobileMenu}>
        <i className="bx bx-menu-alt-right"></i>
      </button>

      <nav
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm bg-gray-800 text-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMobileMenu}
        >
          <i className="bx bx-x"></i>
        </button>

        <ul className="flex flex-col items-center mt-16 space-y-4">
          <li>
            <Link
              className="transition-all duration-75 hover:text-green-400"
              to="/"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition-all duration-75 hover:text-green-400"
              to="/about"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="transition-all duration-75 hover:text-green-400"
              to="/project"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="transition-all duration-75 hover:text-green-400"
              to="/contact"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
