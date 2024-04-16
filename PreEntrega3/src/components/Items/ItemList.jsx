import { Item } from "./Item";


export const ItemList = ({item}) => {
  
  return (
    <div  className="flex flex-row flex-wrap gap-10 justify-center min-w-[1087px]: ml-[1rem]">
    {item.length > 0 &&
      item.map((i) => {
       return (
        <div className=" ">
          <Item i={i}/>
        </div>
       )
      })}
  </div>
  )
}
