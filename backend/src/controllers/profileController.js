const Casos = require('../models/Casos');

module.exports ={


async index(req,res) {

        const advogados_id = req.headers.authorization; 
       
        
       const casos= await Casos.find({advogados_id:`${advogados_id}`})
            
            
            

        return res.json(casos);

    }
}
