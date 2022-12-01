import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import { aboutSliderImages } from "../Home/Images";

export const AboutSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) =>
          current === aboutSliderImages.length - 1 ? 0 : current + 1
        ),
      6000
    );

    return () => clearInterval(interval);
  }, [index, aboutSliderImages]);

  return (
    <div className="pt-8 m-4">
      <div className="max-w-xl m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="whitespace-nowrap"
        >
          {aboutSliderImages.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Mello Bistro Ownership"
              height={700}
              width={700}
              objectFit="cover"
              className="inline-block m-2 rounded-3xl"
              priority
            />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center pt-4">
        {aboutSliderImages.map((dot, idx) => (
          <div
            onClick={() => {
              setIndex(idx);
            }}
            key={idx}
            className={classNames(
              "mx-2",
              "w-4",
              "h-4",
              "bg-slate-300",
              "rounded-lg",
              "cursor-pointer",
              "inline-block",
              { "bg-hunter-green": index === idx }
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
