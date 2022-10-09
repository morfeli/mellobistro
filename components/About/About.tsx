import { AboutSlider } from "../About/AboutSlider";
import { motion } from "framer-motion";
import { EmailSVG } from "./EmailSVG";

export const HeroAbout = () => {
  return (
    <section className="flex flex-col py-8">
      <h1 className="self-center text-4xl">OUR STORY</h1>
      <div className="self-center text-center lg:flex lg:items-center lg:w-screen">
        <p className="p-6 text-xl leading-8 lg:leading-10 lg:w-50vw lg:">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          iure reprehenderit quod tenetur quia optio, voluptate quam, similique
          mollitia tempora ad dolore vitae nobis eaque, ullam doloribus aut
          libero corrupti! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Voluptas iure reprehenderit quod tenetur quia optio, voluptate
          quam, similique mollitia tempora ad dolore vitae nobis eaque, ullam
          doloribus aut libero corrupti! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas iure reprehenderit quod tenetur quia optio,
          voluptate quam, similique mollitia tempora ad dolore vitae nobis
          eaque, ullam doloribus aut libero corrupti!
        </p>

        <div className="p-6 mx-auto lg:w-50vw">
          <div className="mx-auto w-96">
            <EmailSVG />
          </div>
          <a href="https://storyset.com/internet" className="hidden">
            Internet illustrations by Storyset
          </a>
          <p className="py-8 text-xl ">
            Join our newsletter and stay updated for our monthly specials and
            promotions!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            className="px-6 py-4 tracking-wider text-white rounded-lg bg-equestrian-green"
          >
            Join Now!
          </motion.button>
        </div>
      </div>
      <AboutSlider />
    </section>
  );
};
