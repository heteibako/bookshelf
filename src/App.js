import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
import BooksPage from './components/BooksPage';
import SearchPage from './components/SearchPage';
var hist = createBrowserHistory();
const App = () => {
  return (
    <div>
      <Router history={hist}>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route exact path="/" component={BooksPage} />
                <Route exact path="/search" component={SearchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
