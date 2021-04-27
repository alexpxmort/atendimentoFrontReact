/**
 * Componente Customizado de Formulario
 * 
 */




 import {Button} from '@material-ui/core';
 import { InputCustom } from '../input-custom';
 import {Form} from '@unform/web'
import SelectCustom from '../custom-select';


 const FormCustomCliente = ({id,initialData,handleSubmit,options})=>{
     return(
         <div style={{marginTop:80,marginLeft:20}}>
             <Form id={id}  initialData={initialData} onSubmit={handleSubmit}>
                 <InputCustom required name={'nome'} label="Nome" variant="outlined"  type={'text'}/>
                 <InputCustom required label="Email"  name={'email'}  variant="outlined"  type={'text'}  />
                {
                    (options.length  > 0)?(
                        <SelectCustom isMulti required isSearchable  name={'servicos'} placeholder={'Selecione um Serviço'} options={options}    />
                    ):null
                }
                 <Button style={{marginTop:35}} type={'submit'} variant="contained" color="primary">
                     Salvar
                 </Button>
             </Form>
         </div>
     )
 }
 
 export default FormCustomCliente;