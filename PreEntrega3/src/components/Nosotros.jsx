import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-[2rem]">Nosotros</h1>
        <p>Proxima Versiones agregaremos el nosotros</p>
    </div>
  )
}

export default Nosotros