import React ,{useState,useEffect}from 'react';
import {FiArrowLeft} from'react-icons/fi';
import{Link,useHistory} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function NovoCaso(){

    const [clientes,setClientes]=useState([]);

    
    const [autor,setAutor] = useState('');
    const [reu,setReu] = useState('');
    const [circunstancias,SetCircunstancias]=useState('');
    const [fundamento,setFundamento]=useState('');
    
    


    
    
    const history=useHistory();


    useEffect(()=>{
        api.get('clientes'
        ).then(response =>{
            setClientes(response.data);


        })

    },);
   

    async function handleNovoCaso(e){
        e.preventDefault();

      
       

        const data ={
            autor,
            reu,
            circunstancias,
            fundamento,
            
            
           
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
            <input list="clientes"
            placeholder="Autor"
            value={autor}
            onChange={e=>setAutor(e.target.value)}
            required
            />

            <input list="clientes"
            placeholder="Réu"
            value={reu}
            onChange={e=>setReu(e.target.value)}
            required
            />

            <textarea 
            placeholder="Circunstancias"
            value={circunstancias}
            onChange={e=>SetCircunstancias(e.target.value)}
            required
            />

            <input 
            placeholder="Fundamento"
            value={fundamento}
            onChange={e=>setFundamento(e.target.value)}
            required
            />

            

            <datalist id="clientes">

                {clientes.map(clientes=>(
                    <option value={clientes.nome} />

                ))}

           
            
            </datalist>

            <button type="submit"className="button">Cadastrar</button>
            
            
         </form>

         
        

    </div>
   
    
</div>

);
}