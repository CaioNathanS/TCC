const mongoose=require('../database');



const ClientesSchema=new mongoose.Schema({

    tipo:{
        type:String
    },

    cnpj:{
        type:String
    },


    nome:{
        type:String,
        require:true,
    },

    estadoCivil:{
        type:String,
      
    },

    nacionalidade:{
        type:String,
        default:'Brasileiro',
    },

    profissao:{
        type:String,
       
    },

    rg:{
        type:String,
       
    },


   orgao:{
        type:String,  
       
        default:'SSP-DF',
    },

    emissao:{
        type:String,  
        
    },

    cpf:{
        type:String,  
        
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

    caso:{
        type:String,
    }

});

   

    const Clientes=mongoose.model('Clientes',ClientesSchema);

    module.exports=Clientes;