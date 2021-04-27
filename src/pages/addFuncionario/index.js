  /**
 * Página de Adicionar Funcioário
 * 
 */
    


   import FormCustomFuncionario from "../../components/form/funcionario.form"
   import {useDispatch,useSelector,shallowEqual} from 'react-redux'
   import{addFuncionarioStart} from '../../reducers/actions/funcionario/index'
   import { fetchServicoStart } from "../../reducers/actions/servico/index";
   import {selectServicos} from '../../reducers/selectors/servico/index'
   import {withRouter} from 'react-router-dom'
   import {useState,useEffect} from 'react';
   import { Spinner } from "../../components/loading/loading.compont";
   
   const initialData = {
      nome:'',
      email:'',
      servico_id:6
  };
   
   
   const AddFuncionarioPage = ({history})=>{
       const dispatch = useDispatch()

       const [options,setOptions] = useState([])
       const [loading,setLoading] = useState(true)
  
   
       const id = 'funcionario_form';
       
       const addFuncionario =  (data)=>{
           dispatch (addFuncionarioStart(data))
       }
   
       const goListFuncionario = ()=>{
           history.push('/funcionarios');
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
        addFuncionario(data)
            setTimeout(()=>{
                goListFuncionario() 
            },1500)
        }

       if(!loading){
        return(
            <FormCustomFuncionario id={id} options={options}  initialData ={initialData} handleSubmit={handleSubmit}/>
        )
        }else{
            return (
                <Spinner/>
            )
        }
   }
   
   export default withRouter(AddFuncionarioPage);