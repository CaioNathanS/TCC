const mongoose=require('../database');



const CasosSchema=new mongoose.Schema({
    autor:{
        type:String,
        require:true,
    },

    reu:{
        type:String,
        require:true,
    },

    circunstancias:{
        type:String,
        require:true,
    },

    fundamento:{
        type:String,
        require:true,
    },

    parecer:{
        type:String,
        require:true,
    },


   advogados_id:{
        type:String,  
    },

    arquivo:[
        {type:String}
    ]


});


    
   

    const Casos=mongoose.model('Casos',CasosSchema);

    module.exports=Casos;