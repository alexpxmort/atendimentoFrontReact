
    /**
 *Reducer de Cliente
 * 
 */
    

 import { ClienteActionTypes } from "../types";


 const INITIAL_STATE = {
     clientes: [],
     isFetching:false,
     errorMessage:undefined,
     success:false,
     cliente:null
 }
 
 const clienteReducer = (state = INITIAL_STATE , action)=>{
     switch(action.type){
 
         case ClienteActionTypes.ADD_CLIENTE_SUCCESS:
             return {...state,
                 isFetching:false,
                 clientes: [...state.clientes, action.payload],
                 success:true
             }
         break;
 
     case ClienteActionTypes.EDIT_CLIENTE_SUCCESS:
         return {...state,
             isFetching:false,
             cliente:action.payload,
             success:true
         }
     break;
 
     case ClienteActionTypes.DELETE_CLIENTE_SUCCESS:
         return{
             ...state,
             clientes: state.clientes.filter(({id})=> id!=action.payload),
             isFetching:false,
             success:true
         }
     break;
 
     case ClienteActionTypes.DELETE_CLIENTE_START:
         return {
             ...state,
             isFetching:false,
             success:false,
             errorMessage:undefined
         }
         break;
 
     case ClienteActionTypes.ADD_CLIENTE_START:
     case ClienteActionTypes.FETCH_COLLECTIONS_START_CLIENTE:
     case ClienteActionTypes.GET_CLIENTE_START:
     case ClienteActionTypes.EDIT_CLIENTE_START:
     return {
         ...state,
         isFetching:true,
         success:false,
         errorMessage:undefined
     }
     break;
 
     case ClienteActionTypes.FETCH_COLLECTIONS_SUCCESS_CLIENTE:
         return {...state,clientes:action.payload,isFetching:false,success:true}
     break;
 
     case ClienteActionTypes.GET_CLIENTE_SUCCESS:
         return {...state,cliente:action.payload,isFetching:false,success:true}
     break;
 
     case ClienteActionTypes.ADD_CLIENTE_FAILURE:
     case ClienteActionTypes.FETCH_COLLECTIONS_FAILURE_CLIENTE:
     case ClienteActionTypes.DELETE_CLIENTE_FAILURE:
     case ClienteActionTypes.GET_CLIENTE_FAILURE:
     case ClienteActionTypes.EDIT_CLIENTE_FAILURE:
         return {...state,
             isFetching:false,
             errorMessage:action.payload,
             success:false
         }
         break;   
     
         default:
             return state;
     }
 }
 export default clienteReducer;