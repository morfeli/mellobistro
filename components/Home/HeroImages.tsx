import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

type HeroHomeImagesProps = {
  image: StaticImageData;
  innerWidth: number;
};

export const HeroImages = ({ image, innerWidth }: HeroHomeImagesProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const descriptionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  let styles;

  if (innerWidth < 1000) {
    styles = "cursor-pointer m-4 grid-500:last:col-span-2 grid-500:last:w-50vw";
  } else {
    styles = "m-4 cursor-pointer last:col-span-1";
  }

  return (
    <motion.div
      ref={ref}
      variants={descriptionVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      className={styles}
      whileHover={{ translateY: -15 }}
    >
      <Image
        src={image}
        className="rounded-lg"
        width={350}
        height={350}
        alt="Images"
      />
    </motion.div>
  );
};
