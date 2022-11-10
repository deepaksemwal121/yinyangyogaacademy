import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

interface Pages {
  children?: ReactNode;
}

const Layout = ({ children }: Pages) => {
  const [displayLogo, setDisplayLogo] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      setDisplayLogo(false);
    } else {
      setDisplayLogo(true);
    }
  };
  return (
    <div className="relative bg-white">
      {/* <MobileNav displayLogo={displayLogo} /> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
