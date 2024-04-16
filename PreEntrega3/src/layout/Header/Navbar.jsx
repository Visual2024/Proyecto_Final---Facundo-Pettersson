import { Link } from "react-router-dom";
import { useState } from "react";
import { CartWidget } from "../../components/Cart/CartWidget";

export const Navbar = () => {
  const [showCategorias, setShowCategorias] = useState(false);

  return (
    <header className="bg-teal-500 ">
      <nav className="flex flex-row flex-wrap justify-between content-center items-center ">
        <div className="flex ml-3">
          <Link to="/">
            <h4>Logo</h4>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row flex-wrap items-center ">
            <Link to="/">
              <li className="m-2">Inicio</li>
            </Link>
            <Link to="/nosotros">
              <li className="m-2">Nosotros</li>
            </Link>

            <li className="p-2 mr-2">
              <button
                onClick={() => setShowCategorias(!showCategorias)}
                className=""
              >
                Categorias
              </button>
              {showCategorias && (
                <ul className="absolute bg-teal-500 rounded-e-sm text-white w-[7%] flex flex-col items-start outline-none  p-2">
                  <li className="hover:bg-red-500  max-sm:text-xs pl-1 p-2 rounded-2xl">
                    <Link to="/categorias/botines">Botines</Link>
                  </li>
                  <li className="hover:bg-red-500  pl-1 p-2 rounded-2xl text-white">
                    <Link to="/categorias/camisetas">Camisetas</Link>
                  </li>
                  <li className="hover:bg-red-500  pl-1 p-2 rounded-2xl text-white">
                    <Link to="/categorias/pantalones">Pantalones</Link>
                  </li>
                </ul>
              )}
            </li>

            <Link to="/contacto">
              <li className="m-2">Contacto</li>
            </Link>
          </ul>
        </div>
        <div className="mr-4">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </nav>
    </header>
  );
};
