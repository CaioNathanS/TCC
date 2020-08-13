import React ,{useState,useEffect}from 'react';
import {FiArrowLeft,FiZoomIn} from'react-icons/fi';
import{Link} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function NovoCaso(){

   const [agenda,SetAgenda]=useState([]);
   const [andamento,setAndamento]=useState([]);
   const [encerrado,setEncerrado]=useState([]);
   const [clientes,setClientes]=useState([]);
   const [totalClientes,setTotalCli]=useState([]);
   const [juridica,setJuridica]=useState([]);

   useEffect(()=>{

    let mouted =true;
    api.get('casosAndamento')
    .then(response =>{
        if(mouted){
        setAndamento(response.data)

    }})

  
    return ()=>mouted= false;

},[]);

useEffect(()=>{

    let mouted =true;
    api.get('casosEncerrado')
    .then(response =>{
        if(mouted){
        setEncerrado(response.data)

    }})

  
    return ()=>mouted= false;

},[]);




useEffect(()=>{

    let isSubscribed = true

    api.get('clientes'
    ).then(response =>{

        if (isSubscribed) {
            setClientes(response.data);
          }
        
    })
    return () => isSubscribed = false

},[]);


useEffect(()=>{

    let isSubscribed = true

    api.get('clientestotal'
    ).then(response =>{

        if (isSubscribed) {
            setTotalCli(response.data);
          }
        
    })
    return () => isSubscribed = false

},[]);

useEffect(()=>{

    let isSubscribed = true

    api.get('clientesJuri'
    ).then(response =>{

        if (isSubscribed) {
            setJuridica(response.data);
          }
        
    })
    return () => isSubscribed = false

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
    document.getElementById("clientes").hidden=true;
    document.getElementById("clientes2").hidden=true;
}

function showAgenda(){
    document.getElementById("agenda").hidden=false;
    document.getElementById("casos").hidden=true;
    document.getElementById("clientes").hidden=true;
    document.getElementById("clientes2").hidden=true;
}

function showClientes(){
    document.getElementById("clientes2").hidden=false;
    document.getElementById("clientes").hidden=false;
    document.getElementById("agenda").hidden=true;
    document.getElementById("casos").hidden=true;
}
    
    return (<div className="novo-caso-container">
    <div className="content">
        <section>
        
        <img src={logo} alt="deManobras"/>

        <h1>Fazer consulta</h1>

        <button onClick={showCasos}>Casos</button><br></br>
        <button onClick={showClientes}>Clientes</button> <br></br>
        <button onClick={showAgenda}>Agendamentos</button> 
       
        

     


        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </section>

       

           
            <fieldset id="agenda" hidden={true}>
                <strong> Agendamentos</strong>
                 <p>Pendentes:</p>  <br></br> 
                 <p>Confirmados:</p>  <br></br>

            </fieldset>

        

       
            <fieldset hidden={true} id="casos">
    <strong> Casos </strong> <br></br>
    <p> Casos em andamento: {andamento} </p> <br></br>
    <p> Casos Encerrados: {encerrado} </p> <br></br>
    <p> Total de casos: {andamento+encerrado} </p> 


    

    </fieldset>

   


    <fieldset hidden={true} id="clientes">
    
    <p><strong>Clientes</strong></p> 
        {clientes.map(clientes =>(
           
    <div> 
    
    <Link to={`/cliente/${clientes.nome}`} > 
                <button type="button" > 
                {clientes.nome}  <FiZoomIn size={15} color="#0a7494"/>
                </button> 
                 
                  </Link>
    
   </div>
    ))}  
    
    </fieldset>

    <fieldset hidden={true} id="clientes2">


        <p><strong>Total:</strong>{totalClientes}</p>
        <p><strong>Pessoa Física:</strong> {totalClientes-juridica}</p>
        <p><strong>Pessoa Jurídica:</strong>{juridica}</p>

</fieldset>
      

            </div>
   
    
</div>

);
}