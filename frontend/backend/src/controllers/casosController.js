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

  try{ const casos = await Casos.find({_id:`${id}`});
    


        return res.send(casos);

    }catch(err){
        res.status(400).send({error:'Não foi possível listar'});
    }
},

async delete(req,res){
   
    try{
      const casos= await Casos.findById(req.params.id);

    await casos.remove();

    res.send('deletado irmão');
    }
    catch(err){
        res.status(400).send({error:'Não foi possível deletar'});  
    }

},

async update(req,res){

    const autor =  req.body.autor;
    const reu =  req.body.reu;
    const circunstancias =  req.body.circunstancias;
    const fundamento = req.body.fundamento;
    const parecer = req.body.parecer;
    const andamento = req.body.andamento;
    const fase = req.body.fase;
    const resumo = req.body.resumo;

    try{

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

    if(fase!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{fase:fase});
     
    }
    if(andamento!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{andamento:andamento});
     
    }
    if(resumo!==''){
        await Casos.findOneAndUpdate({_id:req.params.id},{resumo:resumo});
     
    }
    res.send('edited');

    }catch(err){
        return res.status(400).send({error:'Não foi possível editar'});

    }

    }

};