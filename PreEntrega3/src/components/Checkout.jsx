import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/confing';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="flex flex-col items-center mt-20">
                <h1 className="font-bold text-[2rem] mb-2">Muchas gracias por tu compra</h1>
                <p className='mt-2 '>Tu número de pedido es: <span className='text-red-500'>{pedidoId}</span></p>
            </div>
        )
    }

  return (
    <div className="flex flex-col mt-10 items-center">
        <h1 className="font-bold text-[1.9rem]">Finalizar compra</h1>
        <form className="flex flex-col mt-5 w-[40%]" onSubmit={handleSubmit(comprar)}>

            <input className='p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2' type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input className='p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2' type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input className='p-1 pl-5 pr-5 text-start pt-3 text-black pb-3 bg-slate-600 mt-2' type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <div className='flex flex-col items-center mt-5'>
            <button className="bg-green-500 p-3 rounded-xl pl-5 pr-5" type="submit">Comprar</button>
            </div>

        </form>
    </div>
  )
}

export default Checkout