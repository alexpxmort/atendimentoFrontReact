  /**
 *Parte com metodos de CRUD que comunica com a api em Laravel
 * 
 */

 import axios from 'axios'

 const request = {
    "URL_DEV":'http://localhost:8000/'
}

let api = axios.create({
  baseURL: request.URL_DEV, 
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  ,
  validateStatus: (status) => status < 500
});


export const createMethod = async (data,path)=>{
   const resp = await fetch(`${request.URL_DEV}${path}/create`,
   {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify(data)
   });

  let json = await  resp.json();

  return json;

}

export const updateMethod = async (data,path,id)=>{
  const resp = await api.put(`${path}/update/${id}`,
  data
 );

 return resp.data;
}

  export const getAllMethod = async (path)=>{
    const resp = await api.get(`${path}/all`);

   return await resp.data;
    
  };


  export const getByIdMethod = async (path,id)=>{
    const resp = await api.get(`${path}/find/${id}`);

    return await resp.data;
  };

  export const deleteMethod = async (path,id)=>{

    const resp = await api.delete(`${path}/${id}`);

    return resp.data;

  };


  

export const addRelationMethod = async (data,path,relation,id)=>{
    const resp = await fetch(`${request.URL_DEV}${path}/add${relation}/${id}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    });
 
 
   return resp;
 
 }

 

export const uploadMethod = async (image)=>{

    let _formData = new FormData();
    _formData.append('image',image);

   let resp = await axios.post(`${request.URL_DEV}upload`,_formData)
 
   return resp.data;
 
 }