import useFetchItems from "../hooks/useFetchItems";
import { item } from "../types.ts";

export default function ShopItems() {
  const itemsData = useFetchItems();

  if (!itemsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex">
        {itemsData.map((item: item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-evenly gap-2 p-2"
            >
              <img
                className="w-36 rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p className="text-center">{item.description}</p>
              <p>${item.price}</p>
              <button className="rounded-lg bg-teal-950 p-2 active:bg-yellow-500">
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
