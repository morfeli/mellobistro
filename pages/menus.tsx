import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";

import { OverLay } from "../components/UI/OverLay";
import { LandingHero } from "../components/Home/LandingHero";
import { Footer } from "../components/Footer/Footer";

import heroImageArray from "../components/Home/Images";
import { MenuData } from "../components/Menu/MenuData";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import { MenuCards } from "../components/Menu/MenuCards";
import { MenuCard } from "../components/Menu/MenuCard";

export interface ChildrenProps {
  children: React.ReactNode;
}

const Menus: NextPage = () => {
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

  const { apps, carni, kids, pasta, pesce, pollo, sides, speciality, salads } =
    MenuData[0];

  return (
    <>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <OverLay>
        <LandingHero images={heroImageArray} />
      </OverLay>

      <MainBackgroundImage>
        <MenuCards>
          <div className="md:w-50vw">
            <MenuCard data={apps} title="Appetizers" />
            <MenuCard data={salads} title="Salads" />
            <MenuCard data={pasta} title="Pasta" />
            <MenuCard data={carni} title="Carni" />
          </div>
          <div className="md:w-50vw">
            <MenuCard data={pollo} title="Pollo" />
            <MenuCard data={pesce} title="Pesce" />
            <MenuCard data={speciality} title="Speciality" />
            <MenuCard data={kids} title="Kids" />
            <MenuCard data={sides} title="Sides" />
          </div>
        </MenuCards>
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </>
  );
};

export default Menus;
