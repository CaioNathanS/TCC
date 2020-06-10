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

    const autor =  req.body.autor;
    const reu =  req.body.reu;
    const circunstancias =  req.body.circunstancias;
    const fundamento = req.body.fundamento;
    const parecer = req.body.parecer;

     if(autor!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{autor:autor});
     }
    
     if(reu!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{reu:reu});
     }

     if(circunstancias!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{circunstancias:circunstancias});
     }
     
     if(fundamento!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{fundamento:fundamento});
     }

     if(parecer!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{parecer:parecer});
     }
     
     
    
    
    

    res.send('edited');

}



};