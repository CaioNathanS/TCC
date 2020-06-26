import React from 'react';




import './styles.css';

import logo from '../../assets/logoSimb.png';
import test from '../../assets/wbLogo.jpeg';
import recepcao from '../../assets/localWb.jpg';
import mesa from '../../assets/abc.JPEG';


export default function Início(){

    


    return(
        <div className="inicio-container"> 
            
        
        <header>

        <img src={logo} alt="Goku"/>

                <span>Bem vindo </span>
                
            <p>Contato</p>
            <p>Localização</p>
           

            </header>
            <hr></hr>

      

        
         <div> 
            <img src={test} alt="Goku"/>
            

        <ul>
            <li>
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
        </ul>

        </div>

        </div>

    );
}