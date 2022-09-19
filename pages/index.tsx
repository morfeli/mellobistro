import type { NextPage } from "next";
import { useState, useEffect } from "react";
import classnames from "classnames";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { HeroHome } from "../components/Hero/HeroHome";
import { HeroHomeSlider } from "../components/Hero/HeroHomeSlider";
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
    mainStyles = classnames("pt-12 bg-wallpaper h-screen");
  } else {
    mainStyles = classnames("pt-12 bg-red-300 h-screen");
  }

  return (
    <div>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <HeroHomeSlider />
      <main className={mainStyles}>
        <HeroHome />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
