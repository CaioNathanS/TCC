import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Detalhes({match}){
    
    const [casos,setCasos]=useState([]);
    const [autor,setAutor] = useState('');
    const [reu,setReu] = useState('');
    const [circunstancias,SetCircunstancias]=useState('');
    const [fundamento,setFundamento]=useState('');
    const [parecer,setParecer]=useState('');

    const history=useHistory();

    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
    const advogadoId = localStorage.getItem('advogadoId');


    const [upload,setUploads]=useState([]);
  
   

  
   



    useEffect(()=>{
        api.get(`uploads/${match.params.id}`).then(response=>{
            setUploads(response.data)
        })
    })


    const [file,setFile]=useState([]);

    function onChange (e){
        setFile(e.target.files[0]);
    }

    function handleSubmit(){
        const data=new FormData();
        data.append('file',file);
         
        api.post(`uploads/${match.params.id}`,data)

    }
   
    async function editarCaso(e){
        e.preventDefault();

        

        const data ={
            autor,
            reu,
            circunstancias,
            fundamento,
            parecer,
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

    });


   
   


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
            <Link className="button"to="/cliente/cadastro">  Cadastrar Cliente </Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

            </header>

            <h1>Casos cadastrados</h1>

           
            <ul>

            

            {casos.map(casos =>(

           
            <li key={casos.id}>


                <form onSubmit={editarCaso}>


                 <div className="unirInputs">   
                 <strong> Autor/Reclamante </strong> 
                <input 
                    placeholder={casos.autor}
                    value={autor}
                    onChange={e=>setAutor(e.target.value)}
                    
                 />

                </div>

                <div className="unirInputs"> 

                <strong> Réu/Reclamado </strong>
                <input placeholder={casos.reu}
                        value={reu} 
                        onChange={e=>setReu(e.target.value)}
                        />
                </div>



                <div className="unirInputs"> 
                <strong> Circunstancias </strong>   
                
                <input 
                placeholder={casos.circunstancias}
                value={circunstancias}
                onChange={e=>SetCircunstancias(e.target.value)}
                
                />
                </div>

                <div className="unirInputs"> 

                <strong> Fundamento </strong>   

                <input 
                placeholder={casos.fundamento}
                value={fundamento}
                onChange={e=>setFundamento(e.target.value)}
                
                />
                </div>


                <div className="unirInputs"> 
                <strong> Parecer </strong>   

                <input 
                placeholder={casos.parecer}
                value={parecer}
                onChange={e=>setParecer(e.target.value)}
                
                />

                </div>

                <div className="unirInputs"> 
                <strong> Arquivos </strong>  
                {  
                    upload.map(upload=>(
    
                      
                    <a 
                     key={upload.size} 
                    href={upload.url} 
                    rel="noopener noreferrer"
                    target="_blank">
                        {upload.name}  </a> 
                        
    
                    ))}     
                

               </div>

               <button type="submit" >Editar</button>

                </form> 

                <p> Fazer upload: </p>
                

                   <input type="file" onChange={onChange}/>
                  
                   <button type="submit" onClick={handleSubmit} className="arquivo"> Enivar Arquivo </button>
                   


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
    

