import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
  return (
    <div className="flex flex-col w-[30%] pl-2 pr-2 mb-3 rounded-md">
        <img src={producto.imagen} alt={producto.titulo} width={400} />
        <div className='bg-slate-500 pt-2 pb-3 pl-2'>
            <h4 className='font-bold text-[2rem]'>{producto.titulo}</h4>
            <p className='font-semibold text-red-500 text-[1rem] pb-5 '>${producto.precio}</p>
            <Link className="bg-red-400 pl-4 pr-4 pt-2 pb-2 rounded-xl " to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item