import React ,{useState}from 'react';
import{FiArrowLeft} from 'react-icons/fi'
import{Link,useHistory} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function NovoCliente(){

   

    const [nome,setNome]=useState('');
    const [nacionalidade,setNacionalidade] = useState('');
    const [estadoCivil,setEstadoCivil] = useState('');
    const [profissao,SetProfissao]=useState('');
    const [rg,setRg]=useState('');
    const [cpf,setCpf]=useState('');
    const [orgao,setOrgao]=useState('');
    const [emissao,setEmissao]=useState('');
    const [cep,setCep]=useState('');
    const [bairro,setBairro]=useState('');
    const [cidade,setCidade]=useState('');
    const [estado,setEstado]=useState('');
    const [telefone,setTelefone]=useState('');
    const [email,setemail]=useState('');
    
    
   
    
    const history=useHistory();


   
   

    async function handleNovoCliente(e){
        e.preventDefault();

        

        const data ={
            nome,
            nacionalidade,
            estadoCivil,
            profissao,
            rg,
            cpf,
            orgao,
            emissao,
            cep,
            bairro,
            cidade,
            estado,
            telefone,
            email,
        };

        try{
            await api.post('clientes',data, 
                
        )
            history.push('/profile');

        } catch(err){
            alert('Erro ao cadastrar')

            console.log(err);

        }



    }

   

    
    return (<div className="novo-cliente-container">
    <div className="content">

       

        <section>
        
        <img src={logo} alt="deManobras"/>

        <h1>Cadastrar Cliente</h1>
        <p>Descreva o caso e pa e tudo mais aquela coisa toda de deManobras </p>

        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </section>

        <form onSubmit={handleNovoCliente}> 

        <div className="inputs">
            <strong>Nome</strong>
            <input 
            placeholder="Nome"
            value={nome}
            onChange={e=>setNome(e.target.value)}
            required
            />
        </div>

        <div className="inputs">
            <strong>Nacionalidade</strong>
            <input 
            placeholder="Padrão:Brasileiro"
            value={nacionalidade}
            onChange={e=>setNacionalidade(e.target.value)}
           
            />
        </div>


        <div className="inputs">
            <strong>Estado Civil</strong>
            <input 
            placeholder="Estado Civil"
            value={estadoCivil}
            onChange={e=>setEstadoCivil(e.target.value)}
            required
            />
        </div>

        <div className="inputs">
            <strong>Profissão</strong>
            <input 
            placeholder="Profissão"
            value={profissao}
            onChange={e=>SetProfissao(e.target.value)}
            required
            />
         </div>

            <div className="unirInputs">
            
               
                    <strong>RG</strong>
                <input 
                    placeholder="RG"
                    value={rg}
                    onChange={e=>setRg(e.target.value)}
                    required
                    />
                  

               
                    <strong>CPF</strong>
                <input 
                    placeholder="CPF"
                    value={cpf}
                    onChange={e=>setCpf(e.target.value)}
                    required
                    /> 
               
        
            </div>

            <div className="unirInputs">

            
                <strong>Orgão Emissor</strong>
                <input 
                    placeholder="Padrão:SSP-DF"
                    value={orgao}
                    onChange={e=>setOrgao(e.target.value)}
                    
                /> 
               
            
                <strong>Data</strong>
             <input 
                placeholder="XX/XX/XXXX"
                value={emissao}
                onChange={e=>setEmissao(e.target.value)}
                required
                /> 
           

            </div>

            


        <div className="unirInputs">
            <div className="inputs"> 
                <strong>CEP</strong>
        <input 
                placeholder="Ex:73000000"
                value={cep}
                onChange={e=>setCep(e.target.value)}
                required
                /> 
            </div>
            

                <div className="inputs"> 
                <strong>Estado</strong>
            <input 
                placeholder="Estado"
                value={estado}
                onChange={e=>setEstado(e.target.value)}
                required
                /> 
                </div>

            </div>

            <div className="unirInputs">

                <div className="inputs"> 
                    <strong>Cidade</strong>

                <input 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e=>setCidade(e.target.value)}
                        required
                        /> 
                    </div>

                <div className="inputs"> 
                     <strong>Bairro</strong>
                    
                    <input 
                        placeholder="Bairro"
                        value={bairro}
                        onChange={e=>setBairro(e.target.value)}
                        required
                        /> 
                        </div>

                    </div>

                   

                     <div className="inputs"> 
                          <strong>Telefone</strong>

                        <input 
                                placeholder="Ex:9999-9999"
                                value={telefone}
                                onChange={e=>setTelefone(e.target.value)}
                                required
                                /> 
                                </div>
                            
                   <div className="inputs"> 
                          <strong>E-mail</strong>
                            <input 
                                placeholder="E-mail"
                                value={email}
                                onChange={e=>setemail(e.target.value)}
                                required
                                /> 
                            </div>

                     

            

            <button type="submit"className="button">Cadastrar</button>
            
            
         </form>

         
        

    </div>
   
    
</div>

);
}