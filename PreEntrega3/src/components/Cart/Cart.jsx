import { useEffect, useState } from "react";

export const Cart = () => {
  const generarNumeroRando = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const [numeroRando, setNumeroRando] = useState(() => {
    const storedNumber = parseInt(localStorage.getItem("numeroRando"));
    return isNaN(storedNumber) ? generarNumeroRando() : storedNumber;
  });

  const handleAddToCard = () => {
    const newRandoNumber = generarNumeroRando();
    setNumeroRando(newRandoNumber);
  };

  useEffect(() => {
    localStorage.setItem("numeroRando", numeroRando.toString());
  }, [numeroRando]);

  return (
    <>
      <button onClick={handleAddToCard} id="btn">
      <i className="fa-solid fa-cart-shopping">
          {numeroRando > 0 && (
            <i className="badge badge-pill badge-danger">{numeroRando}</i>
          )}
       </i>
      </button>
    </>
  );
};
