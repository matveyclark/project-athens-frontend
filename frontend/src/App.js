import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './components/containers/mainContainer';
import ProductWrapper from './components/containers/productWrapper';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={MainContainer}/>    
        <Route exact path="/product" component={ProductWrapper}/>
      </React.Fragment>
    </Router>
  );
}

export default App;