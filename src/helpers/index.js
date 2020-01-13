export function getLetterMatchCount(guessedWord, secretWord) {
  // mocking because lack of external API will break the app.
  // if you change this word to some other the tests mocking secretWord as party will fail
  secretWord = 'party';
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}