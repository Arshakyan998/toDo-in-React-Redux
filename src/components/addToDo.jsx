import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {addToDo} from '../redux/actions/index'
import "./index.scss"
function AddToDo() {

        const [value,setValue]=React.useState("")
        const dispatch=useDispatch()


        const { items } = useSelector((state) => {

                return {
                  items: state.addToDo.items,
                };
        })


 const changeInput=(e)=>{
setValue(e.target.value)
}

const addItem=()=>{
         if(value===""){
                return false
        } else{
                let result={
                        id:items.length>1?items.length+1:0,
                        text:value,
                        isComplite:false
                        
                 }
                        
                 dispatch(addToDo(result))
 
                 setValue("")
        }
}

const addNewItem=({key})=>{

      

       if(key==="Enter"){
               if(value===""){
                       return false
               }else{

               
               let result={
                       id:items.length>1?items.length+1:0,
                       text:value,
                       isComplite:false
                       
                }
                       
                dispatch(addToDo(result))

                setValue("")
        }
       }
}

        return (
        


<div className="input-group mb-3 container">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" 
    type="button"
    onClick={addItem}
    
    >Button</button>
  </div>
  <input 
  type="text" 
  className="form-control add_item" 
  placeholder=""
 aria-label=""
 aria-describedby="basic-addon1"
 value={value}       
 onInput={changeInput} 
  onKeyPress={addNewItem}
 />
</div>




        )
}

 export default AddToDo
