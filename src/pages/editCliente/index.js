 /**
 * Página de Editar Cliente
 * 
 */
    

  import {useDispatch} from 'react-redux'
  import {withRouter,useParams} from 'react-router-dom'
  import{useState,useEffect} from 'react'
  import {useSelector,shallowEqual} from 'react-redux'
  import { selectClienteById } from "../../reducers/selectors/cliente/index";
  import {empty} from '../../utils/string.utils'
  import {Spinner} from "../../components/loading/loading.compont";
  import FormCustomCliente from "../../components/form/cliente.form"
  import { fetchServicoStart } from "../../reducers/actions/servico/index";
  import {selectServicos} from '../../reducers/selectors/servico/index'
  import { getClienteStart,editClienteStart } from '../../reducers/actions/cliente'
  
  
  
  const EditClientePage = ({history})=>{
  
      let _initialData = {
          nome:'',
          email:'',
          servicos:[]
      };
      
      const cliente = useSelector(selectClienteById,shallowEqual)
      const dispatch = useDispatch()
      const [initialData,setData] = useState(_initialData)
      const [loading,setLoading] = useState(true)
      const [options,setOptions] = useState([])
  
      const {id} = useParams()
  
      const id_form = 'cliente_form_edit';
      
      const editCliente =  (data)=>{
          dispatch (editClienteStart(data))
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
  
      const goListCliente = ()=>{
          history.push('/clientes');
      }
  
      const fecthCliente = (id)=>{
          dispatch(getClienteStart(id));
      }
  
      useEffect(()=>{
        fecthCliente(id)
      },[])
  
      useEffect( ()=>{
          if(!empty(cliente)){
              setFieldsInitial(cliente)
          }
      },[cliente])

      const getServicoById =  (id)=>{
          let servico = servicos.filter((val) => val.id == id)

          if(servico.length > 0){
               servico = servico[0]
          }

          return servico
      }
  
  
      const setFieldsInitial = (cliente)=>{
          if(!empty(cliente)){
  
              let{servicos} = cliente;

              let {nome,email} = cliente.cliente;

              let _servicos = [];

              servicos.forEach((val)=>{
                  let servicoFound = getServicoById(val.id)

                  _servicos.push(servicoFound)
              })
                
              
              let _obj = {
                  nome:nome,
                  email:email,
                  servicos:_servicos
              }
  
              
              setData(_obj)

              setTimeout(()=>{
                setLoading(false)
            },1000)
  
          }
        
      }
  
  
      const handleSubmit =  (data)=>{
        editCliente({data:data,id:id})
           setTimeout(()=>{
              goListCliente() 
           },1500)
       }
       
  
      if(!loading){
          return(
              <FormCustomCliente id={id_form} options={options}  initialData ={initialData} handleSubmit={handleSubmit}/>
          )
      }else{
          return (
              <Spinner/>
          )
      }
  }
  
  export default withRouter(EditClientePage);