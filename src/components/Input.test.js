import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(< Input store={store} />).dive().dive();
  // console.log(wrapper.debug());
  return wrapper;
};

// check how Enzyme shallow works with higher order components, what is returned.
// uncomment console.log(wrapper.debug()), and remove .dive() methods
// setup();

describe('render', () => {
  describe('word has NOT been guessed', () => {
    test('renders component without error', () => {

    });

    test('renders input box', () => {

    });

    test('renders submit button', () => {

    });
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });

    test('does NOT render input box', () => {

    });

    test('does NOT render submit button', () => {

    });
  });
});

describe('update state', () => {

});