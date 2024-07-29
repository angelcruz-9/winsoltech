import React from "react";
import { Link } from "react-router-dom";
import About from "../about/about";
import Cards from "./cards";

function Home() {
  const headerText = "WINSOLTECH offers an extensive range of solutions to its clients to implement and upgrade best practices in health care industry."

  return (
    <>
      <div className="bg-gray-700">
        <div className="container-common relative py-52">
          <h1 className="text-3xl font-bold text-white leading-[38px] text-center">
            {headerText}
          </h1>
          <div className="flex justify-center items-center mt-8">
            <Link
              href="#"
              target="_blank"
              className="py-2 px-6 border border-secondary bg-secondary border-solid rounded-xl mr-8"
            >
              Our Service
            </Link>
            <Link
              href="#"
              target="_blank"
              className="py-2 px-6 border border-primary bg-primary text-white border-solid rounded-xl"
            >
              Contact Us
            </Link>
          </div>
          <Cards />
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
