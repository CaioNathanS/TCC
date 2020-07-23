const express = require('express');
const multer=require('multer');

const routes = express.Router();



const clientesController = require('./controllers/clientesController');
const advogadosConstroller = require('./controllers/advogadosController');
const casosController = require('./controllers/casosController');
const profileController = require ('./controllers/profileController');
const sessionController = require ('./controllers/sessionController');

const arquivosController = require('./controllers/arquivosController');





const multerConfig=require('./config/multer');
const pesquisaController = require('./controllers/pesquisaController');
const agendaController = require('./controllers/agendaController');

routes.post('/agenda',agendaController.create)
routes.get('/agenda',agendaController.index)
routes.get('/consultagenda',agendaController.consultar)


routes.post('/uploads/:id', multer(multerConfig).single('file'),arquivosController.create);
routes.get('/uploads',arquivosController.index);
routes.delete('/uploads/:id',arquivosController.delete);

routes.get('/pesquisa1/:search',pesquisaController.p1);
routes.get('/pesquisa2/:search',pesquisaController.p2);


routes.post('/sessions', sessionController.create);


routes.get('/profile',profileController.index);
routes.get('/consulta',profileController.consultar);

routes.get('/advogados',advogadosConstroller.index);
routes.post('/advogados',advogadosConstroller.create);
routes.delete('/advogados/:id',advogadosConstroller.delete);

routes.get('/casos/:id',casosController.index);
routes.post('/casos',casosController.create);

routes.delete('/casos/:id',casosController.delete);
routes.put('/casos/:id',casosController.update);

routes.put('/clientes/:nome',clientesController.update);
routes.get('/clientes',clientesController.index);
routes.get('/clientes/:nome',clientesController.indexNome);
routes.post('/clientes',clientesController.create);

routes.delete('/clientes/:id',clientesController.delete);

module.exports = routes;