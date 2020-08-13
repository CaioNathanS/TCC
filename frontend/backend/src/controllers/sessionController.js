const Advogado = require('../models/advogados');


module.exports ={
    async create (req,res){
        const {id} = req.body;

        const advogados= await Advogado.findOne({id:`${id}`});
        

        if(!advogados){
            return res.status(400).json({error:'zero mane'})
        }

        return res.json(advogados);

    }


}