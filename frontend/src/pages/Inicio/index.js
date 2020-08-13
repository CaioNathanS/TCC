import React,{useState} from 'react';
import Iframe from 'react-iframe'

import './styles.css';

import logo from '../../assets/logoSimb.png';
import test from '../../assets/wbLogo.jpeg';
import recepcao from '../../assets/localWb.jpg';
import mesa from '../../assets/abc.JPEG';

import api from '../../services/api';

export default function Início(){


    const [nome,setNome]=useState('');
    const [telefone,setTelefone]=useState('');
    const [email,setEmail]=useState('');
    const [assunto,setAssunto]=useState('');
    const [horario,setHorario]=useState('');

    async function handleAgenda(e) {
        e.preventDefault();

        try{

            const data ={
                nome,
                assunto,
                horario,
                telefone,
                email,
            };
    
            document.getElementById("agenda").hidden=true;
            document.getElementById("div").hidden=false;
            await api.post('agenda',data);

            alert('Pedido de agendamento realiado! Aguarde a confirmação por e-mail ou telefone.')
            window.location.reload();


            
            
        } catch (err) { 
            alert('Falha no engano');

        }

    }


    function showForm(){
        document.getElementById("agenda").hidden=false;
        document.getElementById("div").hidden=true;
    }

    function fecharForm(){
        document.getElementById("agenda").hidden=true;
        document.getElementById("div").hidden=false;
    }


    return(
        <div className="inicio-container"> 
            
        
        <header>

        <img src={logo} alt="Goku"/>

                <span>Bem vindo </span>
                
           
                 <button onClick={showForm}> Agendar Horario  </button>
           

            </header>
            <hr></hr>

      

        
         <div> 
            <img src={test} alt="Goku"/>
            

        <ul>  
            <li id="div" hidden={false}>    
                <div>
                <img src={recepcao} alt="Entrada"/>
                <img src={mesa} alt="mesa"/>
                

                </div>

                <h1>Horario de funcionamento</h1> 
                
                <p>Segunda - Sexta	08:00 – 12:00, 14:00 – 18:00 </p>


                <h1>Endereço</h1>
        
                <p> Condominio Solar de Athenas lotes 01/02 sala 206 Ed Pontal
                Grande Colorado-Sobradinho
                Brasília - DF
                73015-903
                Brasil</p>

                <h1>Contato</h1>
    
              <p> Fixo: (61)3543-9347</p> 
        
               <p>WhatsApp: (61)91981841 </p> 
           
               <p>Email: Wb@gmdasdsaail.com  </p> 

          
            
            </li>


            <li id="agenda" hidden={true}>

                <strong>Agendar Horário</strong>
                <form>
                    <div className="unirInputs">
                    <strong>Nome</strong> <input  
                    onChange={e=>setNome(e.target.value)}
                    required />
                    </div>

                    <div className="unirInputs">
                    <strong>Email</strong> <input  
                    onChange={e=>setEmail(e.target.value)}
                    required />
                    </div>

                    <div className="unirInputs">
                    <strong>Telefone</strong> <input  
                    onChange={e=>setTelefone(e.target.value)}
                    required />
                    </div>

                    <div className="unirInputs">
                    <strong>Assunto</strong> <input  
                    onChange={e=>setAssunto(e.target.value)}
                    required />
                    </div>

                    <div className="unirInputs">
                    <strong>Horário</strong> <input  
                    onChange={e=>setHorario(e.target.value)}
                    required />
                    </div>

               

                </form>

                <button type="submit" onClick={handleAgenda}> Agendar </button>
                <button type="submit" onClick={fecharForm}> Fechar </button>



            </li>
        </ul>

  

       
       

       

        </div>

        <Iframe
       url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.5090992127484!2d-47.8457059855573!3d-15.671108124108574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a392115c29073%3A0xabdf6f4af0ef3932!2sWENDERSON%20BRAZ%20SOCIEDADE%20INDIVIDUAL%20DE%20ADVOCACIA!5e0!3m2!1spt-BR!2sbr!4v1595276576999!5m2!1spt-BR!2sbr"
       width="1120px"
       height="330px"
       display="initial"
       position="relative"
    
       />

        </div>

    );
}