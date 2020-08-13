import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft,FiTrash2,FiZoomIn, FiSearch} from 'react-icons/fi'


import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Profile(){

    
    

    const [casos,setCasos]=useState([]);
    

    const history=useHistory();

    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
    const advogadoId = localStorage.getItem('advogadoId');

    
 
    const [pesquisa,setPesquisa]=useState([]);

    localStorage.setItem('Pesquisa', pesquisa);

    useEffect(()=>{
        
        let mounted=true;
        api.get('profile',{
            headers:{
                Authorization:advogadoId,
            }
        }).then(response =>{
            if(mounted){
            setCasos(response.data);

        }})
        return()=> mounted = false;


    },[advogadoId]);

   async function confirmExclusao(id) {
        if (window.confirm("Tem certeza que deseja excluir esse caso?")) {
            try{
                await api.delete(`casos/${id}`
            );
    
            setCasos(casos.filter(casos=>casos._id!==id));
    
            } catch(err) {
                alert('Hoje não faro');
            }
        }
     }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


   
    return(
        <div className="profile-container"> 
            <header className="header">

                <img src={logo} alt="deManobras"/>

                <span>Bem vindo {nomeAdvogado} </span>
            <Link className="button"to="/consulta">  Consultar </Link>
            <Link className="button"to="cadastro">  Cadastrar  </Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

            </header>

            <div className="search">

            <h1>Casos cadastrados</h1>


            <input placeholder="Pesquisar" onChange={e=>setPesquisa(e.target.value)}/>
           
           <Link to='/pesquisa' className="link-pesquisa"> 
                
                    <FiSearch size={20} color="#0a7494" /> 
               
                </Link>
            </div>
           
           
             
          
            
          
            <ul> 

            {casos.map(casos =>(

           
            <li key={casos._id}>

                
                <strong>Cliente</strong>
                <p>{casos.cliente}</p>

                <strong>Descrição</strong>
                <p>{casos.circunstancias}</p>


                
            
                <Link to={`/profile/${casos._id}`} > 
                <button type="button" className="verMais"> 
                    <FiZoomIn size={20} color="#0a7494"/> 
                </button>
                 
                  </Link>

                  <button onClick={()=>confirmExclusao(casos._id)} type="button">
                    <FiTrash2 size={20} color="#e02041"/>
                </button>

                  
                

            </li>
            
            
            
            ))}


        </ul>

        <Link className="back-link"to="/">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        
                        Voltar
                        </Link>


        </div>

        
    );
}
    

