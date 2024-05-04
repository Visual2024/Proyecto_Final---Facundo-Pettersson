

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="flex flex-row p-3 items-center">
            <button className="bg-blue-500 p-1 pl-3 pr-3 mr-2 rounded-xl" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="bg-blue-500 p-1 pl-3 pr-3 ml-2 rounded-xl" onClick={handleSumar}>+</button>
        </div>
        <button className="bg-red-500 p-2 rounded-xl mt-2"  onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount