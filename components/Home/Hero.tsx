import { motion } from "framer-motion";
import { useRouter } from "next/router";
import imageOne from "../../public/landing/landing-6.jpg";
import imageTwo from "../../public/landing/landing-5.jpg";
import imageThree from "../../public/landing/landing-15.jpg";
import { HeroImages } from "./HeroImages";
import { Map } from "./Map";
import { Subscribe } from "./Subscribe";

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
      <div className="p-2 text-xl text-center">
        <h2 className="pb-4 text-4xl tracking-widest uppercase">
          Mello Bistro
        </h2>
        <p className="pb-2 text-2xl tracking-wider">
          Innovative Italian Restaurant
        </p>
        <p className="px-2 tracking-wide">
          Modern Italian Cuisine with a French touch & Brazilian heart
        </p>
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
      <div className="p-6 lg:flex lg:justify-around lg:items-baseline">
        <div className="flex flex-col px-2 lg:w-[50vw]">
          <h2 className="self-start text-3xl">WHO WE ARE</h2>
          <p className="py-4 text-lg leading-7 text-left lg:w-[500px]">
            Welcome to Mello Bistro. An innovative approach to Italian cuisine.
            Marrying Italian and French cuisine concepts with a Brazilian heart.
            Using fine quality ingredients to curate a modern approach to
            traditional dishes with intentional and precise plating. What makes
            us different is that we are a modern approach to dining but with a
            cozy yet elevated atmosphere. We serve the community flavorful and
            intentional fine dishes.
          </p>
          <p className="py-2 text-lg leading-7 text-left lg:w-[500px]">
            We are your everyday casual yet elevated restaurant to dine at with
            your loved ones. The passion our Chefs brings to the table here at
            Mello Bistro is like no other. You can be sure that your meals will
            always be made with love and excellent culinary skills and talent.
            Mello Bistro’s concept has been in Chef Romulo’s heart for over 20
            years. It would be our absolute pleasure in having you dine at Mello
            Bistro. We can’t wait to see you.
          </p>
          <motion.button
            className="self-start p-2 mt-8 tracking-wide text-white uppercase rounded-md bg-equestrian-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, opacity: 0.8 }}
            onClick={navToAboutPage}
          >
            Learn More
          </motion.button>
        </div>
        <div className="flex flex-col items-center pt-12">
          <h2 className="text-3xl">Hours & Location</h2>
          <p className="text-xl">1233 Bay Street, Staten Island, NY 10305</p>
          <p className="text-xl">718.285.4574</p>

          <div className="px-2 pt-4 w-80 sm:w-[75vw] lg:w-[400px]">
            <h2 className="text-center text-2xl">Summer Hours</h2>
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Sunday</h2>
              <div>
                <p className="text-lg text-end">12:00pm - 9:00pm</p>
                <p>Brunch avaliable until 2pm</p>
              </div>
            </div>
            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Saturday</h2>
              <div>
                <p className="text-lg">1:00pm - 11:00pm </p>
              </div>
            </div>

            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Monday</h2>
              <p className="text-lg">Closed</p>
            </div>
            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Tuesday</h2>
              <p className="pb-4 text-lg">5:00pm - 10:00pm</p>
            </div>
            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Wednesday</h2>
              <p className="pb-4 text-lg">5:00pm - 10:00pm</p>
            </div>
            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Thursday</h2>
              <p className="pb-4 text-lg">5:00pm - 10:00pm</p>
            </div>
            <hr className="w-full h-0.5 bg-hunter-green" />
            <div className="flex justify-between py-2">
              <h2 className="text-xl">Friday</h2>
              <p className="pb-4 text-lg">5:00pm - 11:00pm</p>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <Subscribe />
    </section>
  );
};
