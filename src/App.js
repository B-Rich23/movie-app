import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import tmdb from './tmdb.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Search from './Search';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <img src={tmdb} className="App-tmdb" alt="tmdb" />

        <Search />
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);


export default App;
