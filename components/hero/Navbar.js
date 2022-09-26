import { useState } from "react";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" pill variant="outline-yellow">
            Contact me
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="/icon/menu.svg"
            alt="menu"
            className="inline-block cursor-pointer"
            onClick={() => setShowNav(true)}
          />
        </div>
      </div>

      {/* Side nav menu */}
      <div
        className={`fixed bg-hero z-99 top-0 h-full w-full transition-all p-10 md:hidden ${
          showNav ? "right-0" : "-right-full"
        }`}
      >
        <img
          src="/icon/x.svg"
          alt="close"
          className="cursor-pointer transition-all absolute top-10 right-10 w-6 "
          onClick={() => setShowNav(false)}
        />
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  );
};

export default Navbar;
