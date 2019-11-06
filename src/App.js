import React from 'react';
import 'milligram'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import RandomBeer from './pages/RandomBeer'
import Beers from './pages/Beers'
import BeerDetail from './pages/BeerDetail'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <header>
        <h1>React Beers</h1>
        <NavBar/>
      </header>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/beers' exact component={Beers}/>
        <Route path='/randomBeer' exact component={RandomBeer}/>
        <Route path='/beers/:id' exact component={BeerDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
