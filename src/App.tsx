import 'firebase/firestore';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import { AddProduct } from './pages/AddProducts/AddProducts';
import { Home } from './pages/Home/Home';


export const App: React.FC<any> = (): any => {

  return (
    <Router >
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

export default App;