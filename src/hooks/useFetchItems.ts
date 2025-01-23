import { useEffect, useState } from "react";
import { item } from "../types.ts";

export default function useFetchItems(): item[] | undefined {
  const [itemsData, setItemsData] = useState<item[]>();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing",
      );
      const data = await response.json();
      setItemsData(data);
    };
    fetchItems();
  }, []);

  return itemsData;
}
