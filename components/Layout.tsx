import React, { ReactNode } from "react";
import Header from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

interface Pages {
  children?: ReactNode;
}
const Layout = ({ children }: Pages) => {
  return (
    <div className="relative bg-white">
      {/* <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
