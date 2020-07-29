const mongoose=require('../database');



const CasosSchema=new mongoose.Schema({
    cliente:{
        type:String,
    },
    outraParte:{
        type:String
    },
    circunstancias:{
        type:String,
        required:true,
    },
    fundamento:{
        type:String,
        required:true,
    },
    parecer:{
        type:String,
    },
    advogados_id:{
        type:String,
        required:true,
    },  
    andamento:{
        type:String,
        default:"Em andamento"
        
    },
    fase:{
        type:String,
    },

    reuAutor:{
        type:String,
        required:true,
    },
    resumo:{
        type:String,
    }
  
});


    
   

    const Casos=mongoose.model('Casos',CasosSchema);

    module.exports=Casos;