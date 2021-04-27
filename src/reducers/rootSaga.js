 /**
 *Saga Principal que agrupa todas as sagas
 * 
 */
 import { all, call } from 'redux-saga/effects';
import { clienteSagas } from '../sagas/cliente';
import { funcionarioSagas } from '../sagas/funcionario';
 import { servicoSagas } from '../sagas/servico';
 
 
 export default function* rootSaga(){
     yield all([
         call(servicoSagas),
         call(funcionarioSagas),
         call(clienteSagas)
     ])
 }