const Casos = require('../models/Casos');
const Clientes = require('../models/cliente');

module.exports ={


async p1(req,res) {

        const pesquisa=req.params.search;

        const resultado = await Casos.find({autor:`${pesquisa}`});

       
        return res.json(resultado);
        
    },

    async p2(req,res) {

        const pesquisa=req.params.search;

        const resultado = await Casos.find({reu:`${pesquisa}`});

       
        return res.json(resultado);
        
    }
}
