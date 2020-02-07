import React from 'react';
import './App.css';
import HeroWrapper from  './components/containers/heroWrapperComponent'
import StoryWrapper from './components/containers/storyWrapperComponent'

function App() {
  return (
    <React.Fragment>
      <HeroWrapper />
      <StoryWrapper />
    </React.Fragment>
  );
}

export default App;
