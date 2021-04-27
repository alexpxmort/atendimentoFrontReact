  /**
 * Actions que serão usadas
 * 
 */
    

   import { ClienteActionTypes } from "../../types";

   export const addClienteStart =(cliente)=> ({
       type:ClienteActionTypes.ADD_CLIENTE_START,
       payload:cliente
   })
   
   export const addClienteSuccess =(cliente)=> ({
       type:ClienteActionTypes.ADD_CLIENTE_SUCCESS,
       payload:cliente
   })
   
   export const addClienteFailure =(err)=> ({
       type:ClienteActionTypes.ADD_CLIENTE_FAILURE,
       payload:err
   })
   
   
   
   export const editClienteStart = (payload)=> ({
       type:ClienteActionTypes.EDIT_CLIENTE_START,
       payload:payload
   })
   
   export const editClienteSuccess = (cliente)=> ({
       type:ClienteActionTypes.EDIT_CLIENTE_SUCCESS,
       payload:cliente
   })
   
   export const editClienteFailure =(err)=> ({
       type:ClienteActionTypes.EDIT_CLIENTE_FAILURE,
       payload:err
   })
   
   
   export const fetchClienteStart =(payload)=> ({
       type:ClienteActionTypes.FETCH_COLLECTIONS_START_CLIENTE,
       payload:payload
   })
   
   export const fetchClienteSuccess =(clientes)=> ({
       type:ClienteActionTypes.FETCH_COLLECTIONS_SUCCESS_CLIENTE,
       payload:clientes
   })
   
   export const fetchClienteFailure =(err)=> ({
       type:ClienteActionTypes.FETCH_COLLECTIONS_FAILURE_CLIENTE,
       payload:err
   })
   
   
   export const deleteClienteStart = (payload)=> ({
       type:ClienteActionTypes.DELETE_CLIENTE_START,
       payload:payload
   })
   
   export const deletesClienteSuccess = (cliente)=> ({
       type:ClienteActionTypes.DELETE_CLIENTE_SUCCESS,
       payload:cliente
   })
   
   export const deleteClienteFailure = (err)=> ({
       type:ClienteActionTypes.DELETE_CLIENTE_FAILURE,
       payload:err
   })
   
   export const getClienteStart = (payload)=> ({
       type:ClienteActionTypes.GET_CLIENTE_START,
       payload:payload
   })
   
   export const getClienteSuccess = (cliente)=> ({
       type:ClienteActionTypes.GET_CLIENTE_SUCCESS,
       payload:cliente
   })
   
   export const getClienteFailure = (err)=> ({
       type:ClienteActionTypes.GET_CLIENTE_FAILURE,
       payload:err
   })