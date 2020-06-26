import React from 'react';

import{BrowserRouter, Route, Switch} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NovoCaso from './pages/NovoCaso';
import Detalhes from './pages/Detalhes';
import NovoCliente from './pages/NovoCliente';
import Inicio  from './pages/Inicio';
import Pesquisa from './pages/Pesquisa';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile"  exact component={Profile}/>
            <Route path="/casos/novo" component={NovoCaso}/>
            <Route path="/profile/:id" component={Detalhes}/>
            <Route path="/cliente/cadastro" component={NovoCliente}/>
            <Route path="/inicio" component={Inicio}/>
            <Route path="/pesquisa" component={Pesquisa}/>
            </Switch>
        
        
        </BrowserRouter>

    );

}