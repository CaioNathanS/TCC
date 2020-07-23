import React ,{useState,useEffect}from 'react';
import {FiArrowLeft} from'react-icons/fi';
import{Link} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function NovoCaso(){

   const [agenda,SetAgenda]=useState([]);
   const [casos,setCasos]=useState([]);


   useEffect(()=>{

    let mouted =true;
    api.get('consulta')
    .then(response =>{
        if(mouted){
        setCasos(response.data)

    }})

  
    return ()=>mouted= false;

},[]);


useEffect(()=>{

    let mouted =true;
    api.get('consultagenda')
    .then(response =>{
        if(mouted){
        SetAgenda(response.data)

    }})

  
    return ()=>mouted= false;

},[]);


function showCasos(){
    document.getElementById("casos").hidden=false;
    document.getElementById("agenda").hidden=true;
}

function showAgenda(){
    document.getElementById("agenda").hidden=false;
    document.getElementById("casos").hidden=true;
}
    
    return (<div className="novo-caso-container">
    <div className="content">
        <section>
        
        <img src={logo} alt="deManobras"/>

        <h1>Fazer consulta</h1>

        <button onClick={showCasos}>Casos</button><br></br>
        <button>Clientes</button> <br></br>
        <button onClick={showAgenda}>Agendamentos Pendentes</button> 
       
        

     


        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </section>

        <ul> 
     
        {agenda.map(agenda =>(

           
        <li key={agenda.id} hidden={true} id="agenda">
            <strong>Nome </strong>
            <p>{agenda.nome}</p>
            <strong>Telefone </strong>
            <p>{agenda.telefone}</p>
            <strong>Email </strong>
            <p>{agenda.email}</p>
            <strong>Assunto </strong>
            <p>{agenda.assunto}</p>
            <strong> Horário </strong>
            <p>{agenda.Horário}</p>

        </li>))}

        <li hidden={true} id="casos">

        <p> Casos em andamento: {casos} </p>

                </li>
                    </ul>


            </div>
   
    
</div>

);
}