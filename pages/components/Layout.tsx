import React, { ReactNode } from "react";
import Header from "./Header";

interface Pages {
  children?: ReactNode;
}
const Layout = ({ children }: Pages) => {
  return (
    <div className="bg-white">
      {/* <Header /> */}
      {children}
    </div>
  );
};

export default Layout;
