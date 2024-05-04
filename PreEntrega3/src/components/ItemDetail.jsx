import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="flex flex-col ml-[20rem] mt-16">
     
        <div className="flex flex-row  ">
            <img src={item.imagen} alt={item.titulo} width={400}/>
            <div className="ml-10">
                <h3 className="font-bold text-[2rem]">{item.titulo}</h3>
                <p className="font-bold text-[2rem] text-red-400">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail