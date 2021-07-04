const initalState={
       items: [
        {
                id:1,
                text:"Learn HTML",
                isComplite:false,
        },
        {
                id:2,
                text:"Learn CSS",
                isComplite:true,
        },
        {
                id:3,
                text:"Learn JS",
                isComplite:false,
        }

]}

export const addToDo=(state=initalState,action)=>{
        switch (action.type) {
                
                case "ADD_TO_DO":{
                         
                        return{
                                ...state,
                                ...state.items.push(action.payload)
                        }
     
                }

                case "CHECK_IS_COMPLITE":{
                        return{
                                ...state,
                                ...state.items.filter(element=>element.id===action.payload)
                                .filter(element=>element.isComplite=true)
                                
                        }

                }
                case "OUT_COMPLITE":{
                        return{
                                ...state,
                                ...state.items.filter(element=>element.id===action.payload)
                                .filter(element=>element.isComplite=false)
                                
                        }
                }

                case "REMOVE_ITEM":{
                        for(let i=0; i<state.items.length;i++){
                                if(state.items[i].id===action.payload){
                                        state.items.splice(i,1)
                                }

                        }
                        return{
                                ...state,
                                ...state.items



                        }

   
                }

               
                        
        
                default:
                        return state;
                       
        }
}