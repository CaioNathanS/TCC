const mongoose=require('../database');



const CasosSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
   
   
   advogados_id:{
        type:String,  
    },


});

   

    const Casos=mongoose.model('Casos',CasosSchema);

    module.exports=Casos;