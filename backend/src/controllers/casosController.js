const Casos = require('../models/Casos');


module.exports ={



async create (req,res){
    

    try{
       

        const casos= await Casos.create(req.body);

        return res.send({casos});
    } catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }
},

async index (req,res){

        const {id} =req.params;

   const casos = await Casos.find({_id:`${id}`});
      
        return res.send(casos);

},



async delete(req,res){
   


    const casos= await Casos.findById(req.params.id);

    await casos.remove();

    res.send('deletado irmão');

},

async update(req,res){

    const title =  req.body.title;
    const description =  req.body.description;
    const advogados_id =  req.body.advogados_id;

     await Casos.findOneAndUpdate({_id:req.params.id},{title:title});
     await Casos.findOneAndUpdate({_id:req.params.id},{description:description});
     await Casos.findOneAndUpdate({_id:req.params.id},{advogados_id:advogados_id});
    
    

    res.send('edited');

}



};