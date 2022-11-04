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
        <h1 className="pt-8 text-2xl text-center">3 Course Menu Special</h1>
        <p className="p-4 text-lg leading-8 text-center md:px-20 md:leading-10 md:text-xl lg:px-32">
          Join us from Monday - Friday durning the hours of 11am - 3pm for a 3
          course menu special starting at $28.95. Includes an appetizer, main
          course, dessert, coffee or tea. We frequently update our 3 course menu
          to provide a varity of healthy options. Feel free to call us in
          advance to learn more about what we are offering.
        </p>
        <p></p>
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
