import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home';
import Shop from './pages/Shop'
import Sale from './pages/Sale'
import CustomerCare from './pages/CustomerCare'
import Stockists from './pages/Stockists'
import Error from './pages/Error'
import Footer from './component/Footer';
import SingleProduct from './pages/SingleProduct'
import SingleSale from './pages/SingleSale'
import CartFullView from './pages/CartFullView';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/sale">
          <Sale />
        </Route>
        <Route path="/customercare">
          <CustomerCare />
        </Route>
        <Route path="/stockists">
          <Stockists />
        </Route>
        <Route path="/product/:id">
          <SingleProduct />
        </Route>
        <Route path="/sale-product/:id">
          <SingleSale />
        </Route>
        <Route path="/CartFullView">
          <CartFullView />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
