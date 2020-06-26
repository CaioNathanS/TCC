const Advogado = require('../models/advogados');


module.exports ={



async create (req,res){
    const {email,id,nome}= req.body;
       
    try{
        if(await Advogado.findOne({email}))
            return res.status(400).send({error:'email já existente'});

        if(await Advogado.findOne({id}))
            return res.status(400).send({error:'id ja existe'});

         if(await Advogado.findOne({nome}))
            return res.status(400).send({error:'Nome existe'});

        const advogado= await Advogado.create(req.body);

        return res.send({advogado});
    } catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }
},

async index (req,res){
    try{
    Advogado.find(function(err, advogado) {
        if (err) return console.error(err);
        return res.send(advogado);
    })
    } catch{
        return res.status(400).send({error:'Não foi possível listar'});
    }
},

async delete(req,res){

    try{
    const advogados= await Advogado.findById(req.params.id);

    await advogados.remove();

    res.send('deletado irmão');

    }catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }

}


};