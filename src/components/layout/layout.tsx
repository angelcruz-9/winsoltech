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
      {/* Main content will grow to fill available space */}
      <div>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
