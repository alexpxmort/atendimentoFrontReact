import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import ListIcon from '@material-ui/icons/List';
import {ReactComponent as Logo } from '../../assets/crown.svg';

const Header  = ()=>{

        return(
            <div className='header' style={{width:'100%'}}>
                <Link to='/' className='logo-container'>
                    <Logo  className='logo'/> 
                </Link>
                <div className='options'>
                    {
                        <Link className='option' to='/servicos' style={{display:'flex',flexDirection:'row'}}>
                            <ListIcon color={'inherit'} style={{color:'#000',fontSize:25}}/>
                            Serviços
                        </Link>
                    }

                    {
                        <Link className='option' to='/funcionarios' style={{display:'flex',flexDirection:'row'}}>
                            <ListIcon color={'inherit'} style={{color:'#000',fontSize:25}}/>
                            Funcionários
                        </Link>
                    }

                    {
                        <Link className='option' to='/clientes' style={{display:'flex',flexDirection:'row'}}>
                            <ListIcon color={'inherit'} style={{color:'#000',fontSize:25}}/>
                            Clientes
                        </Link>
                    }

                    {
                        <Link className='option' to='/upload' style={{display:'flex',flexDirection:'row'}}>
                            <ListIcon color={'inherit'} style={{color:'#000',fontSize:25}}/>
                            Upload
                        </Link>
                    }

                </div>
            </div>
        )
} 

 

export default withRouter(Header);