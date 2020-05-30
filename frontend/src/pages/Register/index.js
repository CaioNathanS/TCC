import React, {useState} from 'react';
import {FiArrowLeft} from'react-icons/fi';
import{Link,useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import test from '../../assets/logoWB.jpeg';

export default function Register(){
    const[nome,setNome] = useState('');
    const[email,setEmail] = useState('');

    const history=useHistory();

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            nome,
            email,

        };

      try{
       const response = await api.post('advogados', data)

       alert(`deu certo: ${response.data.id}`);

       history.push('/');
    } catch(err) {
        alert('Deu ruim pai vei');

    }

}


    return (
        <div className="register-container">
            <div className="content">
                <section>
                <img src={test} alt="Goku"/>
                <h1>Cadastro</h1>
                <p>Faca seu cadastro e pá e n sei oq lá e tudo mais aquela coisa toda</p>

                <Link className="back-link"to="/profile">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        
                       voltar
                        </Link>


                </section>

                <form onSubmit={handleRegister}> 
                    <input placeholder="Nome" 
                           value={nome}
                           onChange={e=>setNome(e.target.value)}
                    />

                    <input type="email" 
                           placeholder="E-mail"
                           value={email}
                           onChange={e=>setEmail(e.target.value)}
                    />
                    
                    <button type="submit"className="button">Cadastrar</button>
                    
                    
                 </form>

            </div>
        </div>




    );
}