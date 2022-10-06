import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

type HeroHomeImagesProps = {
  image: StaticImageData;
};

export const HeroImages = ({ image }: HeroHomeImagesProps) => {
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

  return (
    <motion.div
      ref={ref}
      variants={descriptionVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      className="m-4 last:col-span-2 md:last:col-span-1"
    >
      <Image src={image} className="rounded-lg" width={350} height={350} />
    </motion.div>
  );
};
