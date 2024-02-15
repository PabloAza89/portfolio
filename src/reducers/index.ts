interface initialStateI {
  english: boolean,
  dataTheme: string | null,
}

const initialState: initialStateI = {
  english: localStorage.getItem('langEn') === null ? true : JSON.parse(`${localStorage.getItem('langEn')}`),
  dataTheme: localStorage.getItem('dataTheme') === null ? 'os' : localStorage.getItem('dataTheme')
}


const reducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'LANGUAGE_CHANGER':
      return {
        ...state,
        english: action.payload
      };
    case 'SET_DATA_THEME':
      return {
        ...state,
        dataTheme: action.payload
    };
    default:
      return state
  }
};

export default reducer

