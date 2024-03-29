import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";

import { OverLay } from "../components/UI/OverLay";
import { LandingHero } from "../components/Home/LandingHero";
import { Footer } from "../components/Footer/Footer";

import { heroImageArray } from "../components/Home/Images";
import { MenuData } from "../components/Menu/MenuData";
import { BrunchMenuData } from "../components/Menu/MenuData";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import { MenuCards } from "../components/Menu/MenuCards";
import { MenuCard } from "../components/Menu/MenuCard";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/UI/Tabs";

export interface ChildrenProps {
  children: React.ReactNode;
}

const Menu: NextPage = () => {
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

  const {
    antipasta,
    carni,
    kids,
    pasta,
    pesce,
    pollo,
    sides,
    speciality,
    salads,
    desserts,
  } = MenuData[0];

  const { main, brunchSides, beverages } = BrunchMenuData[0];

  const coffee = beverages.at(0)!.coffee!;
  const juices = beverages.at(1)!.juices!;
  const cocktails = beverages.at(2)!.cocktails!;

  return (
    <>
      <Header isMobile={isMobile} navBarScrolled={navBarScrolled} />
      <OverLay>
        <LandingHero images={heroImageArray} title="Menus" />
      </OverLay>

      <MainBackgroundImage>
        <Tabs defaultValue="mainMenu">
          <div className="mx-auto w-[200px] pt-4">
            <TabsList className="bg-slate-50">
              <TabsTrigger value="mainMenu" className="TabsTrigger">
                Main Menu
              </TabsTrigger>
              <TabsTrigger value="bruncMenu" className="TabsTrigger">
                Brunch Menu
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="mainMenu">
            <MenuCards>
              <div className="md:w-50vw">
                <MenuCard data={antipasta} title="Antipasta" />
                <MenuCard data={salads} title="Salads" />
                <MenuCard data={pasta} title="Pasta" />
                <MenuCard data={carni} title="Carni" />
              </div>
              <div className="md:w-50vw">
                <MenuCard data={pesce} title="Pesce" />
                <MenuCard data={pollo} title="Pollo" />
                <MenuCard data={speciality} title="Speciality" />
                <MenuCard data={kids} title="Kids" />
                <MenuCard data={sides} title="Sides" />
                <MenuCard data={desserts} title="Desserts" />
              </div>
            </MenuCards>
          </TabsContent>
          <TabsContent value="bruncMenu">
            <MenuCards>
              <div className="md:w-50vw">
                <MenuCard data={main} title="Brunch Menu" />
              </div>
              <div className="md:w-50vw">
                <MenuCard data={brunchSides} title="Sides" />
                <MenuCard data={coffee} title="Coffee and Teas" />
                <MenuCard data={juices} title="Juices" />
                <MenuCard data={cocktails} title="Cocktails" />
              </div>
            </MenuCards>
          </TabsContent>
        </Tabs>
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </>
  );
};

export default Menu;
