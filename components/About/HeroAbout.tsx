import { useRouter } from "next/router";

import { AboutSlider } from "./AboutSlider";

export const HeroAbout = () => {
  return (
    <section className="flex flex-col py-8">
      <h2 className="self-center text-4xl">OUR STORY</h2>
      <div className="self-center text-center lg:flex lg:items-center lg:justify-between">
        <p className="p-6 text-xl leading-8 lg:leading-10 lg:w-50vw">
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
        <div className="lg:w-50vw">
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};
