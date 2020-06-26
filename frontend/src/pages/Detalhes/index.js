import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft,FiEdit,FiSend,FiTrash2} from 'react-icons/fi'

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
   

    const [upload,setUploads]=useState([]);
   

    const [file,setFile]=useState([]);

    function onChange (e){
        setFile(e.target.files[0]);
    }

   async function handleSubmit(){
        const data=new FormData();
        data.append('file',file);
         
        try{
        await api.post(`uploads/${match.params.id}`,data)
        alert('Upload feito com sucesso');

        }catch(err){
            alert('Não foi possível concluir o upload');
        }
        window.location.reload();
    

    }

    async function excluirArquivo(id) {
        if (window.confirm("Tem certeza que deseja excluir esse arquivo?")) {
            try{
                await api.delete(`uploads/${id}`,{
                   
                
            });
    
            setCasos(upload.filter(uploads=>uploads._id!==id));

            
    
            } catch(err) {
                alert('Hoje não faro');
            }
        }
        window.location.reload();
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
        if (window.confirm("Tem certeza que deseja editar esse caso?")) {
        try{
            await api.put(`casos/${match.params.id}`,data
                
        )
        alert('Caso editado!');
        history.push('/profile');

        } catch(err){
            alert('Erro ao editar')

        }
        }



    }

    useEffect(()=>{
        let mouted = true;
        api.get('uploads').then(response=>{
         if(mouted){
        setUploads(response.data)
    }})
        return ()=> mouted = false;

    },[]);
    
    
    useEffect(()=>{

        let mouted =true;
        api.get(`casos/${match.params.id}`)
        .then(response =>{
            if(mouted){
            setCasos(response.data);

        }})
        return ()=>mouted= false;

    },[match.params.id]);


   
   


    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


   
    return(
        <div className="detalhes-container"> 
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

           
            <li key={casos._id}>


                <form onSubmit={editarCaso} >


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
                <button type="Submit"> <FiEdit size={20}  /> Editar </button>

                </form> 
                


                <hr/>

                <div className="unirInputs">

                <strong> Arquivos </strong>  
                {  
                    upload.filter(caso=>(caso.caso===`${casos._id}`)).map(upload=>(
                   
                    <div className="unirInputs">
                    < a
                     key={upload.size} 
                    href={upload.url} 
                    rel="noopener noreferrer"
                    target="_blank">
                        {upload.name}   
                     </a> 

                    <FiTrash2 onClick={()=>excluirArquivo(upload._id)} size={18} color="#e02041"/>
                    </div>
                    
                    ))}   

                </div>

               
                <div className="unirInputs"> 
     
                <input type="file"  onChange={onChange} className="file"/> 
                 
               </div>

               <button onClick={handleSubmit} type="button"> <FiSend size={20}  /> Enivar </button> 


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
    

