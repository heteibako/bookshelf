import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
import BooksPage from './components/BooksPage';
import SearchPage from './components/SearchPage';
import BookDetail from './components/BookDetail';
var hist = createBrowserHistory();
const App = () => {
  return (
    <div>
      <Router history={hist}>
        <NavBar />

        <Switch>
          <Route exact path="/" component={BooksPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/book/:id" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
