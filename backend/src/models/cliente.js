const mongoose=require('../database');



const ClientesSchema=new mongoose.Schema({
    nome:{
        type:String,
        require:true,
    },

    estadoCivil:{
        type:String,
        require:true,
    },

    nacionalidade:{
        type:String,
        default:'Brasileiro',
    },

    profissao:{
        type:String,
        require:true,
    },

    rg:{
        type:String,
        require:true,
    },


   orgao:{
        type:String,  
        required:true,
        default:'SSP-DF',
    },

    emissao:{
        type:Date,  
        required:true,
    },

    cpf:{
        type:String,  
        required:true,
    },

    cep:{
        type:String,  
        required:true,
    },

    bairro:{
        type:String,  
        required:true,
    },

    cidade:{
        type:String,  
        required:true,
    },

    estado:{
        type:String,  
        required:true,
    },

    telefone:{
        type:String,  
        required:true,
    },

    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },

});

   

    const Clientes=mongoose.model('Clientes',ClientesSchema);

    module.exports=Clientes;