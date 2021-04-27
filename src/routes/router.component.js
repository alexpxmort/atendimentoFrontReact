   /**
 *Componente de rotas
 * 
 */


 import React from   'react';
 import {Route,Switch} from 'react-router-dom';
import ListServicoPage from '../pages/listServico';
import AddServicoPage from '../pages/addServico';
import EditServicoPage from '../pages/editServico';
import ListFuncionarioPage from '../pages/listFuncionario';
import AddFuncionarioPage from '../pages/addFuncionario'
import EditFuncionarioPage from '../pages/editFuncionario';
import ListClientePage from '../pages/listCliente';
import AddClientePage from '../pages/addCliente';
import EditClientePage from '../pages/editCliente';
import UploadPage from '../pages/upload';
 
 const  Router  = ()=>(
     <Switch>
        <Route exact component={ListServicoPage} path="/"/>
         <Route  component={ListServicoPage} path="/servicos"/>
         <Route  component={AddServicoPage} path="/addServico"/>
         <Route  component={EditServicoPage} path="/editServico/:id"/>
         <Route  component={ListFuncionarioPage} path="/funcionarios"/>
         <Route  component={AddFuncionarioPage} path="/addFuncionario"/>
         <Route  component={EditFuncionarioPage} path="/editFuncionario/:id"/>
         <Route  component={ListClientePage} path="/clientes"/>
         <Route  component={AddClientePage} path="/addCliente"/>
         <Route  component={EditClientePage} path="/editCliente/:id"/>
         <Route  component={UploadPage} path="/upload"/>
     </Switch>
 )
 
 
 export default  Router;