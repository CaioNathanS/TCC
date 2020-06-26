import React,{useState} from 'react';
import {FiLogIn} from'react-icons/fi';
import{Link,useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/pretoLogo.png';
import test from '../../assets/wbLogo.jpeg';

export default function Login(){

    const [id,setId] = useState('');
    const history=useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});

            localStorage.setItem('advogadoId', id);
            localStorage.setItem('nomeAdvogado',response.data.nome);
            

            history.push('/profile')
            
        } catch (err) { 
            alert('Falha no engano');

        }

    }


    return(
        <div className="login-container"> 
            <section className="form">
                <img src={logo} alt="deManobras"/>

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input placeholder="Seu Id" 
                           value={id}
                           onChange={ e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link"to="/register">
                        <FiLogIn size={16} color ="#E20"/>
                        
                        Não tenho cadastro
                        </Link>

                </form>
            </section>

        <img src={test} alt="Goku"/>
       
        </div>

    );

}