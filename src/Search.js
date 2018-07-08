import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import MovieDetails from './MovieDetails';


const Search = () => (
  <Router>
    <div className="Search">
      {/* <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header> */}
      <Switch>
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);


export default Search;
