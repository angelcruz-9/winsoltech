import React, { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
