import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Users from './pages/Users';
import Orcamentos from './pages/Orcamentos';

export default () => (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/newproduct' component={NewProduct}/>
        <Route path='/users' component={Users}/>
        <Route path='/orcamentos' component={Orcamentos}/>
    </Switch>
)