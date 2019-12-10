import React, { Component } from 'react';
import { connect } from 'react-redux'

import { guessWord } from '../actions';

export class UnconnectedInput extends Component {

  constructor(props) {
    super(props);

    this.state = { currentGuess: null };
  }

  submitGuessWord = (evt) => {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if(guessedWord && guessedWord.length > 0) {
      return this.props.guessWord(guessedWord);
    }
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
          placeholder="enter guess"/>
        <button
          data-test="submit-button"
          type="submit"
          onClick={(evt) => this.submitGuessWord(evt)}
          className="btn btn-primary">Submit</button>
      </form>
    );
    return (
      <div data-test="component-input">
        { contents }
      </div>)
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};
//passed action creator as prop to component, no need for mapDispatchToProps
export default connect(mapStateToProps, { guessWord })(UnconnectedInput);