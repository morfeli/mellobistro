import { useState, useEffect } from "react";
import { NextPage } from "next";

import { Header } from "../components/Header/Header";
import { LandingHero } from "../components/Home/LandingHero";
import { HeroAbout } from "../components/About/HeroAbout";
import { Footer } from "../components/Footer/Footer";

import { OverLay } from "../components/UI/OverLay";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import heroImageArray from "../components/Home/Images";

const About: NextPage = () => {
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
    <div>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <OverLay>
        <LandingHero images={heroImageArray} title="About" />
      </OverLay>

      <MainBackgroundImage>
        <HeroAbout />
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </div>
  );
};

export default About;
