const mongoose=require('../database');

const fs=require('fs');
const path=require('path');
const {promisify}=require('util');


    const ArquivosSchema=new mongoose.Schema({
        name:String,
        size:Number,
        key:String,
        url:String,
    
        createdAt:{
            type:Date,
            default:Date.now,
        },


    });

    ArquivosSchema.pre('save',function(){
        if(!this.url) {
            this.url=`http://localhost:3333/files/${this.key}`;
        }
     });


     ArquivosSchema.pre('remove',function(){
         return promisify(fs.unlink)(path.resolve(__dirname,"..","..","tmp","uploads",this.key)
         );
        
     });

    const Arquivos=mongoose.model('Arquivos',ArquivosSchema);

   

    module.exports=Arquivos;