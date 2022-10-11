import { motion } from "framer-motion";
import { useRouter } from "next/router";

import imageOne from "../../public/assets/mockup-mellobistro.jpg";
import imageTwo from "../../public/assets/mockup2-mellobistro.jpg";
import imageThree from "../../public/assets/mockup3-mellobistro.jpg";
import { HeroImages } from "./HeroImages";

type HeroProps = {
  innerWidth: number;
};

export const Hero = ({ innerWidth }: HeroProps) => {
  const router = useRouter();
  const imageArray = [
    {
      id: 0,
      image: imageOne,
    },
    { id: 1, image: imageTwo },
    {
      id: 2,
      image: imageThree,
    },
  ];

  const navToAboutPage = () => {
    router.push("/about");
  };

  return (
    <section className="flex flex-col py-12">
      <div className="text-center">
        <h1 className="pb-4 text-4xl tracking-widest uppercase">
          Mello Bistro
        </h1>
        <p className="pb-2">Insert cusine type here</p>
        <p>Insert restaurant description here</p>
        <div className="grid my-4 transition-all grid-cols-imageGrid justify-items-center">
          {imageArray.map((image) => (
            <HeroImages
              image={image.image}
              key={image.id}
              innerWidth={innerWidth}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex">
        <div className="flex flex-col lg:w-50vw">
          <h1 className="self-start ml-8 text-3xl">OUR BRAND</h1>
          <p className="px-8 py-4 text-lg leading-7 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            blandit magna, vel porta mauris. Phasellus turpis arcu, elementum ac
            lacus vitae, convallis dignissim tortor. Curabitur elementum enim at
            bibendum vehicula. Cras venenatis luctus luctus. Fusce luctus
            faucibus lectus sit amet condimentum. Quisque pulvinar, mi quis
            aliquet scelerisque, leo sem semper mi, at sodales velit sapien in
            ex. Etiam egestas venenatis orci vel ornare. In a ex porta, mollis
            odio ut, aliquam metus. Mauris eget sodales est, eget gravida magna.
            Nulla lorem quam, pellentesque nec nunc eget, ornare bibendum
            libero. In ac risus neque. Curabitur eget blandit dolor. Vestibulum
            at nunc at leo tristique molestie nec sed ex. Nunc non tortor
            viverra, ultrices massa nec, molestie turpis. Sed semper nibh massa,
            sed lacinia dui sollicitudin in. Praesent finibus lorem non sagittis
            fermentum. In laoreet dapibus odio, at dignissim tellus luctus non.
            Vestibulum a magna nec turpis tempor placerat. Etiam ac tempor
            massa, ut sollicitudin ligula. Duis et egestas velit. Curabitur at
            metus ipsum. Duis sit amet ipsum eu nibh aliquam laoreet. Proin
            lacinia mauris ac metus porta, at mollis leo tempus. Nulla nec
            ligula eget ante tincidunt laoreet.
          </p>
          <motion.button
            className="self-start p-2 ml-8 text-white rounded-md bg-equestrian-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            onClick={navToAboutPage}
          >
            Learn More
          </motion.button>
        </div>
        <div className="self-center">INSERT MAP HERE</div>
      </div>
    </section>
  );
};
