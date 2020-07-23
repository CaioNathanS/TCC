const Casos = require('../models/Casos');
const Clientes = require('../models/cliente');

module.exports ={


async p1(req,res) {

        const pesquisa=req.params.search;

        const resultado = await Casos.find({'cliente': { $regex: new RegExp(pesquisa), $options: 'i' }});

       
        return res.json(resultado);

        
        
    },

    async p2(req,res) {

        const pesquisa=req.params.search;

        const resultado = await Casos.find({'reu': { $regex: new RegExp(pesquisa), $options: 'i' }});

       
        return res.json(resultado);
        
    }
}
