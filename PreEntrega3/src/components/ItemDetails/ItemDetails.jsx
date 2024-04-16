import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartCotext } from "../../Context/CartContext";

export const ItemDetail = ({ product }) => {

    const user = useContext(CartCotext);
  console.log(user);

    const { title, imagen, precio, categoria } = product;

    

    return (
      <div className="flex flex-row mt-2 w-[60%] h-[65%] border-solid  ">
          <img src={imagen} alt={title} className=" object-contain w-[50%]" />
        <div className="ml-6 w-[80%]">
          <h1 className="font-bold text-[2rem] w-auto">{title}</h1>
          <p className="font-bold text-[2rem] mt-1 w-[80%]">Precio: ${precio}</p>
          <p className="font-bold text-[1rem] w-auto">{categoria.nombre}</p>
          <ItemCount product={product}/>
        </div>
      </div>
    );
  };