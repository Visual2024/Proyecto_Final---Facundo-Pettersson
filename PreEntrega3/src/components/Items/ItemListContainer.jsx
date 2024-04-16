import { useEffect, useState } from "react";
import date from "../../data/date.json";
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(date);
  }, []);

  return (
    <div>
      <div className="w-100 text-[2rem] text-center my-5 font-bold">
        <h1>Bienvenido a la tienda virtual</h1>
      </div>
      <ItemList item={item}  />
    </div>
  );
};
