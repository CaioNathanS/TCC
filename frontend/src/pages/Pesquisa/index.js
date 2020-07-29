import React, { useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import{FiZoomIn,FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';


import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Pesquisa(){

    const pesquisa=localStorage.getItem('Pesquisa')
    const[resultados,setResultados]=useState([]);
  

    useEffect(()=>{
        let mounted=true;
        api.get(`pesquisa1/${pesquisa}`,{
            
        }).then(response =>{
            if(mounted){
            setResultados(response.data);

        }})
        return()=> mounted = false;


    },[pesquisa]);

   


    return(
        <div className="profile-container"> 
            
        
            <header>

<img src={logo} alt="deManobras"/>

<span>Pesquisa por {pesquisa} </span>


</header>

        <h1>Resultados</h1>

    <ul className="pesquisa">
        {resultados.map(resultados=>(
            <li key={resultados._id}>
                 <strong>{resultados.cliente}: autor do caso - no caso {resultados.circunstancias} </strong>
                 <Link to={`/profile/${resultados._id}`} > 
                <button type="button" className="verMaisPesquisa"> 
                    <FiZoomIn size={20} color="#0a7494"/> 
                </button>
                 
                  </Link>
        
            </li>

        ))}

       

    </ul>

    <Link className="back-link"to="/profile">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        
                        Voltar
                        </Link>
        

        </div>

    );
}