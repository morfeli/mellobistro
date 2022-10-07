import type { NextPage } from "next";
import { useState, useEffect } from "react";
import classnames from "classnames";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Home/Hero";
import { HeroImage } from "../components/Home/LandingHero";

import { useMelloContext } from "../components/helper/useMelloContext";

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [navBarScrolled, setNavBarScrolled] = useState<boolean>(false);

  const isMobile = innerWidth <= 767;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  const melloCtx = useMelloContext();

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

  let mainStyles;

  if (!melloCtx.mode) {
    mainStyles = classnames("bg-wallpaper");
  } else {
    mainStyles = classnames("bg-red-300");
  }

  return (
    <>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <main className={mainStyles}>
        <HeroImage />
        <Hero innerWidth={innerWidth} />
      </main>
    </>
  );
};

export default Home;
