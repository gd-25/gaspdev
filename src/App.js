import './styles/main.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Info from './components/Info';
import ProductList from './components/ProductList';
import Overview from './components/Overview';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import PlayZone from './components/PlayZone';



function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Switch>
      <Route exact path="/" component={Landing}></Route>
      <Route path="/merchandising" component={ProductList}></Route>
      <Route path="/playzone" component={PlayZone}></Route>
      <Route path="/information" component={Info}></Route>
      <Route path="/overview" component={Overview}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>

    </Switch>
 
    </div>
    
  );
}

export default App;
