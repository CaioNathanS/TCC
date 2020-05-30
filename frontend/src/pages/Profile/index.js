import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft,FiTrash2} from 'react-icons/fi'

import {uniqueId} from 'lodash';

import filesize from 'filesize';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Profile(){

    
   
    const [casos,setCasos]=useState([]);

    const history=useHistory();

    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
    const advogadoId = localStorage.getItem('advogadoId');

    const [file,setFile]=useState([]);

    const [upload,setUploads]=useState([]);
  


    function onChange (e){
        setFile(e.target.files[0]);
    }

    function handleSubmit(){
        const data=new FormData();
        data.append('file',file);
         
        api.post('uploads',data)

    }


    useEffect(()=>{
        api.get('uploads').then(response=>{
            setUploads(response.data)
        })
    })

    
  

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
            <Link className="button"to="/register">  Cadastrar Cliente </Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

            </header>

            <h1>Casos cadastrados</h1>
            

            <ul>

            {casos.map(casos =>(

           
            <li key={casos.id}>
                <strong>Nome </strong>
                <p>{casos.title}</p>

                <strong>Id </strong>
                <p>{casos.advogados_id}</p>

                <strong>Descrição</strong>
                <p>{casos.description}</p>

             
                <strong>Arquivos: </strong>

                {upload.map(upload=>(
                <a key={upload.size} 
                href={upload.url} 
                rel="noopener noreferrer"
                target="_blank">
                    {upload.name}  </a>

                ))}
                

                <form onSubmit={handleSubmit}>
                   <strong> Fazer upload: </strong>
                   <input type="file" onChange={onChange}/>
                   <button type="submit"> Enivar </button>
               </form>


               
                    

               
              

                <Link className="button" to={`/profile/${casos._id}`}> Ver Detalhes 
                 
                  </Link>

                  <button onClick={()=>handleDeleteCaso(casos._id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>

                  
                

            </li>))}

        </ul>

        <Link className="back-link"to="/profile">
                        <FiArrowLeft size={16} color ="#E02041"/>
                        
                        Voltar
                        </Link>


        </div>

        
    );
}
    

