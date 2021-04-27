
    /**
 *Reducer de Servico
 * 
 */
    

 import { ServicoActionTypes } from "../types";


 const INITIAL_STATE = {
     servicos: [],
     isFetching:false,
     errorMessage:undefined,
     success:false,
     servico:null
 }
 
 const servicoReducer = (state = INITIAL_STATE , action)=>{
     switch(action.type){
 
         case ServicoActionTypes.ADD_SERVICO_SUCCESS:
             return {...state,
                 isFetching:false,
                 servicos: [...state.servicos, action.payload],
                 success:true
             }
         break;
 
     case ServicoActionTypes.EDIT_SERVICO_SUCCESS:
         return {...state,
             isFetching:false,
             servico:action.payload,
             success:true
         }
     break;
 
     case ServicoActionTypes.DELETE_SERVICO_SUCCESS:
         return{
             ...state,
             servicos: state.servicos.filter(({id})=> id!=action.payload),
             isFetching:false,
             success:true
         }
     break;
 
     case ServicoActionTypes.DELETE_SERVICO_START:
         return {
             ...state,
             isFetching:false,
             success:false,
             errorMessage:undefined
         }
         break;
 
     case ServicoActionTypes.ADD_SERVICO_START:
     case ServicoActionTypes.FETCH_COLLECTIONS_START_SERVICO:
     case ServicoActionTypes.GET_SERVICO_START:
     case ServicoActionTypes.EDIT_SERVICO_START:
     return {
         ...state,
         isFetching:true,
         success:false,
         errorMessage:undefined
     }
     break;
 
     case ServicoActionTypes.FETCH_COLLECTIONS_SUCCESS_SERVICO:
         return {...state,servicos:action.payload,isFetching:false,success:true}
     break;
 
     case ServicoActionTypes.GET_SERVICO_SUCCESS:
         return {...state,servico:action.payload,isFetching:false,success:true}
     break;
 
     case ServicoActionTypes.ADD_SERVICO_FAILURE:
     case ServicoActionTypes.FETCH_COLLECTIONS_FAILURE_SERVICO:
     case ServicoActionTypes.DELETE_SERVICO_FAILURE:
     case ServicoActionTypes.GET_SERVICO_FAILURE:
     case ServicoActionTypes.EDIT_SERVICO_FAILURE:
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
 export default servicoReducer;