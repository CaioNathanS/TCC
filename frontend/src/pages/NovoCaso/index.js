import React ,{useState}from 'react';
import {FiArrowLeft} from'react-icons/fi';
import{Link,useHistory} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function NovoCaso(){
    const [casos]=useState([]);
    const advogadoId=localStorage.getItem('advogadoId');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    
    const history=useHistory();

   

    async function handleNovoCaso(e){
        e.preventDefault();

        

        const data ={
            title,
            description,
            advogados_id:localStorage.getItem('advogadoId')
        };

        try{
            await api.post('casos',data, 
                
        )
            history.push('/profile');

        } catch(err){
            alert('Erro ao cadastrar')

        }



    }
    
    return (<div className="novo-caso-container">
    <div className="content">
        <section>
        
        <img src={logo} alt="deManobras"/>

        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso e pa e tudo mais aquela coisa toda de deManobras </p>

        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </section>

        <form onSubmit={handleNovoCaso}> 
            <input 
            placeholder="Título do caso"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            required
            />

            <textarea 
            placeholder=" Descrição"
            value={description}
            onChange={e=>setDescription(e.target.value)}
            required
            />

            <input list="casoTipo" placeholder="Tipo do caso" required/>

            <datalist id="casoTipo">
            <option value="Cívil"/>
            <option value="Criminal"/>
            <option value="Penal"/>
            <option value="Etc"/>
            <option value="Coisa e tal"/>
            </datalist>

            <input list="clienteCasos" placeholder="Cliente"/>
           
                <datalist id="clienteCasos">
                {casos.map(casos =>(
               <option value={casos.title} />
               ))}

               </datalist>
                
               
            
           
               

    


            <button type="submit"className="button">Cadastrar</button>
            
            
         </form>

         
        

    </div>
   
    
</div>

);
}