import React from 'react';

import{BrowserRouter, Route, Switch} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Consultas from './pages/Consultas';
import Detalhes from './pages/Detalhes';
import Inicio  from './pages/Inicio';
import Pesquisa from './pages/Pesquisa';
import Cadastro from './pages/Cadastro';
import Cliente from './pages/Cliente';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile"  exact component={Profile}/>
            <Route path="/consulta" component={Consultas}/>
            <Route path="/profile/:id" component={Detalhes}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/inicio" component={Inicio}/>
            <Route path="/pesquisa" component={Pesquisa}/>
            <Route path="/cliente/:nome" component={Cliente}/>
            </Switch>
        
        
        </BrowserRouter>

    );

}