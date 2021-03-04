
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/NotFound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Switch>
          <Route path="/shop" >
            <Shop />
          </Route>
          <Route exact path="/" >
            <Shop />
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails/>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
