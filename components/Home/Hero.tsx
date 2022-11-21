import { motion } from "framer-motion";
import { useRouter } from "next/router";

import imageOne from "../../public/landing/landing-1.jpg";
import imageTwo from "../../public/landing/landing-2.jpg";
import imageThree from "../../public/landing/landing-3.jpg";
import { HeroImages } from "./HeroImages";
import { Map } from "./Map";

type HeroProps = {
  innerWidth: number;
};

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

export const Hero = ({ innerWidth }: HeroProps) => {
  const router = useRouter();

  const navToAboutPage = () => {
    router.push("/about");
  };

  return (
    <section className="flex flex-col py-12">
      <div className="text-xl text-center">
        <h2 className="pb-4 text-4xl tracking-widest uppercase">
          Mello Bistro
        </h2>
        <p className="pb-2">Innovative Italian Restaurant</p>
        <p>Modern Italian Cuisine With a French Twist</p>
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
      <div className="lg:flex lg:justify-around lg:items-baseline">
        <div className="flex flex-col lg:w-50vw lg:p-6">
          <h2 className="self-start ml-8 text-3xl">OUR BRAND</h2>
          <p className="px-8 py-4 text-lg leading-7 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            blandit magna, vel porta mauris. Phasellus turpis arcu, elementum ac
            lacus vitae, convallis dignissim tortor. Curabitur elementum enim at
            bibendum vehicula. Cras venenatis luctus luctus. Fusce luctus
            faucibus lectus sit amet condimentum. Quisque pulvinar, mi quis
            aliquet scelerisque, leo sem semper mi, at sodales velit sapien in
            ex. Etiam egestas venenatis orci vel ornare. In a ex porta, mollis
            odio ut, aliquam metus.
          </p>
          <motion.button
            className="self-start p-2 ml-8 tracking-wide text-white uppercase rounded-sm bg-equestrian-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            onClick={navToAboutPage}
          >
            Learn More
          </motion.button>
        </div>
        <div className="flex flex-col items-center pt-12 text-lg">
          <h2 className="text-3xl">Hours & Location</h2>
          <p className="py-2">1233 Bay Street Staten Island New York 10305</p>
          <h2>Monday - Saturday</h2>
          <p>Lunch 11am - 3pm</p>
          <p>Dinner 5pm - 10:30pm</p>
          <h2>Sunday</h2>
          <p>Brunch 10am - 3pm</p>
          <p>Dinner 5pm - 9:30pm</p>

          <p className="pb-4">718.285.4574</p>
          <Map />
        </div>
      </div>
    </section>
  );
};
