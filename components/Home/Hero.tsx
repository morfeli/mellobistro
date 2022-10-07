import imageOne from "../../public/assets/mockup-mellobistro.jpg";
import imageTwo from "../../public/assets/mockup2-mellobistro.jpg";
import imageThree from "../../public/assets/mockup3-mellobistro.jpg";
import { HeroImages } from "./HeroImages";

type HeroProps = {
  innerWidth: number;
};

export const Hero = ({ innerWidth }: HeroProps) => {
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
        <h1 className="text-2xl tracking-widest uppercase">
          Welcome to Mello Bistro
        </h1>
        <p>Insert cusine type here</p>
        <p>Insert resturant description here</p>
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
      <div className="flex flex-col">
        <h1 className="self-center text-3xl">Our Story</h1>
        <p className="p-4 leading-7 text-center text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          blandit magna, vel porta mauris. Phasellus turpis arcu, elementum ac
          lacus vitae, convallis dignissim tortor. Curabitur elementum enim at
          bibendum vehicula. Cras venenatis luctus luctus. Fusce luctus faucibus
          lectus sit amet condimentum. Quisque pulvinar, mi quis aliquet
          scelerisque, leo sem semper mi, at sodales velit sapien in ex. Etiam
          egestas venenatis orci vel ornare. In a ex porta, mollis odio ut,
          aliquam metus. Mauris eget sodales est, eget gravida magna. Nulla
          lorem quam, pellentesque nec nunc eget, ornare bibendum libero. In ac
          risus neque. Curabitur eget blandit dolor. Vestibulum at nunc at leo
          tristique molestie nec sed ex. Nunc non tortor viverra, ultrices massa
          nec, molestie turpis. Sed semper nibh massa, sed lacinia dui
          sollicitudin in. Praesent finibus lorem non sagittis fermentum. In
          laoreet dapibus odio, at dignissim tellus luctus non. Vestibulum a
          magna nec turpis tempor placerat. Etiam ac tempor massa, ut
          sollicitudin ligula. Duis et egestas velit. Curabitur at metus ipsum.
          Duis sit amet ipsum eu nibh aliquam laoreet. Proin lacinia mauris ac
          metus porta, at mollis leo tempus. Nulla nec ligula eget ante
          tincidunt laoreet.
        </p>
        <button className="p-2 text-white rounded-md bg-equestrian-green">
          Learn More
        </button>
      </div>
    </section>
  );
};
