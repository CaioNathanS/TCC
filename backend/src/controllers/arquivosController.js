const Arquivos = require('../models/arquivos');


module.exports ={


async create (req,res){

    

    const arquivos= await Arquivos.create({
        name:req.file.originalname,
        size:req.file.size,
        key:req.file.filename,
        url:'',
        caso:req.params.id,
    });
    return res.json(arquivos);

    },

async index(req,res){

    const {id} =req.params;
    

    const arquivos= await Arquivos.find({caso:`${id}`});

    

    return res.json(arquivos);

},

async delete(req,res){
   
    

    const arquivos= await Arquivos.findById(req.params.id);

    await arquivos.remove();

    res.send('deletado irmão');





}

};