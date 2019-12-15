const initialState={
    counter:0,
    results:[]
}
const reducer=(state=initialState,action)=>{
    //console.log("action",action);
    switch (action.type) {
        case 'INCREMENT':
         return{
            ...state,
            counter:state.counter+1
        }
        case 'DECREMENT':
         return{
            ...state,
            counter:state.counter-1
        }
        case 'ADD':
         return{
                 ...state,
                 counter:state.counter+action.value
            }
        case 'SUBTRACT':
                    return{
                            ...state,
                            counter:state.counter+action.value
                       }
        case "REMOVE_RESULT":{
            const updateArray=state.results.filter((results)=>results.id!=action.elemId);
            return{
                ...state,
                results:updateArray
            }
        }
                       
        default:
            break;
    }

    // if(action.type==="ADD"){
    //     return{
    //         ...state,
    //         counter:state.counter+action.value
    //     }
    // }
    // if(action.type==="SUBTRACT"){
    //     return{
    //         ...state,
    //         counter:state.counter+action.value
    //     }
    // }
    if(action.type==="STORE_RESULT"){
        return{
                ...state,
                results:state.results.concat({id:new Date(), value:state.counter})
        }
    }
    if(action.type==="REMOVE_RESULT"){
        const updateArray=state.results.filter((results)=>results.id!=action.elemId);
        return{
            ...state,
            results:updateArray
        }
    }
    return state;
}

export default reducer;