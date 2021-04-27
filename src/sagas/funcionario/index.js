/**
 *Sagas de funcionario
 * 
 */


 import { takeLatest, call, put,all } from 'redux-saga/effects';
 import _ from 'lodash'
 import {Message} from '../../components/msg_alerts/msg_alerts'
 import {
  addFuncionarioFailure,
  addFuncionarioSuccess,
  fetchFuncionarioFailure,
  fetchFuncionarioSuccess,
  deleteFuncionarioFailure,
  deletesFuncionarioSuccess,
  getFuncionarioFailure,
  getFuncionarioSuccess,
  editFuncionarioSuccess,
  editFuncionarioFailure
 } from '../../reducers/actions/funcionario/index';
 
 import {FuncionarioActionTypes} from '../../reducers/types';
 import {getAllMethod,createMethod,deleteMethod,getByIdMethod,updateMethod,addRelationMethod} from '../../requests/api/api';
 
 
   export function* editFuncionarioAsync({payload}) {
     try {
 
       const editedFuncionario = yield updateMethod(payload.data,'funcionarios',payload.id);
       
       yield put(editFuncionarioSuccess(editedFuncionario));
 
       if(!editedFuncionario.error){
         yield  Message('Funcionário atualizado com Sucesso !!','success'); 
       } else{
         let msg = `${editedFuncionario.msg}  ${(editedFuncionario.erros)?JSON.stringify(editedFuncionario.erros):''}`
         yield Message(msg,'warning');
         yield put(editFuncionarioFailure(msg));
       }

     } catch (error) {
       yield put(editFuncionarioFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
 
 
   export function* editFuncionarioStart() {
     yield takeLatest(FuncionarioActionTypes.EDIT_FUNCIONARIO_START , editFuncionarioAsync);
   }
 
  
 

export function* fetchFuncionariooAsync({payload}) {
    try {
      const funcionarios = yield getAllMethod('funcionarios');
      yield put(fetchFuncionarioSuccess(funcionarios));
    } catch (error) {
      yield put(fetchFuncionarioFailure(error.message));
    }
  }
  

  
  export function* deleteFuncionarioAsync({payload}){
    try {

     let resp =  yield deleteMethod('funcionarios',payload);
      
      yield put(deletesFuncionarioSuccess(payload));

      if(!resp.error){
        yield  Message('Funcionário removido com Sucesso !!','success'); 
      } else{
        let msg = `${resp.msg}  ${(resp.erros)?JSON.stringify(resp.erros):''}`

        yield Message(msg,'warning');
        yield put(deleteFuncionarioFailure(msg));
      }
    } catch (error) {
      yield put(deleteFuncionarioFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* addFuncionarioAsync({payload}) {
    try {

      const newFuncionario = yield createMethod(payload,'funcionarios');
      
      yield put(addFuncionarioSuccess(newFuncionario));

     
      if(!newFuncionario.error){
        yield  Message('Funcionário Salvo com Sucesso !!','success');
      } else{
        let msg = `${newFuncionario.msg}  \n${(newFuncionario.erros)?JSON.stringify(newFuncionario.erros):''}`
        yield Message(msg,'warning');
        yield put(addFuncionarioFailure(msg));
      }

      let related = yield addRelationMethod({funcionario_id:newFuncionario.id},'servicos','Funcionario',payload.servico_id)

    } catch (error) {
      yield put(addFuncionarioFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  
  export function* getFuncionarioStartAsync({payload}){
    try {

      let funcionario  = yield getByIdMethod('funcionarios',payload);
      
      yield put(getFuncionarioSuccess({...funcionario}));
    } catch (error) {
      yield put(getFuncionarioFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }



  export function* getFuncionarioStart(){
    yield takeLatest(FuncionarioActionTypes.GET_FUNCIONARIO_START,getFuncionarioStartAsync)
  }

  

export function* fetchFuncionariosStart() {
    yield takeLatest(FuncionarioActionTypes.FETCH_COLLECTIONS_START_FUNCIONARIO, fetchFuncionariooAsync);
  }

  export function* deleteFuncionarioStart() {
    yield takeLatest(FuncionarioActionTypes.DELETE_FUNCIONARIO_START , deleteFuncionarioAsync);
  }

  export function* addFuncionarioStart() {
    yield takeLatest(FuncionarioActionTypes.ADD_FUNCIONARIO_START , addFuncionarioAsync);
  }
   
 
 export function* funcionarioSagas() {
   yield all([
     call(fetchFuncionariosStart),
     call(deleteFuncionarioStart),
     call(addFuncionarioStart),
     call(getFuncionarioStart),
     call(editFuncionarioStart)
    ]);
 }