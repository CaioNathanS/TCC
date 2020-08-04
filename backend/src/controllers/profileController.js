const Casos = require('../models/Casos');

module.exports ={


async index(req,res) {

        const advogados_id = req.headers.authorization; 
       
    try{
       const casos= await Casos.find({advogados_id:`${advogados_id}`})   
        return res.json(casos);

    }catch{
         return res.status(400).send({error:'td errado malandro'});
    }

    },


    

   
}
