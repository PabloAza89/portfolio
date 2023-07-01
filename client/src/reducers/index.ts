interface initialStateI {
  english: boolean,
  darkMode: boolean,
  width: number,
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  currentWidth: number,
  percentageResizedHeight: number,
  timer: number,
  numberTimer: number | undefined,
  timerEnabled: boolean,
  fullScreen: boolean,
}

const initialState: initialStateI = {
  english: localStorage.getItem('langEn') === null ? true : JSON.parse(`${localStorage.getItem('langEn')}`),
  darkMode: localStorage.getItem('night') === null ? false : JSON.parse(`${localStorage.getItem('night')}`),
  width: window.screen.width,
  height: window.screen.height,
  minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  currentWidth: window.innerWidth,
  percentageResizedHeight: window.innerHeight / window.screen.height,
  timer: 60,
  numberTimer: undefined,
  timerEnabled: false,
  fullScreen: window.screen.width === window.innerWidth && window.screen.height === window.innerHeight ? true : false
}


const reducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'LANGUAGE_CHANGER':
      return {
        ...state,
        english: action.payload
      };
    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: action.payload
    };
    case 'SET_WIDTH':
      return {
        ...state,
        width: action.payload
      };
    case 'SET_HEIGHT':
      return {
        ...state,
        height: action.payload
      };
    case 'MIN_PORT':
      return {
        ...state,
        minPort: action.payload
      };
    case 'MIN_LAND':
      return {
        ...state,
        minLand: action.payload
      };
    case 'MED_PORT':
      return {
        ...state,
        medPort: action.payload
      };
    case 'MED_LAND':
      return {
        ...state,
        medLand: action.payload
      };
    case 'LAR_PORT':
      return {
        ...state,
        larPort: action.payload
      };
    case 'LAR_LAND':
      return {
        ...state,
        larLand: action.payload
      };
    case 'CURRENT_WIDTH':
      return {
        ...state,
        currentWidth: action.payload
      };
    case 'PERCENTAGE_RESIZED_HEIGHT':
      return {
        ...state,
        percentageResizedHeight: action.payload
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
    case 'SET_FULL_SCREEN':
      return {
        ...state,
        fullScreen: action.payload
      };
    default:
      return state
  }
};

export default reducer

