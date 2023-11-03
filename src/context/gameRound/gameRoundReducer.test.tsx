import roundReducer from './gameRoundReducer';

describe('gameRoundReducer', () => {
  test('increases round by 1', () => {
    const newRound = roundReducer(1, { type: 'increase' });
    expect(newRound).toStrictEqual(2);
  });

  test('throws error if no action match', () => {
    const newRound = () => roundReducer(1, { type: 'decrease' });
    expect(newRound).toThrow(Error);
  });
});
