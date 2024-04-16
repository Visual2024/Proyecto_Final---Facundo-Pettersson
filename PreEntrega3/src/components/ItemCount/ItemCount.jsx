import { useState } from "react";
import { ItemAdd } from "./ItemAdd";


export const ItemCount = ({product}) => {
  const [count, setCount] = useState(1)

  const hadlerRestar = () => {
    count > 1 && setCount(count - 1);
  };

  const hadlerSumar = () => {
    count < product.cantidad && setCount(count + 1);
  };

  return (
   <div>
     <div className="flex flex-row flex-wrap mt-5 items-center">
      <button
        onClick={hadlerRestar}
        className="p-1 w-10 bg-red-500 rounded-xl mr-2"
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={hadlerSumar}
        className="p-1 w-10 bg-red-500 rounded-xl ml-2"
      >
        +
      </button>
    </div>
      <ItemAdd product={product} count={count}/>
   </div>
  );
};
