import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { Hero } from "../components/Home/Hero";
import { OverLay } from "../components/UI/OverLay";
import { LandingHero } from "../components/Home/LandingHero";
import { Footer } from "../components/Footer/Footer";

import { heroImageArray } from "../components/Home/Images";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";

export interface ChildrenProps {
  children: React.ReactNode;
}

const Home: NextPage = () => {
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
    <>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <OverLay>
        <LandingHero images={heroImageArray} />
      </OverLay>

      <MainBackgroundImage>
        <Hero innerWidth={innerWidth} />
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </>
  );
};

export default Home;
