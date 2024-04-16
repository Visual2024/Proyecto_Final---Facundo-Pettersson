import { useContext, useState } from "react";
import { toCapital } from "../../helpers/toCapital";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ product }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="flex flex-col w-full justify-center mt-3 content-center">
      <div className="w-[60%] ml-10 flex flex-row  justify-center">
        <img src={product.imagen} alt={product.title} className="w-[40%]" />
        <div className="flex flex-col w-[100%] h-[50%] ml-10">
          <div>
            <h3 className="font-bold text-[2rem]">{product.title}</h3>
            <p className="font-bold">{toCapital(product.categoria)}</p>
            <p className="font-bold text-[2.5rem]">${product.precio}</p>
          </div>
          <div>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={() => {
                agregarAlCarrito(item, cantidad);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
