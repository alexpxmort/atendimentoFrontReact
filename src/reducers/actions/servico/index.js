  /**
 * Actions que serão usadas
 * 
 */
    

   import { ServicoActionTypes } from "../../types";

   export const addServicoStart =(servico)=> ({
       type:ServicoActionTypes.ADD_SERVICO_START,
       payload:servico
   })
   
   export const addServicoSuccess =(servico)=> ({
       type:ServicoActionTypes.ADD_SERVICO_SUCCESS,
       payload:servico
   })
   
   export const addServicoFailure =(err)=> ({
       type:ServicoActionTypes.ADD_SERVICO_FAILURE,
       payload:err
   })
   
   
   
   export const editServicoStart = (payload)=> ({
       type:ServicoActionTypes.EDIT_SERVICO_START,
       payload:payload
   })
   
   export const editServicoSuccess = (servico)=> ({
       type:ServicoActionTypes.EDIT_SERVICO_SUCCESS,
       payload:servico
   })
   
   export const editServicoFailure =(err)=> ({
       type:ServicoActionTypes.EDIT_SERVICO_FAILURE,
       payload:err
   })
   
   
   export const fetchServicoStart =(payload)=> ({
       type:ServicoActionTypes.FETCH_COLLECTIONS_START_SERVICO,
       payload:payload
   })
   
   export const fetchServicoSuccess =(servicos)=> ({
       type:ServicoActionTypes.FETCH_COLLECTIONS_SUCCESS_SERVICO,
       payload:servicos
   })
   
   export const fetchServicoFailure =(err)=> ({
       type:ServicoActionTypes.FETCH_COLLECTIONS_FAILURE_SERVICO,
       payload:err
   })
   
   
   export const deleteServicoStart = (payload)=> ({
       type:ServicoActionTypes.DELETE_SERVICO_START,
       payload:payload
   })
   
   export const deletesServicoSuccess = (servico)=> ({
       type:ServicoActionTypes.DELETE_SERVICO_SUCCESS,
       payload:servico
   })
   
   export const deleteServicoFailure = (err)=> ({
       type:ServicoActionTypes.DELETE_SERVICO_FAILURE,
       payload:err
   })
   
   export const getServicoStart = (payload)=> ({
       type:ServicoActionTypes.GET_SERVICO_START,
       payload:payload
   })
   
   export const getServicoSuccess = (servico)=> ({
       type:ServicoActionTypes.GET_SERVICO_SUCCESS,
       payload:servico
   })
   
   export const getServicoFailure = (err)=> ({
       type:ServicoActionTypes.GET_SERVICO_FAILURE,
       payload:err
   })