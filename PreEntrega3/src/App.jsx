import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Navbar } from "./layout/Header/Navbar";
import { Footer } from "./layout/Footer/Footer";
import {Productos, Contacto, Nosotros} from "./Hook/useExport"
import { ItemDetailsContainer } from "./components/ItemDetails/ItemDetailsContainer";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import { CartProvider } from "./Context/CartContext";
import { Cart } from "./page/Cart";
import "./App.css"

function App() {



  return (
    <CartProvider >
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/producto/categorias" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/detalles/:id" element={<ItemDetailsContainer />} />
        <Route path="/categoria/zapatilla" element={<ItemDetailsContainer />} />
        <Route path="/categoria/camiseta" element={<ItemDetailsContainer />} />
        <Route path="/categoria/pantalon" element={<ItemDetailsContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
