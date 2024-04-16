import { useContext } from "react";
import { CartCotext } from "../../Context/CartContext";

export const ItemAdd = ({product, count}) => {

  const {carrito, setCarrito} = useContext(CartCotext)
  console.log(carrito);

  const hadlerAgregar = () => {
    const itemAgregado = {...product, count};

    const nuevoCart = [...carrito];
    const addCarrito = nuevoCart.find((producto) => producto.id === itemAgregado.id);

    if (addCarrito) {
      addCarrito.count += count
      setCarrito(nuevoCart)
    }else{
      setCarrito([...carrito, itemAgregado])
    }
  }
   

  return (
   <div className="flex justify-center bg-red-400 hover:bg-red-600 p-1 mt-4 rounded-xl w-[60%]">
      <button className="p-1" onClick={hadlerAgregar}>Agregar al Carrito</button>
   </div>
  )
}
