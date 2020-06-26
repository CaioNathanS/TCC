const Clientes = require('../models/cliente');


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