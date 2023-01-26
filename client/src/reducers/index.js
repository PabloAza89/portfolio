const initialState = {
  english: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LANGUAGE_CHANGER':
      return {
        ...state,
        english: action.payload
      }
    default:
      return state
  }
};

export default reducer;

