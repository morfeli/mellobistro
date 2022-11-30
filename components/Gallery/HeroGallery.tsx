import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

import { Modal } from "../Modal/Modal";
import { galleryImageArray } from "../Home/Images";

export const HeroGallery = () => {
  const [renderModal, setRenderModal] = useState<{
    show: boolean;
    item: StaticImageData | null;
  }>({ show: false, item: null });

  function renderModalHandler(item: StaticImageData) {
    setRenderModal({
      show: true,
      item: item,
    });
  }

  function onClose() {
    setRenderModal({
      show: false,
      item: null,
    });
  }

  return (
    <section className="flex flex-col pt-20 overflow-hidden">
      <h2 className="self-center text-3xl">Gallery</h2>
      <motion.div
        className="grid gap-8 py-12 m-4 grid-cols-galleryGrid justify-items-center"
        layout
      >
        {galleryImageArray.map((item, i) => (
          <motion.div
            key={i}
            className="cursor-pointer"
            initial={{
              opacity: 0,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
              transition: { duration: 0.8, delay: i * 0.2 },
            }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => renderModalHandler(item)}
          >
            <Image
              src={item}
              width={350}
              height={350}
              className="m-4 rounded-md"
              alt="Image"
            />
          </motion.div>
        ))}
      </motion.div>
      <Modal
        show={renderModal.show}
        item={renderModal.item}
        onClose={onClose}
      ></Modal>
    </section>
  );
};
