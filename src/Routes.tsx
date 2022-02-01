import React from 'react';
import 'firebase/firestore';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { AddProduct } from './pages/AddProducts/AddProducts';
import { Home } from './pages/Home/Home';


export const Routes: React.FC<any> = (): any => {

  return (
    <Router basename="/" >
      <Switch>
        <Route path="/" component={Home} exact>
        </Route>
        <Route exact path="/user/:pass" component={Home}>
        </Route>
        <Route path="/add" exact component={AddProduct}>
        </Route>
        <Route path="/add/:id"  exact component={AddProduct} >
        </Route>
      </Switch>
    </Router>
  )


}

export default Routes;
