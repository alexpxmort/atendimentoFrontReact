/**
 * Componente Customizado de Loading
 * 
 */
 import React from 'react';

 import {SpinnerContainer,SpinnerOverlay} from '../../components/with_spinner/with-spinner.styles'
 
 export const Spinner  = () =>{
   
     return(
         <SpinnerOverlay>
             <SpinnerContainer/>
         </SpinnerOverlay>
     )
 }