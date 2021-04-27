 /**
 * Página de Listagem de  Servicos
 * 
 */
    


  import TableCustom from "../../components/table";
  import {useState,useEffect} from 'react';
  import {useSelector,useDispatch,shallowEqual} from 'react-redux'
  import { fetchServicoStart } from "../../reducers/actions/servico/index";
  import {selectServicos} from '../../reducers/selectors/servico/index'
  import {withRouter} from 'react-router-dom';
  import { deleteServicoStart } from "../../reducers/actions/servico/index";
  
  const ListServicoPage = ({history})=>{
  
      const dispatch = useDispatch()
      const servicos = useSelector(selectServicos,shallowEqual)
  
      const fecthServicos = ()=>{
          dispatch(fetchServicoStart());
      }
  
      const deleteServico = (id)=>{
          dispatch(deleteServicoStart(id));
      }
  
      const addServico = ()=>{
          history.push('addServico')
       }
  
      useEffect(()=>{
          setRows(servicos)
      },[servicos])
  
  
      useEffect(()=>{
        fecthServicos()
      },[])
  
  
      const [headers,setHeaders] = useState([
          'Nome',
          'Quantidade de Minutos',
          'Valor'
      ])
  
      const editServico = (id)=>{
          history.push(`editServico/${id}`)
      }
  
      const [rows,setRows] = useState([])
  
      const [data_names,setDataNames] = useState([
          'nome',
          'qtd_min',
          'valor'
      ])
  
          return (
              
              <TableCustom
              rows={rows}
              headers={headers}
              data_names={data_names}
              handleDelete={deleteServico}
              handleEdit={editServico}
              handleAdd={addServico}
              nameDel={'servico'}
                  />
              
          )
      
  
     
  }
  
  export default withRouter(ListServicoPage);