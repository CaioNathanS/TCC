import React ,{useState,useEffect}from 'react';
import{FiArrowLeft} from 'react-icons/fi'
import{Link} from 'react-router-dom';

import api from '../../services/api';


import'./styles.css';

import logo from '../../assets/logoWB.jpeg';

export default function Cadastro(){

   

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


    const [clientes,setClientes]=useState([]);


    const [cliente,setCliente]=useState([]);
    
    const [outraParte,setOutra] = useState('');
    const [circunstancias,SetCircunstancias]=useState('');
    const [fundamento,setFundamento]=useState('');
    const [reuAutor,setReuAutor]=useState('');
    
    
    
   
    
   


    useEffect(()=>{

        let isSubscribed = true

        api.get('clientes'
        ).then(response =>{

            if (isSubscribed) {
                setClientes(response.data);
              }
            
        })
        return () => isSubscribed = false

    },[]);

    async function handleNovoCaso(e){
        e.preventDefault();
       
        const data ={
            cliente,
            outraParte,
            circunstancias,
            fundamento,
            reuAutor,
            advogados_id:localStorage.getItem('advogadoId'),
        
        };

        try{
            await api.post('casos',data) 
                
    
           
            alert('Caso cadastrado com sucesso!');

        } catch(err){
            alert('Erro ao cadastrar')

        }
           window.location.reload();
    }


   
   

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
         alert('Cadastro realizado com sucesso!');

        } catch(err){
            alert('Erro ao cadastrar')

            console.log(err);

        }

        window.location.reload();



    }

    function hide(){
        document.getElementById("defalutCli").hidden=true;
      
    }


    function showCliente(){
        document.getElementById("cliente").hidden=false;
        document.getElementById("caso").hidden=true;
    }

    function showCaso(){
        document.getElementById("caso").hidden=false;
        document.getElementById("cliente").hidden=true;
    }
   

    
    return (<div className="novo-cliente-container">
    <div className="content">

       

        <section>
        
        <img src={logo} alt="deManobras"/>

        <h1>Cadastrar </h1>
       
        <button className="button"onClick={()=>showCaso()}>  Caso  </button>
            <button className="button"onClick={()=>showCliente()}>  Cliente  </button>

        <Link className="back-link"to="/profile">
                <FiArrowLeft size={16} color ="#E02041"/>
                
                Voltar para início
                </Link>


        </section>

        <form onSubmit={handleNovoCliente} id="cliente" hidden="true" > 

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



         <form onSubmit={handleNovoCaso} id="caso" hidden="true"> 

            <div className="unirInputs"> 


            <select value={cliente}
            onChange={e=>setCliente(e.target.value)} onClick={()=>hide}>

                 <option id="defaultCli" hidden="false"> Selecione um cliente </option> 

            {clientes.map(clientes=>(
                    <option key={clientes._id}  onChange={e=>setClientes(clientes._id)} > {clientes.nome} </option>

                ))}


            </select>


            

            <input list="cond"
            placeholder="Condição"
            value={reuAutor}
            onChange={e=>setReuAutor(e.target.value)}
            required
            />  
          
            </div>

            <input 
            placeholder="Outra Parte"
            value={outraParte}
            onChange={e=>setOutra(e.target.value)}
            required
            />

            <textarea 
            placeholder="Circunstancias"
            rows="12"
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



            <datalist id="cond" >
                    <option>Réu</option>
                    <option>Autor</option>
                 </datalist>

            <button type="submit"className="button">Cadastrar</button>
            
            
         </form>

         
        

    </div>
   
    
</div>

);
}