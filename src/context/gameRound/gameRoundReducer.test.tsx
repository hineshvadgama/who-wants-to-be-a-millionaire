import roundReducer from './gameRoundReducer';

describe('gameRoundReducer', () => {
  test('increase increases round by 1', () => {
    const newRound = roundReducer(1, { type: 'increase' });
    expect(newRound).toStrictEqual(2);
  });

  test('reset returns number of rounds', () => {
    const numberOfRounds = roundReducer(5, { noOfRounds: 5, type: 'reset' });
    expect(numberOfRounds).toStrictEqual(5);
  });

  test('reset throws error if missing parameter', () => {
    const numberOfRounds = () => roundReducer(5, { type: 'reset' });
    expect(numberOfRounds).toThrow(Error);
  });

  test('throws error if no action match', () => {
    const newRound = () => roundReducer(1, { type: 'decrease' });
    expect(newRound).toThrow(Error);
  });
});
