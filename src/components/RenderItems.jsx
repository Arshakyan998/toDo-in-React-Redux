import React from "react";
import { useSelector,useDispatch } from "react-redux";

import {checkisComplite,outIsComplite,removeItem} from '../redux/actions/index'
import "./index.scss"

function RenderItems() {

        const dispatch=useDispatch()

  const { items } = useSelector((state) => {

    return {
      items: state.addToDo.items,
    };
  });


const checkComplite=(e,id)=>{
        
        if(e.target.checked){
        dispatch(checkisComplite(id))
}else{
        dispatch(outIsComplite(id))
}
        
}

const deleteItem=(id)=>{
dispatch(removeItem(id))
}

const active=items.filter(element=>element.isComplite)
const noActive=items.filter(element=>element.isComplite===false)

  return (
  <div className="main container"> 
          <h1> Active  {noActive.length} Total{items.length}  </h1>
<ul>{
     [...noActive,...active].length?[...noActive,...active].map(element=>{
             return <li key={element.id}>
                     <button onClick={()=>deleteItem(element.id)} 
                     className="btn btn-outline-danger"
                     
                     >X</button>
                     
                    <span className={element.isComplite?"content noActive":"content"  }> {element.text} </span>  <input type="checkbox" 
                      
             checked={element.isComplite}
              

             onChange={(e)=>checkComplite(e,element.id)}
             />
             
              </li>
                     
             
     }) : <h1 className="empty"><i> Список пуст</i></h1>
}</ul>


  </div>);
}

export default RenderItems;
