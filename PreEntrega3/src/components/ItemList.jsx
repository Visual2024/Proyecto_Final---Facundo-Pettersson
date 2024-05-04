import Item from "./Item";



const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="flex flex-col flex-wrap ">
        <h2 className="main-title">{titulo}</h2>
        <div className="flex flex-row flex-wrap justify-center mt-3 w-full">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList