export const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div className="">
        <div className="flex flex-row flex-wrap items-center mt-5 mb-5">
            <button className="bg-red-500 rounded-xl p-2 pl-2 mr-3" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar} className="bg-red-500 rounded-xl p-2 pl-2 ml-3">+</button>
        </div>
        <button className="bg-red-500 rounded-xl p-2 pl-2 mr-3" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}
