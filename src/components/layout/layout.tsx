import React, { ReactNode } from "react";
import Navigation from "../header/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
