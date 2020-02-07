import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HeroWrapper from  './components/containers/heroWrapperComponent'
import StoryWrapper from './components/containers/storyWrapperComponent'

function App() {
  return (
    <Router>
      <React.Fragment>
        <HeroWrapper />
        <StoryWrapper />
      </React.Fragment>
    </Router>
  );
}

export default App;
