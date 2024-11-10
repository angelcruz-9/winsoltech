import React, { useState, useEffect } from "react";
import Navigation from "./navigation"; // Adjust the path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <div
      className={`fixed top-0 left-0 right-0 p-4 flex justify-between items-center w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-common flex justify-between items-center w-full">
        <div className="text-white text-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Winsoltech"
            width={50}
          />
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
