import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>React testing app</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}/>
      </div>
    );
  }
}

export default App;
