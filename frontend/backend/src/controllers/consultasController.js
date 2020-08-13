
const Casos = require('../models/Casos');
const Clientes = require('../models/cliente');

module.exports ={


    async consultaAndamento(req,res) {

           
        try{
            const casos= await Casos.find({'andamento':"Em andamento"}).countDocuments()  
            return res.json(casos);
     
        }catch{
             return res.status(400).send({error:'td errado malandro'});
         }
     
    },

    async consultaEncerrado(req,res) {

           
        try{
            const casos= await Casos.find({'andamento':"Encerrado"}).countDocuments()  
            return res.json(casos);
     
        }catch{
             return res.status(400).send({error:'td errado malandro'});
         }
     
    },

    async clientesTotal(req,res) {

           
        try{
            const cliente= await Clientes.find().countDocuments()  
            return res.json(cliente);
     
        }catch{
             return res.status(400).send({error:'td errado malandro'});
         }
     
    },

    async clientesJuri(req,res) {

           
        try{
            const cliente= await Clientes.find({'tipo':"Jurídica"}).countDocuments()  
            return res.json(cliente);
     
        }catch{
             return res.status(400).send({error:'td errado malandro'});
         }
     
    },



    

   
}



  
 