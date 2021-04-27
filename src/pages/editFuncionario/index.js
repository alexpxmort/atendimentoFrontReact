 /**
 * Página de Editar Funcioanrio
 * 
 */
    

  import {useDispatch} from 'react-redux'
  import{editFuncionarioStart,getFuncionarioStart} from '../../reducers/actions/funcionario/index'
  import {withRouter,useParams} from 'react-router-dom'
  import{useState,useEffect} from 'react'
  import {useSelector,shallowEqual} from 'react-redux'
  import { selectFuncionarioById } from "../../reducers/selectors/funcionario/index";
  import {empty} from '../../utils/string.utils'
  import {Spinner} from "../../components/loading/loading.compont";
  import FormCustomFuncionario from "../../components/form/funcionario.form"
  import { fetchServicoStart } from "../../reducers/actions/servico/index";
  import {selectServicos} from '../../reducers/selectors/servico/index'
  
  
  
  const EditFuncionarioPage = ({history})=>{
  
      let _initialData = {
          nome:'',
          email:'',
          servico_id:null
      };
      
      const funcionario = useSelector(selectFuncionarioById,shallowEqual)
      const dispatch = useDispatch()
      const [initialData,setData] = useState(_initialData)
      const [loading,setLoading] = useState(true)
      const [options,setOptions] = useState([])
  
      const {id} = useParams()
  
      const id_form = 'funcionario_form_edit';
      
      const editFuncioanrio =  (data)=>{
          dispatch (editFuncionarioStart(data))
      }

      const servicos = useSelector(selectServicos,shallowEqual);
  
      const fecthServicos = ()=>{
          dispatch(fetchServicoStart());
      }

      useEffect(()=>{
        fecthServicos()
      },[])
  

   const initializeOptionsSelect  = async (options)=>{
     await   options.forEach((val)=>{
           val.value = val.id
           val.label = val.nome
       })
   }
   useEffect(async ()=>{


      await  initializeOptionsSelect(servicos)
       setOptions(servicos)

   },[servicos])
  
      const goListFuncionario = ()=>{
          history.push('/funcionarios');
      }
  
      const fecthFuncionario = (id)=>{
          dispatch(getFuncionarioStart(id));
      }
  
      useEffect(()=>{
        fecthFuncionario(id)
      },[])
  
      useEffect( ()=>{
          if(!empty(funcionario)){
              setFieldsInitial(funcionario)
          }
      },[funcionario])

      const getServicoById =  (id)=>{
          let servico = servicos.filter((val) => val.id == id)

          if(servico.length > 0){
               servico = servico[0]
          }

          return servico
      }
  
  
      const setFieldsInitial = (funcionario)=>{
          if(!empty(funcionario)){
  
              let{nome,email,servico_id} = funcionario;
                
              let _servico = getServicoById(servico_id)
              
              let _obj = {
                  nome:nome,
                  email:email,
                  servico_id:_servico
              }
  
              
              setData(_obj)

              setTimeout(()=>{
                setLoading(false)
            },1000)
  
          }
        
      }
  
  
      const handleSubmit =  (data)=>{
           editFuncioanrio({data:data,id:id})
           setTimeout(()=>{
              goListFuncionario() 
           },1500)
       }
       
  
      if(!loading){
          return(
              <FormCustomFuncionario id={id_form} options={options}  initialData ={initialData} handleSubmit={handleSubmit}/>
          )
      }else{
          return (
              <Spinner/>
          )
      }
  }
  
  export default withRouter(EditFuncionarioPage);