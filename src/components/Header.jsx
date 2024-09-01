import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="fixed top-0 z-10 flex h-14 bg-transparent px-4 md:px-24 lg:px-40 justify-between items-center w-full">
      <Link to="/">
        <h1 className=" text-gradient text-3xl drop-shadow-green">THY.</h1>
      </Link>

      <nav className="gap-8 hidden sm:flex">
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
        className=" text-3xl block sm:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        <i class="bx bx-menu-alt-right"></i>
      </button>
    </header>
  );
};

export default Header;
