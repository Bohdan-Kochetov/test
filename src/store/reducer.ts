const initialState = {
  number: 0,
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'add':
      return { number: state.number + 1 };
    default:
      return state;
  }
}
