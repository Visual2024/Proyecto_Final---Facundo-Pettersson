import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="flex flex-col items-center mt-10 ">
        <h1 className="font-bold text-[2rem]">Carrito</h1>
        <div className='flex flex-row '>
        {
            carrito.map((prod) => (
                <div key={prod.id} className='bg-red-500 p-5 rounded-xl mr-2 flex flex-col items-center'>
                    <br />
                    
                    <img src={prod.imagen} width={100} alt={prod.titulo} />
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        </div>
      <div className='flex flex-col items-center mt-20'>
      {  
            carrito.length > 0 ?
            <>
                <h2 className='text-red-500 bg-white p-1 pt-2 pb-2 pl-2 pr-2 rounded-xl mb-2'>Precio total: ${precioTotal()}</h2>
                <Link to="/checkout" className='bg-green-500 text-black p-1 pt-2 pb-2 mt-2 rounded-xl mb-2'>Finalizar compra</Link>
                <button onClick={handleVaciar} className='bg-red-400 p-[9px] pl-5 pr-5 mt-2 rounded-xl'>Vaciar</button>
            </> :
            <h2 className='font-bold text-red-500 text-[2rem]'>El carrito está vacío :(</h2>
        }
      </div>
        
    </div>
  )
}

export default Carrito