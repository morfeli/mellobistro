import { useState, useEffect } from "react";

import { Header } from "../components/Header/Header";
import { MainBackgroundImage } from "../components/UI/MainBackgroundImage";
import { HeroContact } from "../components/Contact/HeroContact";
import { Footer } from "../components/Footer/Footer";

const Contact = () => {
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

      <MainBackgroundImage>
        <HeroContact />
      </MainBackgroundImage>

      <Footer isMobile={isMobile} />
    </>
  );
};

export default Contact;
