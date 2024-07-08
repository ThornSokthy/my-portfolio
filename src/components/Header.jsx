const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex h-14 bg-transparent px-4 md:px-24 lg:px-40 justify-between items-center w-full">
      <h1 className=" text-gradient text-3xl">THY.</h1>
      <ul className="gap-8 hidden sm:flex">
        <li>About</li>
        <li>My Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
