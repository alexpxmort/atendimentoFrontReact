  /**
 * Página de Adicionar Clientes
 * 
 */
    


   import FormCustomCliente from "../../components/form/cliente.form"
   import {useDispatch,useSelector,shallowEqual} from 'react-redux'
   import{addClienteStart} from '../../reducers/actions/cliente/index'
   import { fetchServicoStart } from "../../reducers/actions/servico/index";
   import {selectServicos} from '../../reducers/selectors/servico/index'
   import {withRouter} from 'react-router-dom'
   import {useState,useEffect} from 'react';
   import { Spinner } from "../../components/loading/loading.compont";
   
   const initialData = {
      nome:'',
      email:'',
      servicos:[]
  };
   
   
   const AddClientePage = ({history})=>{
       const dispatch = useDispatch()

       const [options,setOptions] = useState([])
       const [loading,setLoading] = useState(true)
  
   
       const id = 'cliente_form';
       
       const addCliente =  (data)=>{
           dispatch (addClienteStart(data))
       }
   
       const goListCliente = ()=>{
           history.push('/clientes');
       }

       const servicos = useSelector(selectServicos,shallowEqual);
  
       const fecthServicos = ()=>{
           dispatch(fetchServicoStart());
       }

    const initializeOptionsSelect  = async (options)=>{
      await   options.forEach((val)=>{
            val.value = val.id
            val.label = val.nome
        })
    }
    useEffect(async ()=>{


       await  initializeOptionsSelect(servicos)
        setOptions(servicos)

        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[servicos])


    useEffect(()=>{
      fecthServicos()
    },[])

   
     
       const handleSubmit =  (data)=>{
        addCliente(data)
            setTimeout(()=>{
                goListCliente() 
            },1500)
        }

       if(!loading){
        return(
            <FormCustomCliente id={id} options={options}  initialData ={initialData} handleSubmit={handleSubmit}/>
        )
        }else{
            return (
                <Spinner/>
            )
        }
   }
   
   export default withRouter(AddClientePage);