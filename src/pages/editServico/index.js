 /**
 * Página de Editar Servico
 * 
 */
    

  import FormCustomServico from "../../components/form/servico.form"
  import {useDispatch} from 'react-redux'
  import{editServicoStart,getServicoStart} from '../../reducers/actions/servico/index'
  import {withRouter,useParams} from 'react-router-dom'
  import{useState,useEffect} from 'react'
  import {useSelector,shallowEqual} from 'react-redux'
  import { selectServicoById } from "../../reducers/selectors/servico";
  import {empty} from '../../utils/string.utils'
  import {Spinner} from "../../components/loading/loading.compont";
  
  
  
  const EditServicoPage = ({history})=>{
  
      let _initialData = {
          nome:'',
          valor:'',
          qtd_min:0
      };
      
      const servico = useSelector(selectServicoById,shallowEqual)
      const dispatch = useDispatch()
      const [initialData,setData] = useState(_initialData)
      const [loading,setLoading] = useState(true)
  
      const {id} = useParams()
  
      const id_form = 'servico_form_edit';
      
      const editServico =  (data)=>{
          dispatch (editServicoStart(data))
      }
  
      const goListServico = ()=>{
          history.push('/servicos');
      }
  
      const fecthServico = (id)=>{
          dispatch(getServicoStart(id));
      }
  
      useEffect(()=>{
        fecthServico(id)
      },[])
  
      useEffect( ()=>{
          if(!empty(servico)){
              setFieldsInitial(servico)
          }
      },[servico])
  
  
      const setFieldsInitial = (servico)=>{
          if(!empty(servico)){
  
              let{nome,valor,qtd_min} = servico;
                
              let _obj = {
                  nome:nome,
                  valor:valor,
                  qtd_min:qtd_min
              }
  
              
              setData(_obj)
  
              setTimeout(()=>{
                  setLoading(false)
              },1000)
          }
        
      }
  
  
      const handleSubmit =  (data)=>{
           editServico({data:data,id:id})
           setTimeout(()=>{
              goListServico() 
           },1500)
       }
       
  
      if(!loading){
          return(
              <FormCustomServico id={id_form}  initialData ={initialData} handleSubmit={handleSubmit}/>
          )
      }else{
          return (
              <Spinner/>
          )
      }
  }
  
  export default withRouter(EditServicoPage);