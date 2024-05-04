import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/confing";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div className="flex flex-col ">
      <h1 className="text-[3rem] font-bold ml-3 text-red-400 text-center mb-5 mt-5">Tienda Online Deportiva</h1>
        <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
