type MenuCardProps = {
  data: {
    name: string;
    description?: string;
    price?: string;
  }[];
  title: string;
};

export const MenuCard = ({ data, title }: MenuCardProps) => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="self-center py-2 text-3xl">{title}</h1>
      {data.map((item, i) => (
        <div
          key={i}
          className="p-4 border-b-2 border-b-hunter-green last:border-b-0"
        >
          <h1 className="text-2xl">{item.name}</h1>
          {item.description && (
            <p className="py-2 text-lg">{item.description}</p>
          )}
          <p className="text-lg">$ {item.price}</p>
        </div>
      ))}
    </div>
  );
};
