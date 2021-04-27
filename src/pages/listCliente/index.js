 /**
 * Página de Listagem de  Funcionários
 * 
 */
    


  import TableCustom from "../../components/table";
  import {useState,useEffect} from 'react';
  import {useSelector,useDispatch,shallowEqual} from 'react-redux'
  import { fetchClienteStart,deleteClienteStart } from "../../reducers/actions/cliente/index";
  import {selectClientes} from '../../reducers/selectors/cliente/index'
  import {withRouter} from 'react-router-dom';
  
  const ListClientePage = ({history})=>{
  
      const dispatch = useDispatch()
      const clientes = useSelector(selectClientes,shallowEqual)
  
      const fecthClientes = ()=>{
          dispatch(fetchClienteStart());
      }
  
      const deleteCliente = (id)=>{
          dispatch(deleteClienteStart(id));
      }
  
      const addCliente = ()=>{
          history.push('addCliente')
       }
  
      useEffect(()=>{
          setRows(clientes)
      },[clientes])
  
  
      useEffect(()=>{
        fecthClientes()
      },[])
  
  
      const [headers,setHeaders] = useState([
          'Nome',
          'Email'
      ])
  
      const editCliente = (id)=>{
          history.push(`editCliente/${id}`)
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
              handleDelete={deleteCliente}
              handleEdit={editCliente}
              handleAdd={addCliente}
              nameDel={'cliente'}
                  />
              
          )
      
  
     
  }
  
  export default withRouter(ListClientePage);