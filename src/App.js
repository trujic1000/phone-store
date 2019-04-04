import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import ProductList from './components/product/product-list/ProductList';
import Details from './components/product/details/Details';
import Cart from './components/cart/Cart';
import Default from './components/default/Default';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
