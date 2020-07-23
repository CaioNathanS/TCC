const Clientes = require('../models/cliente');
const { update } = require('../models/cliente');


module.exports ={



async create (req,res){
    
    try{  
        const cliente= await Clientes.create(req.body);
        return res.send({cliente});
    } catch(err){
        return res.status(400).send({error:'Erro ao cadastrar'});  
    }
},

async index(req,res){
    try{
    const clientes= await Clientes.find();

    return res.json(clientes);
    
    }catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }

},

async indexNome(req,res){
    try{
    const clientes= await Clientes.find({'nome':req.params.nome});

    return res.json(clientes);
    
    }catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }

},

async update(req,res){

    
    const nacionalidade =  req.body.nacionalidade;
    const orgao =  req.body.orgao;
    const nome =  req.body.nome;
    const estadoCivil = req.body.estadoCivil;
    const profissao = req.body.profissao;
    const rg = req.body.rg;
    const cpf = req.body.cpf;
    const emissao=req.body.emissao;
    const cep = req.body.cep;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const estado=req.body.estado;
    const telefone = req.body.telefone;
    const email=req.body.email;

    try{
        if(nacionalidade!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{nacionalidade:nacionalidade});
         }
        
         if(orgao!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{orgao:orgao});
         }
    
         if(nome!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{nome:nome});
         }

         if(estadoCivil!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{estadoCivil:estadoCivil});
         }

         if(profissao!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{profissao:profissao});
         }

         if(rg!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{rg:rg});
         }

         if(cpf!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{cpf:cpf});
         }

         if(emissao!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{emissao:emissao});
         }

         if(cep!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{cep:cep});
         }

         if(bairro!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{bairro:bairro});
         }

         if(cidade!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{cidade:cidade});
         }

         if(estado!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{estado:estado});
         }

         if(telefone!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{telefone:telefone});
         }

         if(email!==''){
            await Clientes.findOneAndUpdate({nome:req.params.nome},{email:email});
         }
         res.send('edited');

        }catch(err){
            return res.status(400).send({error:'Não foi possível editar'});
    
        }

},

async delete(req,res){
   
    try{
    const cliente= await Clientes.findById(req.params.id);

    await cliente.remove();

    res.send('deletado irmão');

    }catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }

},

};