import { useState, useEffect } from "react";
import { NextPage } from "next";

import { heroImageArray } from "../components/Home/Images";

import { Header } from "../components/Header/Header";
import { OverLay } from "../components/UI/OverLay";
import { LandingHero } from "../components/Home/LandingHero";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import { EventHero } from "../components/Events/EventHero";
import { Footer } from "../components/Footer/Footer";

const Events: NextPage = () => {
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
        <LandingHero images={heroImageArray} title="Private Events" />
      </OverLay>

      <MainBackgroundImage>
        <EventHero />
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </>
  );
};

export default Events;
