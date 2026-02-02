const Navbar = () => {
  return (
    <div className="flex flex-row justify-center w-full items-center">
      <div className="main-nav h-full">
        <ul className="flex bg-white/30 backdrop-filter backdrop-blur-md bg-opacity-5 border rounded-full border-gray-100  shadow-amber-300">
          <li className="">Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
