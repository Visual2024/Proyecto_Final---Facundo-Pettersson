import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <i class="fa-solid fa-cart-shopping"></i>
        <span className="numerito"> {cantidadEnCarrito()} </span>
      </Link>
    </div>
  );
};
