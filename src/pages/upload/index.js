 /**
 * Página de Upload de Imagens
 * 
 */
    
import React,{useState} from 'react'
import Message from '../../components/msg_alerts/msg_alerts'
import { uploadMethod } from '../../requests/api/api'
import { empty } from '../../utils/string.utils'


  const UploadPage = ({history})=>{
  
    const[image,setImage] = useState('')
    const _upload = async ()=>{
        
        if(empty(image)){
            Message('Selecione ao menos uma Imagem!','warning');
            return false;
        }

        let resp = await uploadMethod(image);

        if(!resp.error){
            Message(resp.msg,'success');
            setImage('');
        }
    }
     
          return (
              <div>
                  <input type='file' name={'image'}  onChange={(evt)=>{setImage(evt.target.files[0])}}/>
                  <button onClick={_upload} type='buttom'>Enviar</button>
              </div>
              
          )
      
  
     
  }
  
  export default UploadPage;