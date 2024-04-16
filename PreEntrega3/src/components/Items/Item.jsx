import {Link} from 'react-router-dom'
import React from 'react'
import { toCapital } from '../helpers/toCapital'

export const Item = ({ i }) => {

  
  return (
    <div className=''>
      <img src={i.imagen} alt={i.title} className='w-[15rem]'/>
      <h3 className='font-extrabold text-[1.5rem]'>{i.title}</h3>
   
      <p className='font-bold text-[2rem]'>${i.precio}</p>
      <p>Cantidad: {i.cantidad}</p>
        <Link to={`detalles/${i.id}` || `producto/detalles/${id}`} >
        <button className='border-solid border-blue-500 border-x-2 border-y-2 rounded-lg bg-blue-500 text-black mt-2 px-2 font-bold'>Detalles</button>
      </Link>
      
    </div>
  );
};
