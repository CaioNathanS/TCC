const mongoose=require('../database');
const crypto = require('crypto');


const AdvogadoSchema=new mongoose.Schema({
    nome:{
        type:String,
        require:true,
    },
    id:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
   
    createdAt:{
        type:Date,
        default:Date.now,
    },


});

   

    const Advogado=mongoose.model('Advogado',AdvogadoSchema);

    module.exports=Advogado;