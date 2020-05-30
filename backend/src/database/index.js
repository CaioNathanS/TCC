const mongoose=require('mongoose');

const MONGODB_URI='mongodb://localhost:27017/ultimateTCC';

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })
.then(db=>console.log('Databeise de manobras'))
.catch(err=>console.error(err));


mongoose.Promise= global.Promise;

module.exports=mongoose;