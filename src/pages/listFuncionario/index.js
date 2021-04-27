 /**
 * Página de Listagem de  Funcionários
 * 
 */
    


  import TableCustom from "../../components/table";
  import {useState,useEffect} from 'react';
  import {useSelector,useDispatch,shallowEqual} from 'react-redux'
  import { fetchFuncionarioStart,deleteFuncionarioStart } from "../../reducers/actions/funcionario/index";
  import {selectFuncionarios} from '../../reducers/selectors/funcionario/index'
  import {withRouter} from 'react-router-dom';
  
  const ListFuncionarioPage = ({history})=>{
  
      const dispatch = useDispatch()
      const funcionarios = useSelector(selectFuncionarios,shallowEqual)
  
      const fecthFuncionarios = ()=>{
          dispatch(fetchFuncionarioStart());
      }
  
      const deleteFuncionario = (id)=>{
          dispatch(deleteFuncionarioStart(id));
      }
  
      const addFuncionario = ()=>{
          history.push('addFuncionario')
       }
  
      useEffect(()=>{
          setRows(funcionarios)
      },[funcionarios])
  
  
      useEffect(()=>{
        fecthFuncionarios()
      },[])
  
  
      const [headers,setHeaders] = useState([
          'Nome',
          'Email'
      ])
  
      const editFuncionario = (id)=>{
          history.push(`editFuncionario/${id}`)
      }
  
      const [rows,setRows] = useState([])
  
      const [data_names,setDataNames] = useState([
          'nome',
          'email'
      ])
  
          return (
              
              <TableCustom
              rows={rows}
              headers={headers}
              data_names={data_names}
              handleDelete={deleteFuncionario}
              handleEdit={editFuncionario}
              handleAdd={addFuncionario}
              nameDel={'funcionario'}
                  />
              
          )
      
  
     
  }
  
  export default withRouter(ListFuncionarioPage);