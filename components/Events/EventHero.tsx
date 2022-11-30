import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const EventHero = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center p-12 justify-evenly sm:h-75vh">
      <div className="pb-8 text-xl text-center sm:px-28 lg:px-60">
        <p>
          Mello Bistro extends its services by turning its dining room and patio
          into your private event space. We do everything from small groups to
          full buyouts.
        </p>
        <p className="pt-10">
          Our team is here to listen to your requests, we curate distictive
          experiences for all events. For all inquiries, please fill out the
          form and we'll be in touch soon. If you have any questions, feel free
          to reach out at info@mellobistro.com.
        </p>
      </div>
      <motion.button
        className="self-center px-10 py-4 tracking-wider text-white uppercase rounded-sm bg-equestrian-green"
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
