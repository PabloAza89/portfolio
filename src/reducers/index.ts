interface initialStateI {
  english: boolean,
  dataTheme: string | null,
  timer: number,
  numberTimer: number | undefined,
  timerEnabled: boolean,
}

const initialState: initialStateI = {
  english: localStorage.getItem('langEn') === null ? true : JSON.parse(`${localStorage.getItem('langEn')}`),
  dataTheme: localStorage.getItem('dataTheme') === null ? 'os' : localStorage.getItem('dataTheme'),
  timer: 60,
  numberTimer: undefined,
  timerEnabled: false
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
    case 'SET_TIMER':
      return {
        ...state,
        timer: state.timer -= action.payload
      };
    case 'STOP_TIMER':
      return {
        ...state,
        timer: action.payload
      };
    case 'SET_NUMBER_TIMER':
      return {
        ...state,
        numberTimer: action.payload
      };
    case 'SET_TIMER_ENABLED':
      return {
        ...state,
        timerEnabled: action.payload
      };
    default:
      return state
  }
};

export default reducer

