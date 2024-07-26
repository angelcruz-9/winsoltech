import React from "react";
import Navigation from "./navigation"; // Adjust the path as needed

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white p-4 flex justify-between items-center w-full shadow-lg z-50">
      <div className="container-common flex justify-between items-center">
        <div className="text-white text-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            alt="Winsoltech"
            width={50}
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
