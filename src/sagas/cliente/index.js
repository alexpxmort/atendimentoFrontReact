/**
 *Sagas de Cliente
 * 
 */


 import { takeLatest, call, put,all } from 'redux-saga/effects';
 import _ from 'lodash'
 import {Message} from '../../components/msg_alerts/msg_alerts'
 import {
  addClienteFailure,
  addClienteSuccess,
  fetchClienteFailure,
  fetchClienteSuccess,
  deleteClienteFailure,
  deletesClienteSuccess,
  getClienteFailure,
  getClienteSuccess,
  editClienteSuccess,
  editClienteFailure
 } from '../../reducers/actions/cliente/index';
 
 import {ClienteActionTypes} from '../../reducers/types';
 import {getAllMethod,createMethod,deleteMethod,getByIdMethod,updateMethod,addRelationMethod} from '../../requests/api/api';
 
 
   export function* editClienteAsync({payload}) {
     try {
 
       const editedCliente = yield updateMethod(payload.data,'clientes',payload.id);
       
       yield put(editClienteSuccess(editedCliente));
 
       if(!editedCliente.error){
         yield  Message('Cliente atualizado com Sucesso !!','success'); 
       } else{
         let msg = `${editedCliente.msg}  ${(editedCliente.erros)?JSON.stringify(editedCliente.erros):''}`
         yield Message(msg,'warning');
         yield put(editClienteFailure(msg));
       }

       let _servicos = [];

       payload.data.servicos.forEach((val)=>{
           _servicos.push({id:val})
       })
    
       let related = yield addRelationMethod({servicos:_servicos},'clientes','Servicos',payload.id)


     } catch (error) {
       yield put(editClienteFailure(error.message));
       yield Message(error.message,'warning'); 
     }
   }
 
 
 
   export function* editClienteStart() {
     yield takeLatest(ClienteActionTypes.EDIT_CLIENTE_START , editClienteAsync);
   }
 
  
 

export function* fetchClienteoAsync({payload}) {
    try {
      const clientes = yield getAllMethod('clientes');
      yield put(fetchClienteSuccess(clientes));
    } catch (error) {
      yield put(fetchClienteFailure(error.message));
    }
  }
  

  
  export function* deleteClienteAsync({payload}){
    try {

     let resp =  yield deleteMethod('clientes',payload);
      
      yield put(deletesClienteSuccess(payload));

      if(!resp.error){
        yield  Message('Cliente removido com Sucesso !!','success'); 
      } else{
        let msg = `${resp.msg}  ${(resp.erros)?JSON.stringify(resp.erros):''}`

        yield Message(msg,'warning');
        yield put(deleteClienteFailure(msg));
      }
    } catch (error) {
      yield put(deleteClienteFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  export function* addClienteAsync({payload}) {
    try {

      const newCliente = yield createMethod(payload,'clientes');
      
      yield put(addClienteSuccess(newCliente));

     
      if(!newCliente.error){
        yield  Message('Cliente Salvo com Sucesso !!','success');
      } else{
        let msg = `${newCliente.msg}  \n${(newCliente.erros)?JSON.stringify(newCliente.erros):''}`
        yield Message(msg,'warning');
        yield put(addClienteFailure(msg));
      }

      let _servicos = [];

      payload.servicos.forEach((val)=>{
          _servicos.push({id:val})
      })

      let related = yield addRelationMethod({servicos:_servicos},'clientes','Servicos',newCliente.id)



    } catch (error) {
      yield put(addClienteFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }

  
  export function* getClienteStartAsync({payload}){
    try {

      let cliente  = yield getByIdMethod('clientes',payload);
      
      yield put(getClienteSuccess({...cliente}));
    } catch (error) {
      yield put(getClienteFailure(error.message));
      yield Message(error.message,'warning'); 
    }
  }



  export function* getClienteStart(){
    yield takeLatest(ClienteActionTypes.GET_CLIENTE_START,getClienteStartAsync)
  }

  

export function* fetchClientesStart() {
    yield takeLatest(ClienteActionTypes.FETCH_COLLECTIONS_START_CLIENTE, fetchClienteoAsync);
  }

  export function* deleteClienteStart() {
    yield takeLatest(ClienteActionTypes.DELETE_CLIENTE_START , deleteClienteAsync);
  }

  export function* addClienteStart() {
    yield takeLatest(ClienteActionTypes.ADD_CLIENTE_START , addClienteAsync);
  }
   
 
 export function* clienteSagas() {
   yield all([
     call(fetchClientesStart),
     call(deleteClienteStart),
     call(addClienteStart),
     call(getClienteStart),
     call(editClienteStart)
    ]);
 }