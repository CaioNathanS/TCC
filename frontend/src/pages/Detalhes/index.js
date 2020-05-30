import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Detalhes({match}){
    
    const [casos,setCasos]=useState([]);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const history=useHistory();

    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
    const advogadoId = localStorage.getItem('advogadoId');
   
   
    async function editarCaso(e){
        e.preventDefault();

        

        const data ={
            title,
            description,
            advogados_id:localStorage.getItem('advogadoId')
        };

        try{
            await api.put(`casos/${match.params.id}`,data
                
        )
            history.push('/profile');

        } catch(err){
            alert('Erro ao editar')

        }



    }
    
    
    useEffect(()=>{
        api.get(`casos/${match.params.id}`,{
            headers:{
                Authorization:advogadoId,
            }
        }).then(response =>{
            setCasos(response.data);


        })

    },[advogadoId]);


    //function mostrarForm(e){
       // e.preventDefault();
        //document.getElementById('editar').hidden=false;
  
   // }

    function esconderForm(e){
        e.preventDefault();
        document.getElementById('editar').hidden=true;
  
    }


    function handleLogout(){
        localStorage.clear();

        history.push('/');
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


                <form onSubmit={editarCaso}>
                <strong>Nome </strong>
                <input 
                    placeholder={casos.title}
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    
                 />

                <strong>Id </strong>
                <input placeholder="Id"
                        value={casos.id} ></input>

                <strong>Descrição </strong>    
                <input 
                placeholder={casos.description}
                value={description}
                onChange={e=>setDescription(e.target.value)}
                
                />

                <button type="submit">Editar</button>

                </form> 

                


            </li> 
                
            
            ))}

          

                {casos.map(casos =>(
                <li hidden="true" id="editar">
                  <form > 
                      <strong>Nome</strong>
                         <input 
                          placeholder="Título do caso"
                          value={casos.title}
                                    
                          required
                         />

                         <strong> Id </strong>

                         <input 
                            placeholder="id"
                            value={casos.id}
                                    
                            required
                         />

                         <strong> Descrição </strong>

                            <input 
                            placeholder="Descrição"
                            value={casos.description}     
                            required
                            />


                        </form>

                        <button type="button" onClick={esconderForm}> editar</button>

                          </li>
                          ))}

        </ul>



        

        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </div>

        
    );
}
    

