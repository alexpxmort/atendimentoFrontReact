  /**
 *Seletor de Cliente
 * 
 */
    


 import {createSelector} from 'reselect'

 const selectCliente = state =>state.clienteX;
 
 export const selectClientes = createSelector(
     [selectCliente],
     cliente => cliente.clientes
 )
 
 export const selectSuccess = createSelector(
     [selectCliente],
     cliente => cliente.success
 )
 
 
 export const selectClienteById = createSelector(
     [selectCliente],
     cliente => cliente.cliente
 )
 
 export const selectIsFetching = createSelector(
     [selectCliente],
     cliente => cliente.isFetching
 )