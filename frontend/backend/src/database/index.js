const mongoose=require('mongoose');

const MONGODB_URI='mongodb://localhost:27017/ultimateTCC';

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true,
    useCreateIndex: true,
     useUnifiedTopology: true,
     useFindAndModify: false})
.then(db=>console.log('Database On'))
.catch(err=>console.error(err));


mongoose.Promise= global.Promise;

module.exports=mongoose;