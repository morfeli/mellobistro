import { Form } from "./Form";

export const HeroContact = () => {
  return (
    <section className="flex flex-col pt-20">
      <div className="self-center text-center">
        <h1 className="text-3xl">CONTACT</h1>
        <p className="p-4 text-lg ">
          Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>
      <Form />
    </section>
  );
};
