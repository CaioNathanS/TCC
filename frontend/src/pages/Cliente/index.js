import React, {useEffect,useState}from 'react';
import{Link,useHistory} from 'react-router-dom';
import{FiPower,FiEdit} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logoWB.jpeg';




export default function Cliente({match}){

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

    const [cliente,setClientes]=useState([]);

    useEffect(()=>{
    
        let isSubscribed = true
    
        api.get(`clientes/${match.params.nome}`
        ).then(response =>{
    
            if (isSubscribed) {
                setClientes(response.data);
              }
            
        })
        return () => isSubscribed = false
    
    },[match.params.nome]);
    
    const nomeAdvogado = localStorage.getItem('nomeAdvogado');
   
    const history=useHistory();


    async function editarCliente(e){
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
            await api.put(`clientes/${match.params.nome}`,data, 
                
        )
         alert('Cadastro realizado com sucesso!');

        } catch(err){
            alert('Erro ao cadastrar')

            console.log(err);

        }

        window.location.reload();



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

            <h1>Cliente</h1>

          



           <ul>
            {cliente.map(cliente =>(

           
            <li key={cliente.id}>
                
              

                <form onSubmit={editarCliente} id="cliente"  > 

                        <div className="inputs">
                            <strong>Nome</strong>
                            <input 
                            placeholder={cliente.nome}
                            value={nome}
                            onChange={e=>setNome(e.target.value)}
                        
                            />
                        </div>



                        <div className="inputs">
                            <strong>Nacionalidade</strong>
                            <input 
                            placeholder={cliente.nacionalidade}
                            value={nacionalidade}
                            onChange={e=>setNacionalidade(e.target.value)}

                            />
                        </div>


                        <div className="inputs">
                            <strong>Estado Civil</strong>
                            <input 
                            placeholder={cliente.estadoCivil}
                            value={estadoCivil}
                            onChange={e=>setEstadoCivil(e.target.value)}
                            
                            />
                        </div>

                        <div className="inputs">
                            <strong>Profissão</strong>
                            <input 
                            placeholder={cliente.profissao}
                            value={profissao}
                            onChange={e=>SetProfissao(e.target.value)}
                        
                            />
                        </div>

                            <div className="unirInputs">
                            
                            
                                    <strong>RG</strong>
                                <input 
                                    placeholder={cliente.profissao}
                                    value={rg}
                                    onChange={e=>setRg(e.target.value)}
                                    
                                    />
                                

                            
                                    <strong>CPF</strong>
                                <input 
                                    placeholder={cliente.cpf}
                                    value={cpf}
                                    onChange={e=>setCpf(e.target.value)}
                                    
                                    /> 
                            

                            </div>

                            <div className="unirInputs">

                            
                                <strong>Orgão Emissor</strong>
                                <input 
                                    placeholder={cliente.orgao}
                                    value={orgao}
                                    onChange={e=>setOrgao(e.target.value)}
                                    
                                /> 
                            
                            
                                <strong>Data</strong>
                            <input 
                                placeholder={cliente.emissao}
                                value={emissao}
                                onChange={e=>setEmissao(e.target.value)}
                            
                                /> 


                            </div>

                            


                        <div className="unirInputs">
                            <div className="inputs"> 
                                <strong>CEP</strong>
                        <input 
                                placeholder={cliente.cep}
                                value={cep}
                                onChange={e=>setCep(e.target.value)}
                                
                                /> 
                            </div>
                            

                                <div className="inputs"> 
                                <strong>Estado</strong>
                            <input 
                                placeholder={cliente.estado}
                                value={estado}
                                onChange={e=>setEstado(e.target.value)}
                            
                                /> 
                                </div>

                            </div>

                            <div className="unirInputs">

                                <div className="inputs"> 
                                    <strong>Cidade</strong>

                                <input 
                                        placeholder={cliente.cidade}
                                        value={cidade}
                                        onChange={e=>setCidade(e.target.value)}
                                        
                                        /> 
                                    </div>

                                <div className="inputs"> 
                                    <strong>Bairro</strong>
                                    
                                    <input 
                                        placeholder={cliente.bairro}
                                        value={bairro}
                                        onChange={e=>setBairro(e.target.value)}
                                        
                                        /> 
                                        </div>

                                    </div>

                                

                                    <div className="inputs"> 
                                        <strong>Telefone</strong>

                                        <input 
                                                placeholder={cliente.telefone}
                                                value={telefone}
                                                onChange={e=>setTelefone(e.target.value)}
                                                
                                                /> 
                                                </div>
                                            
                                <div className="inputs"> 
                                        <strong>E-mail</strong>
                                            <input 
                                                placeholder={cliente.email}
                                                value={email}
                                                onChange={e=>setemail(e.target.value)}
                                            
                                                /> 

                            
                                            </div>

                                    
                                <button type="Submit"> <FiEdit size={20}  /> Editar </button>
                            

                            
                            
                            
                        </form>



                      

                
      

            </li>))}

        </ul> 
       
            

        </div>

        
    );
}
    

