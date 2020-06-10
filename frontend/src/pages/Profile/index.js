import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft,FiTrash2} from 'react-icons/fi'


import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Profile(){

    
   
    const [casos,setCasos]=useState([]);
    

    const history=useHistory();

    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
    const advogadoId = localStorage.getItem('advogadoId');

    

  
    
  

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization:advogadoId,
            }
        }).then(response =>{
            setCasos(response.data);


        })

    },[advogadoId]);

    

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }



    async function handleDeleteCaso(id){
        try{
            await api.delete(`casos/${id}`,{
            headers: {
                Authorization:advogadoId,
            }  
            
        });

        setCasos(casos.filter(casos=>casos._id!==id));

        } catch(err) {
            alert('Hoje não faro');
        }

    }
   
    return(
        <div className="profile-container"> 
            <header>

                <img src={logo} alt="deManobras"/>

                <span>Bem vindo {nomeAdvogado} </span>
            <Link className="button"to="/casos/novo">  Novo Caso </Link>
            <Link className="button"to="/cliente/cadastro">  Cadastrar Cliente </Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

            </header>

           

            <h1>Casos cadastrados</h1>

            

            <ul> 

            {casos.map(casos =>(

           
            <li key={casos.id}>

                
                <strong>Autor/Reclamante</strong>
                <p>{casos.autor}</p>

                <strong>Réu/Reclamado</strong>
                <p>{casos.reu}</p>

                <strong>Circunstancias</strong>
                <p>{casos.circunstancias}</p>

                <strong>Fundamento Jurídico</strong>
                <p>{casos.fundamento}</p>

                <strong>Parecer</strong>
                <p>{casos.parecer}</p>

           

               
               
                 
                
            
                <Link className="button" to={`/profile/${casos._id}`}> Ver Detalhes 
                 
                  </Link>

                  <button onClick={()=>handleDeleteCaso(casos._id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>

                  
                

            </li>))}

        </ul>

        <Link className="back-link"to="/">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        
                        Voltar
                        </Link>


        </div>

        
    );
}
    

