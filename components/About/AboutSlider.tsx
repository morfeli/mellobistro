import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";
import heroImageArray from "../Home/Images";

export const AboutSlider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setIndex((current) =>
          current === heroImageArray.length - 1 ? 0 : current + 1
        ),
      6000
    );

    return () => clearInterval(interval);
  }, [index, heroImageArray]);

  return (
    <div className="pt-8 m-4">
      <div className="max-w-md m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="whitespace-nowrap"
        >
          {heroImageArray.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt="Mello Bistro Ownership"
              width={500}
              height={500}
              className="inline-block mx-2 my-2 rounded-3xl"
              priority
            />
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center pt-4">
        {heroImageArray.map((dot, idx) => (
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
