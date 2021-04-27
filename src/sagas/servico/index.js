/**
 *Sagas de servico
 * 
 */


 import { takeLatest, call, put,all } from 'redux-saga/effects';
 import _ from 'lodash'
 import {Message} from '../../components/msg_alerts/msg_alerts'
 import {
  addServicoFailure,
  addServicoSuccess,
  fetchServicoFailure,
  fetchServicoSuccess,
  deletesServicoSuccess,
  deleteServicoFailure,
  getServicoFailure,
  getServicoSuccess,
  editServicoSuccess,
  editServicoFailure
 } from '../../reducers/actions/servico/index';
 
 import {ServicoActionTypes} from '../../reducers/types';
 import {getAllMethod,createMethod,deleteMethod,getByIdMethod,updateMethod} from '../../requests/api/api';
 
 export function* addServicoAsync({payload}) {
     try {
 
       const newServico = yield createMethod(payload,'servicos');
       
       yield put(addServicoSuccess(newServico));
 
      
       if(!newServico.error){
         yield  Message('Servico Salvo com Sucesso !!','success');
       } else{
         let msg = `${newServico.msg}  \n${(newServico.erros)?JSON.stringify(newServico.erros):''}`
         yield Message(msg,'warning');
         yield put(addServicoFailure(msg));
       }
     } catch (error) {
       yield put(addServicoFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
   export function* editServicoAsync({payload}) {
     try {
 
       const editedServico = yield updateMethod(payload.data,'servicos',payload.id);
       
       yield put(editServicoSuccess(editedServico));
 
       if(!editedServico.error){
         yield  Message('Servico atualizado com Sucesso !!','success'); 
       } else{
         let msg = `${editedServico.msg}  ${(editedServico.erros)?JSON.stringify(editedServico.erros):''}`
         yield Message(msg,'warning');
         yield put(editServicoFailure(msg));
       }
     } catch (error) {
       yield put(editServicoFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
   export function* deleteServicoAsync({payload}){
     try {
 
      let resp =  yield deleteMethod('servicos',payload);
       
       yield put(deletesServicoSuccess(payload));
 
       if(!resp.error){
         yield  Message('Servico removido com Sucesso !!','success'); 
       } else{
         let msg = `${resp.msg}  ${(resp.erros)?JSON.stringify(resp.erros):''}`
 
         yield Message(msg,'warning');
         yield put(deleteServicoFailure(msg));
       }
     } catch (error) {
       yield put(deleteServicoFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
   export function* getServicoStartAsync({payload}){
     try {
 
       let servico  = yield getByIdMethod('servicos',payload);
       
       yield put(getServicoSuccess({...servico}));
     } catch (error) {
       yield put(getServicoFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
   export function* addServicoStart() {
     yield takeLatest(ServicoActionTypes.ADD_SERVICO_START , addServicoAsync);
   }
 
   export function* editServicoStart() {
     yield takeLatest(ServicoActionTypes.EDIT_SERVICO_START , editServicoAsync);
   }
 
   export function* deleteServicoStart() {
     yield takeLatest(ServicoActionTypes.DELETE_SERVICO_START , deleteServicoAsync);
   }
 
   export function* getServicoStart(){
     yield takeLatest(ServicoActionTypes.GET_SERVICO_START,getServicoStartAsync)
   }
 
 export function* fetchServicoAsync({payload}) {
   try {
     const servicos = yield getAllMethod('servicos');
     yield put(fetchServicoSuccess(servicos));
   } catch (error) {
     yield put(fetchServicoFailure(error.message));
   }
 }
 
 
 export function* fetchServicoStart() {
   yield takeLatest(ServicoActionTypes.FETCH_COLLECTIONS_START_SERVICO, fetchServicoAsync);
 }
   
 
 export function* servicoSagas() {
   yield all([
     call(addServicoStart),
     call(fetchServicoStart),
     call(deleteServicoStart),
     call(getServicoStart),
     call(editServicoStart)
    ]);
 }