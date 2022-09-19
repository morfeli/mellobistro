export const HeroHome = () => {
  return (
    <section className="flex flex-col">
      <div className="self-center text-center">
        <h1 className="text-xl tracking-widest uppercase">
          Welcome to Mello Bistro
        </h1>
        <p>Insert cusine type here</p>
        <p>Insert resturant description here</p>
        <div>
          <p>insert 3 pics</p>
        </div>
      </div>
      <div>
        <h1>Our Story</h1>
        <p>insert text here</p>
        <button className="p-2 text-white rounded-md bg-equestrian-green">
          Learn More
        </button>
      </div>
    </section>
  );
};
