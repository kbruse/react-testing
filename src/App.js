import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import { getSecretWord } from './actions';
import Input from './components/Input';

class App extends Component {

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>React testing app</h1>
        <Congrats success={this.props.success}/>
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
