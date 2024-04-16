import { ItemDetail } from "./ItemDetails";
import { useEffect, useState } from "react";
import { pedirDatoId } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";

export const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirDatoId(id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  return (
    <div className="flex flex-col flex-wrap content-center   h-[25rem]">
      <div className="font-bold text-[4rem]">
        <h1 className=" mx-8">Detalles del Producto</h1>
      </div>
      {product && <ItemDetail product={product} />}
    </div>
  );
};
