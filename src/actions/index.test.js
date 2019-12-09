import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {

  beforeEach(() => {
    //if you had a axios instance you would pass it into the install method.
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  //integration test
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    //returning promise - will wait for promise resolve
    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
  });
});