  /**
 *Seletor de Servico
 * 
 */
    


 import {createSelector} from 'reselect'

 const selectServico = state =>state.servicoX;
 
 export const selectServicos = createSelector(
     [selectServico],
     servico => servico.servicos
 )
 
 export const selectSuccess = createSelector(
     [selectServico],
     servico => servico.success
 )
 
 
 export const selectServicoById = createSelector(
     [selectServico],
     servico => servico.servico
 )
 
 export const selectIsFetching = createSelector(
     [selectServico],
     servico => servico.isFetching
 )