const express = require('express');
const multer=require('multer');

const routes = express.Router();




const advogadosConstroller = require('./controllers/advogadosController');
const casosController = require('./controllers/casosController');
const profileController = require ('./controllers/profileController');
const sessionController = require ('./controllers/sessionController');

const arquivosController = require('./controllers/arquivosController');





const multerConfig=require('./config/multer');

routes.post('/uploads', multer(multerConfig).single('file'),arquivosController.create);
routes.get('/uploads',arquivosController.index);
routes.delete('/uploads/:id',arquivosController.delete);




routes.post('/sessions', sessionController.create);


routes.get('/profile',profileController.index);

routes.get('/advogados',advogadosConstroller.index);
routes.post('/advogados',advogadosConstroller.create);

routes.get('/casos/:id',casosController.index);
routes.post('/casos',casosController.create);

routes.delete('/casos/:id',casosController.delete);
routes.put('/casos/:id',casosController.update);

module.exports = routes;