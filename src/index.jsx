import React from 'react';
import { render } from 'react-dom';
import './style.css';
import ShoppingList from './components/ShoppingList';
import Detail from './components/Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/detail/:id">
        <Detail />
      </Route>
      <Route path="/">
        <ShoppingList />
      </Route>
    </Switch>
  </Router>
);

render(<App />, document.querySelector('#app'));
