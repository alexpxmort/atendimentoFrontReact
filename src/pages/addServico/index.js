  /**
 * Página de Adicionar Servico
 * 
 */
    


   import FormCustomServico from "../../components/form/servico.form"
   import {useDispatch} from 'react-redux'
   import{addServicoStart} from '../../reducers/actions/servico/index'
   import {withRouter} from 'react-router-dom'
   
   const initialData = {
      nome:'',
      qtd_min:0,
      valor:''
  };
   
   
   const AddServicoPage = ({history})=>{
       const dispatch = useDispatch()
   
       const id = 'servico_form';
       
       const addServico =  (data)=>{
           dispatch (addServicoStart(data))
       }
   
       const goListServico = ()=>{
           history.push('/servicos');
       }
   
     
       const handleSubmit =  (data)=>{

        addServico(data)
            setTimeout(()=>{
                goListServico() 
            },1500)
        }
        
       return (
              <FormCustomServico id={id}  initialData ={initialData} handleSubmit={handleSubmit}/>
       )
   }
   
   export default withRouter(AddServicoPage);