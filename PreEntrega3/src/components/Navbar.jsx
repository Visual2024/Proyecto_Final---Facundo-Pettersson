import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="flex flex-row bg-teal-600 ">
     
        <ul className="flex flex-row justify-between w-full items-center m-3">
            <div className='flex flex-row'>
              <li><Link className="ml-3" to="/">Logo</Link></li>
            </div>
           <div className='flex flex-row ml-36 justify-center '>
             <li className='pr-5'><Link className="" to="/productos">Productos</Link></li>
             <li className='pr-5'><Link className="" to="/productos/pantalon">Pantalones</Link></li>
             <li className='pr-5'><Link className="" to="/productos/camiseta">Camisetas</Link></li>
             <li className='pr-5'><Link className="" to="/productos/botines">Botines</Link></li>
           </div>
            <div className='flex flex-row pl-2 mr-4'>
              <li className='pr-2'><Link className="" to="/nosotros">Nosotros</Link></li>
              <li className='pr-2'><Link className="" to="/contacto">Contacto</Link></li>
              <li className='pr-2'><CartWidget /></li>
            </div>
            
        </ul>
    </nav>
  )
}

export default Navbar