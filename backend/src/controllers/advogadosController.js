const Advogado = require('../models/advogados');


module.exports ={



async create (req,res){
    const {email}= req.body;
    

    try{
        if(await Advogado.findOne({email}))
            return res.status(400).send({error:'usuario ja existe'});

        const advogado= await Advogado.create(req.body);

        return res.send({advogado});
    } catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }
},

async index (req,res){
    Advogado.find(function(err, advogado) {
        if (err) return console.error(err);
        return res.send(advogado);
})
},



};