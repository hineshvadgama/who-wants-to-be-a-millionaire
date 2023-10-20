export default function roundReducer(round: number, action: { type: string }) {
  switch (action.type) {
    case 'increase': {
      return round + 1;
    }
    default: {
      throw Error('No action type provided for roundReducer');
    }
  }
}
