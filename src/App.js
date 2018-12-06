import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
import CartPage from './pages/CartPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/OrderListPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/" component={ItemListPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/item/" component={ItemDetailPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/order" component={OrderListPage} />
        </>
      </BrowserRouter>
    );
  }
}
