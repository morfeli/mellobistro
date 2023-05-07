import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export const EventHero = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center p-4 justify-evenly">
      <div className="p-2 py-8 text-xl text-center">
        <div className="lg:flex lg:justify-between lg:w-screen lg:px-12">
          <div className="flex items-center self-center p-2 mx-auto rounded-lg bg-hunter-green w-fit lg:m-0">
            <Image
              src="/patio/patio1.jpg"
              alt="Patio"
              width={600}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="text-center lg:w-[650px] lg:leading-10 lg:text-3xl tracking-tight pt-4 md:text-2xl">
            Mello Bistro extends its services by turning its dining room and
            patio into your private event space. We do everything from small
            groups to full buyouts. Enjoy the fresh air and sunshine while
            savoring your meal in a relaxing outdoor atmosphere. Our cozy
            seating arrangements provide the perfect setting for a romantic
            dinner, family gathering, or casual lunch with friends.
          </p>
        </div>

        <div className="lg:flex lg:justify-between lg:py-12 lg:flex-row-reverse lg:w-screen lg:px-12">
          <div className="flex items-center p-2 mx-auto my-4 rounded-lg bg-hunter-green w-fit lg:m-0">
            <Image
              src="/patio/patio2.jpg"
              alt="Patio"
              width={600}
              height={300}
              className="object-cover object-center rounded-lg "
            />
          </div>
          <p className="text-center lg:w-[650px] lg:leading-10 lg:text-3xl tracking-tight md:text-2xl">
            The lush greenery and twinkling lights create an ambiance that can't
            be found anywhere else. Whether you're celebrating a special
            occasion or just looking for a change of scenery, come experience
            our new backyard patio today!
          </p>
        </div>

        <p className="pt-4 text-center md:text-2xl md:w-[700px] md:mx-auto">
          Our team is here to listen to your requests, we curate distictive
          experiences for all events. For all inquiries, please fill out the
          form and we'll be in touch soon. If you have any questions, feel free
          to reach out at info@mellobistro.com.
        </p>
      </div>
      <motion.button
        className="self-center px-6 py-4 tracking-wider text-white uppercase rounded-md bg-hunter-green"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, opacity: 0.8 }}
        onClick={() => {
          router.push("/contact");
        }}
      >
        Contact Us
      </motion.button>
    </section>
  );
};
