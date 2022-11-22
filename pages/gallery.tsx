import { useState, useEffect } from "react";
import { NextPage } from "next";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import { HeroGallery } from "../components/Gallery/HeroGallery";
import classNames from "classnames";

const Gallery: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [navBarScrolled, setNavBarScrolled] = useState<boolean>(false);

  const isMobile = innerWidth <= 767;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };

  useEffect(() => {
    changeWidth();
    changeBackground();
    window.addEventListener("resize", changeWidth);
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("resize", changeWidth);
      window.removeEventListener("scroll", changeBackground);
    };
  }, [isMobile]);

  return (
    <div
      className={classNames("flex flex-col justify-between", {
        "h-screen": !isMobile,
      })}
    >
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />

      <MainBackgroundImage isMobile={isMobile}>
        <HeroGallery isMobile={isMobile} />
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </div>
  );
};

export default Gallery;
