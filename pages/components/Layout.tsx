import React, { ReactNode } from "react";
import Header from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Pages {
  children?: ReactNode;
}
const Layout = ({ children }: Pages) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
