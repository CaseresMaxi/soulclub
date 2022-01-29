import React from 'react';
import 'firebase/firestore';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { AddProduct } from './pages/AddProducts/AddProducts';
import { Home } from './pages/Home/Home';


export const Routes: React.FC<any> = (): any => {

  return (
    <Router basename="/souldclub" >
      <Switch>
        <Route path="/souldclub/" component={Home} exact>
        </Route>
        <Route exact path="/souldclub/user/:pass" component={Home}>
        </Route>
        <Route path="/souldclub/add" exact component={AddProduct}>
        </Route>
        <Route path="/souldclub/add/:id"  exact component={AddProduct} >
        </Route>
      </Switch>
    </Router>
  )


}

export default Routes;
