import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemListPage from './pages/ItemListPage';
import LoginPage from './pages/LoginPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories/" component={ItemListPage} />
          <Route path="/login" component={LoginPage} />
        </>
      </BrowserRouter>
    );
  }
}
