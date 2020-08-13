const Arquivos = require('../models/arquivos');


module.exports ={

async create (req,res){

    try{

    const arquivos= await Arquivos.create({
        name:req.file.originalname,
        size:req.file.size,
        key:req.file.filename,
        url:'',
        caso:req.params.id,
    });
    return res.json(arquivos); 

    }catch(err){
        res.status(400).send({error:'Não foi possível criar'});
    }

    },
async index(req,res){

   
    
    try{
    const arquivos= await Arquivos.find();

    return res.json(arquivos);

    }catch(err){
        res.status(400).send({error:'Não foi possível listar'});
    }

},
async delete(req,res){
   
    try{

    const arquivos= await Arquivos.findById(req.params.id);

    await arquivos.remove();

    res.send('deletado irmão');

    }catch(err){
        res.status(400).send({error:'Não foi possível deletar'});
    }

}

};