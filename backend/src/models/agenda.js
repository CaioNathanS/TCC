const mongoose=require('../database');



const AgendaSchema=new mongoose.Schema({
    nome:{
        type:String,
        require:true,
    },
    
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
   
   telefone:{
    type:String,
    require:true,
   },

   assunto:{
    type:String,
   },

   horario:{
    type:String,
    require:true,
   },
   lido:{
    type:String,
    default:"Pendente",
   }
   



});

   

    const Agenda=mongoose.model('Agenda',AgendaSchema);

    module.exports=Agenda;