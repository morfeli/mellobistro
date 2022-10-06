import imageOne from "../../public/assets/mockup-mellobistro.jpg";
import imageTwo from "../../public/assets/mockup2-mellobistro.jpg";
import imageThree from "../../public/assets/mockup3-mellobistro.jpg";
import { HeroImages } from "./HeroImages";

export const HeroHome = () => {
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

  return (
    <section className="flex flex-col">
      <div className="text-center">
        <h1 className="text-xl tracking-widest uppercase">
          Welcome to Mello Bistro
        </h1>
        <p>Insert cusine type here</p>
        <p>Insert resturant description here</p>
        <div className="grid my-4 transition-all grid-cols-imageGrid justify-items-center">
          {imageArray.map((image) => (
            <HeroImages image={image.image} key={image.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="">Our story</h1>
        <p>insert text here</p>
        <button className="p-2 text-white rounded-md bg-equestrian-green">
          Learn More
        </button>
      </div>
    </section>
  );
};
