  /**
 * Actions que serão usadas
 * 
 */
    

   import { FuncionarioActionTypes } from "../../types";

   export const addFuncionarioStart =(funcionario)=> ({
       type:FuncionarioActionTypes.ADD_FUNCIONARIO_START,
       payload:funcionario
   })
   
   export const addFuncionarioSuccess =(funcionario)=> ({
       type:FuncionarioActionTypes.ADD_FUNCIONARIO_SUCCESS,
       payload:funcionario
   })
   
   export const addFuncionarioFailure =(err)=> ({
       type:FuncionarioActionTypes.ADD_FUNCIONARIO_FAILURE,
       payload:err
   })
   
   
   
   export const editFuncionarioStart = (payload)=> ({
       type:FuncionarioActionTypes.EDIT_FUNCIONARIO_START,
       payload:payload
   })
   
   export const editFuncionarioSuccess = (funcionario)=> ({
       type:FuncionarioActionTypes.EDIT_FUNCIONARIO_SUCCESS,
       payload:funcionario
   })
   
   export const editFuncionarioFailure =(err)=> ({
       type:FuncionarioActionTypes.EDIT_FUNCIONARIO_FAILURE,
       payload:err
   })
   
   
   export const fetchFuncionarioStart =(payload)=> ({
       type:FuncionarioActionTypes.FETCH_COLLECTIONS_START_FUNCIONARIO,
       payload:payload
   })
   
   export const fetchFuncionarioSuccess =(funcionarios)=> ({
       type:FuncionarioActionTypes.FETCH_COLLECTIONS_SUCCESS_FUNCIONARIO,
       payload:funcionarios
   })
   
   export const fetchFuncionarioFailure =(err)=> ({
       type:FuncionarioActionTypes.FETCH_COLLECTIONS_FAILURE_FUNCIONARIO,
       payload:err
   })
   
   
   export const deleteFuncionarioStart = (payload)=> ({
       type:FuncionarioActionTypes.DELETE_FUNCIONARIO_START,
       payload:payload
   })
   
   export const deletesFuncionarioSuccess = (funcionario)=> ({
       type:FuncionarioActionTypes.DELETE_FUNCIONARIO_SUCCESS,
       payload:funcionario
   })
   
   export const deleteFuncionarioFailure = (err)=> ({
       type:FuncionarioActionTypes.DELETE_FUNCIONARIO_FAILURE,
       payload:err
   })
   
   export const getFuncionarioStart = (payload)=> ({
       type:FuncionarioActionTypes.GET_FUNCIONARIO_START,
       payload:payload
   })
   
   export const getFuncionarioSuccess = (funcionario)=> ({
       type:FuncionarioActionTypes.GET_FUNCIONARIO_SUCCESS,
       payload:funcionario
   })
   
   export const getFuncionarioFailure = (err)=> ({
       type:FuncionarioActionTypes.GET_FUNCIONARIO_FAILURE,
       payload:err
   })