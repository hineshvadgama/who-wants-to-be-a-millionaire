import roundReducer from './gameRoundReducer';

describe('gameRoundReducer', () => {
  test('increase increases round by 1', () => {
    const newRound = roundReducer(1, { type: 'increase' });
    expect(newRound).toStrictEqual(2);
  });

  test('reset returns number of rounds', () => {
    const numberOfRounds = roundReducer(5, { type: 'reset' });
    expect(numberOfRounds).toStrictEqual(0);
  });

  test('throws error if no action match', () => {
    const newRound = () => roundReducer(1, { type: 'decrease' });
    expect(newRound).toThrow(Error);
  });
});
