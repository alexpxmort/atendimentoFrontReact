  /**
 *Reducer Principal que agrupa todos os reducers
 * 
 */
    
 import { combineReducers } from "redux";
import clienteReducer from "./cliente";
import funcionarioReducer from "./funcionario";

 import servicoReducer from './servico/index'
 
  const rootReducer = combineReducers({
    servicoX:servicoReducer,
    funcionarioX:funcionarioReducer,
    clienteX:clienteReducer
  });
 
 export default rootReducer;