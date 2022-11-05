import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

import heroImageArray from "./Images";
import classNames from "classnames";
import { LeftSVG } from "./LeftSVG";
import { RightSVG } from "./RightSVG";

type LandingHeroProps = {
  images: StaticImageData[];
  title?: string;
};

export const LandingHero = ({ images, title }: LandingHeroProps) => {
  const [index, setIndex] = useState<number>(0);

  function moveRight() {
    setIndex((current) => (current === 4 ? 0 : current + 1));
  }

  function moveLeft() {
    setIndex((current) => (current === 0 ? 4 : current - 1));
  }

  useEffect(() => {
    const id = setInterval((): void => {
      setIndex((index + 1) % heroImageArray.length); //
    }, 5000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <motion.div className="relative flex items-center justify-between h-screen">
      <LeftSVG left={moveLeft} />

      {images.map((image, i) => {
        return (
          <div
            key={i}
            style={{
              zIndex: `-${i + 1}`,
            }}
            className={classNames(
              "absolute inset-0 overflow-hidden transition-opacity duration-1000 opacity-0",
              {
                "opacity-100": i === index,
              }
            )}
          >
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Hero Images"
            />
          </div>
        );
      })}
      <h1 className="self-end p-4 tracking-widest text-white uppercase drop-shadow-2xl text-8xl">
        {title}
      </h1>
      <RightSVG right={moveRight} />
    </motion.div>
  );
};
