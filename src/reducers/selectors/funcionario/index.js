  /**
 *Seletor de Funcionário
 * 
 */
    


 import {createSelector} from 'reselect'

 const selectFuncionario = state =>state.funcionarioX;
 
 export const selectFuncionarios = createSelector(
     [selectFuncionario],
     funcionario => funcionario.funcionarios
 )
 
 export const selectSuccess = createSelector(
     [selectFuncionario],
     funcionario => funcionario.success
 )
 
 
 export const selectFuncionarioById = createSelector(
     [selectFuncionario],
     funcionario => funcionario.funcionario
 )
 
 export const selectIsFetching = createSelector(
     [selectFuncionario],
     funcionario => funcionario.isFetching
 )