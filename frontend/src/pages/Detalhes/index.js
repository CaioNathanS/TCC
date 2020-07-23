import React,{useEffect,useState} from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiArrowLeft,FiEdit,FiSend,FiTrash2, FiZoomIn} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';


export default function Detalhes({match}){

    
    const [casos,setCasos]=useState([]);
    const [clienteCaso,setClienteCaso] = useState('');
    const [outraParte,setOutra] = useState('');
    const [circunstancias,SetCircunstancias]=useState('');
    const [fundamento,setFundamento]=useState('');
    const [parecer,setParecer]=useState('');
    const [fase,setFase]=useState('');
    const [andamento,setAndamento]=useState('');

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
            clienteCaso,
            outraParte,
            circunstancias,
            fundamento,
            parecer,
            fase,
            andamento,
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
            setCasos(response.data)
    

        }})

      
        return ()=>mouted= false;

    },[match.params.id]);


    
    function hide(){
        document.getElementById("defalutAnd").hidden=true;
      
    }

    function hide2(){
        document.getElementById("defalutFase").hidden=true;
      
    }
   


    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


   
    return(
        <div className="detalhes-container"> 
            <header>

                <img src={logo} alt="deManobras"/>

                <span>Bem vindo {nomeAdvogado} </span>
            <Link className="button"to="/consulta">  Consultar </Link>
            <Link className="button"to="/cadastro">  Cadastrar </Link>

            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

            </header>

            <h1>Caso</h1>

             {casos.map(casos =>(

           
            <ul>

            

           

           
            <li key={casos._id}>

           

           
             <label >{casos.reuAutor}  <input type="checkbox" id="reuAutor" checked={true} readOnly/> </label>
               
                 

                <form onSubmit={editarCaso} >

               

                 <div className="unirInputs">   
                 <Link className="button1" to={`/cliente/${casos.cliente}`} >  <FiZoomIn color="#0a7494" size={16}/>  Cliente   </Link>  
                <input className="cliente"
                    placeholder={casos.cliente}
                    value={clienteCaso}
                    onChange={e=>setClienteCaso(e.target.value)}
                    
                 />
        
              

                </div>

                

              


                <div className="unirInputs"> 

                <strong> Outra Parte </strong>
                <input placeholder={casos.outraParte}
                        value={outraParte} 
                        onChange={e=>setOutra(e.target.value)}
                        />
                </div>



                <div className="unirInputs"> 
                <strong> Circunstancias </strong> 

                
                <textarea
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
                <strong>Fase Recursal</strong>
                <select id="andamento1" value={fase} onChange={e=>setFase(e.target.value)}onClick={()=>hide2}>
                <option id="defaultFase" hidden={false}>{casos.fase} </option>
                    <option>Agravo de Instrumento</option>
                    <option>Apelação</option>
                    <option >Recurso Inominado</option>

                    </select>
                </div>

                      

                <div className="unirInputs">
                <strong>Status</strong>
                 
                <select id="status" value={andamento} onChange={e=>setAndamento(e.target.value)} onClick={()=>hide}>
                    <option id="defaultAnd" hidden={false}> {casos.andamento}</option>
                    <option>Em andamento</option>
                    <option>Encerrado</option>

                    </select>
                                
               
                </div>

              


                <button type="Submit"> <FiEdit size={20}  /> Editar </button>

                </form> 
                


                <hr/>

                <div className="unirInputs">

                <div className="noPrint">
                <strong> Arquivos </strong>  
                </div>
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
     
               <div className="noPrint"> <input type="file"  onChange={onChange} className="file"/> 
               </div>
               </div>

               <button onClick={handleSubmit} type="button"> <FiSend size={20}  /> Enivar </button> 

               


            </li> 

                            
                
            
          
            <li  className="noPrint">
                        

            <strong>Resumo do Processo</strong>


            <textarea 
            placeholder="Resumo do Processo"
            rows="12"
            
            />


            
            <hr></hr>

            <strong>Honorários</strong>

            </li>


      
        </ul>

        ))}

        
        <div className="noPrint">
        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>
            </div>


        </div>

        
    );
}
    

