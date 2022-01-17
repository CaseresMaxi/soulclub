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
    <Router>
      <Switch>
        <Route path="/" component={Home} exact>
        </Route>
        <Route path="/add" component={AddProduct} exact>
        </Route>
        <Route path="/add/:id" component={AddProduct} exact>
        </Route>
      </Switch>
    </Router>
  )


}

export default App;
