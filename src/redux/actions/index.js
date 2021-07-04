export const addToDo=(val)=>{
        return{
                type:"ADD_TO_DO",
                payload:val
        }
}

export const checkisComplite=(val)=>{
        return{
                type:"CHECK_IS_COMPLITE",
                payload:val
        }
}


export const outIsComplite=(val)=>{
        return{
                type:"OUT_COMPLITE",
                payload:val
        }
}

export const removeItem=(val)=>{
        return {
                type:"REMOVE_ITEM",
                payload:val
        }
}