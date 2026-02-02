import Navbar from "./Navbar";
import ResponsiveNav from "./ResponsiveNav";
import Logo from "./Logo";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import TalkButton from "./TalkButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="navbar flex flex-col" id="navbar">
      {/* Desktop Menu */}

      <div className="nav-menu bg-[#0f0f0f] p-10 gap-2 md:flex flex-row items-center align-middle hidden">
        <div className="nav-menu w-full flex items-center align-middle">
          <Logo />
          <Navbar />

          <TalkButton />
        </div>
      </div>
      {/* Desktop Menu Ends */}
      {/* Responsive menu starts */}
      <div className="toggle-button text-black w-full flex p-2.5 md:hidden items-center justify-between bg-[#0f0f0f]">
        <div
          className="toggle text-[#F1F4F9] w-1/3"
          onClick={() => setIsOpen(true)}
        >
          <FaBarsStaggered />
        </div>
        <div className="logo w-1/3">
          <Logo />
        </div>
        <div className="contact text-[#F1F4F9] flex">
          <TalkButton />
        </div>
      </div>
      <div
        className={`nav-menu-responsive md:hidden w-[40%] md:flex-row md:items-end pt-5 p-2 transform transition-transform duration-300 ease-in-out bg-[#0f0f0f] h-screen fixed left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="toggle text-white flex flex-row justify-end pr-2"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 />
        </div>
        <ResponsiveNav />
      </div>
      {/* Responsive menu ends */}
    </div>
  );
};

export default Header;
