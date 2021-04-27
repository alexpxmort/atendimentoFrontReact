
    /**
 *Reducer de Funcionario
 * 
 */
    

 import { FuncionarioActionTypes } from "../types";


 const INITIAL_STATE = {
     funcionarios: [],
     isFetching:false,
     errorMessage:undefined,
     success:false,
     funcionario:null
 }
 
 const funcionarioReducer = (state = INITIAL_STATE , action)=>{
     switch(action.type){
 
         case FuncionarioActionTypes.ADD_FUNCIONARIO_SUCCESS:
             return {...state,
                 isFetching:false,
                 funcionarios: [...state.funcionarios, action.payload],
                 success:true
             }
         break;
 
     case FuncionarioActionTypes.EDIT_FUNCIONARIO_SUCCESS:
         return {...state,
             isFetching:false,
             funcionario:action.payload,
             success:true
         }
     break;
 
     case FuncionarioActionTypes.DELETE_FUNCIONARIO_SUCCESS:
         return{
             ...state,
             funcionarios: state.funcionarios.filter(({id})=> id!=action.payload),
             isFetching:false,
             success:true
         }
     break;
 
     case FuncionarioActionTypes.DELETE_FUNCIONARIO_START:
         return {
             ...state,
             isFetching:false,
             success:false,
             errorMessage:undefined
         }
         break;
 
     case FuncionarioActionTypes.ADD_FUNCIONARIO_START:
     case FuncionarioActionTypes.FETCH_COLLECTIONS_START_FUNCIONARIO:
     case FuncionarioActionTypes.GET_FUNCIONARIO_START:
     case FuncionarioActionTypes.EDIT_FUNCIONARIO_START:
     return {
         ...state,
         isFetching:true,
         success:false,
         errorMessage:undefined
     }
     break;
 
     case FuncionarioActionTypes.FETCH_COLLECTIONS_SUCCESS_FUNCIONARIO:
         return {...state,funcionarios:action.payload,isFetching:false,success:true}
     break;
 
     case FuncionarioActionTypes.GET_FUNCIONARIO_SUCCESS:
         return {...state,funcionario:action.payload,isFetching:false,success:true}
     break;
 
     case FuncionarioActionTypes.ADD_FUNCIONARIO_FAILURE:
     case FuncionarioActionTypes.FETCH_COLLECTIONS_FAILURE_FUNCIONARIO:
     case FuncionarioActionTypes.DELETE_FUNCIONARIO_FAILURE:
     case FuncionarioActionTypes.GET_FUNCIONARIO_FAILURE:
     case FuncionarioActionTypes.EDIT_FUNCIONARIO_FAILURE:
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
 export default funcionarioReducer;