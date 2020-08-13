const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const path=require('path');

const app = express();




app.use(cors());
app.use(express.json());
app.use(routes);


app.use(
    "/files",
    express.static(path.resolve(__dirname,"..","tmp","uploads"))
    );


app.use(express.urlencoded({extended:true}));
app.use(morgan('dev')); 

app.get('/',(req,res) =>{
    res.send('Pai ta on')
});

app.listen(3333);