const Agenda = require('../models/agenda');


module.exports ={



async create (req,res){  

    try{
        const agenda= await Agenda.create(req.body);
        
        return res.send({agenda});
    } catch(err){
        return res.status(400).send({error:'td errado malandro'});
    }
},

async index (req,res){
      

  try{ const agenda = await Agenda.find();

        return res.send(agenda);

    }catch(err){
        res.status(400).send({error:'Não foi possível listar'});
    }
},


async consultar(req,res) {

           
    try{
       const agenda= await Agenda.find({'lido':"Pendente"})
        return res.json(agenda);

    }catch{
         return res.status(400).send({error:'td errado malandro'});
    }

    }





};