import { AboutSlider } from "./AboutSlider";

export const HeroAbout = () => {
  return (
    <section className="flex flex-col py-8">
      <h2 className="self-center text-4xl">OUR STORY</h2>
      <div className="self-center text-center lg:flex lg:items-center lg:justify-between">
        <div className="p-6 text-xl leading-8 lg:leading-8 lg:w-50vw">
          <p className="py-4">
            Mello Bistro was born to serve the community authentic innovative
            Italian dishes with a French twist and Brazilian heart by
            Co-Founders Lilian and Oscar Quintero, Chef Romulo De Melo and Chef
            Christopher De Mello. Our concept comes from the hearts of Mello
            Bistro’s passionate and dedicated Chefs, Chef Romulo and Chef
            Christopher. They decided to marry Italian and French concepts +
            ingredients to curate wholesome flavors and an unforgettable
            culinary experience.
          </p>
          <p className="py-4">
            They are the ultimate father and son duo combining both of their
            experience and passion into the kitchen. Chef Romulo comes from an
            Italian cuisine experience of over 30 years and Chef Christopher
            comes from French cuisine experience working for Daniel Boulud.
            Being that Romulo is Brazilian and Christopher was raised in a
            Brazilian household, they decided to add a few Brazilian touches to
            the menu to bring a little bit of their culture into play while
            setting Mello Bistro’s dining room atmosphere with Bossa Nova songs
            for an memorable culinary dinner.
          </p>
        </div>

        <div className="lg:w-50vw">
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};
