import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toEqual(0);
  });

  test('returns correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toEqual(3);
  });

  test('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toEqual(3);
  });
});