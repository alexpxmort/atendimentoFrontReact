/**
 * Componente Customizado de Formulario
 * 
 */




 import {Button} from '@material-ui/core';
 import { InputCustom } from '../input-custom';
 import {Form} from '@unform/web'
 const FormCustomServico = ({id,initialData,handleSubmit})=>{
     return(
         <div style={{marginTop:80,marginLeft:20}}>
             <Form id={id}  initialData={initialData} onSubmit={handleSubmit}>
                 <InputCustom required name={'nome'} label="Nome" variant="outlined"  type={'text'}/>
                 <InputCustom required label="Valor"  name={'valor'}  variant="outlined"  type={'text'}  />
                 <InputCustom required  label="Quantidade de Minutos"  name={'qtd_min'} variant="outlined" type={'number'} />
                 <Button  type={'submit'} variant="contained" color="primary">
                     Salvar
                 </Button>
             </Form>
         </div>
     )
 }
 
 export default FormCustomServico;