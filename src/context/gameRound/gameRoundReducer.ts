export default function roundReducer(round: number, action: {
  type: string, noOfRounds?: number
}): number {
  switch (action.type) {
    case 'increase':
      return round + 1;
    case 'reset':
      if (action.noOfRounds) return action.noOfRounds;
      throw Error("Missing argument 'noOFRounds'");
    default: {
      throw Error('No action type provided for roundReducer');
    }
  }
}
