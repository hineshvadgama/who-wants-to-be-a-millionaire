export default function roundReducer(round: number, action: { type: string }): number {
  switch (action.type) {
    case 'increase':
      return round + 1;
    case 'reset':
      return 0;
    default: {
      throw Error('No action type provided for roundReducer');
    }
  }
}
