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
  staticRefWidth: number,
  staticRefHeight: number,
  maxStaticReference: number,
  minStaticReference: number,
  currentWidth: number,
  currentHeight: number,
  percentageResizedHeight: number,
  percentageResizedWidth: number,
  minRatioReference: number,
  timer: number,
  numberTimer: number | undefined,
  timerEnabled: boolean
}

const initialState: initialStateI = {
  english:  true,
  darkMode: false,
  width: window.screen.width,
  height: window.screen.height,
  minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
  larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  staticRefWidth: window.screen.width / 100,
  staticRefHeight: window.screen.height / 100,
  maxStaticReference: ( window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
  minStaticReference: ( window.screen.width <= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
  currentWidth: window.innerWidth,
  currentHeight: window.innerHeight,
  percentageResizedHeight: window.innerHeight / window.screen.height,
  percentageResizedWidth: window.innerWidth / window.screen.width,
  minRatioReference: window.innerWidth / window.screen.width <= window.innerHeight / window.screen.height  ? (window.innerWidth / window.screen.width) / (window.innerHeight / window.screen.height) : (window.innerHeight / window.screen.height) / (window.innerWidth / window.screen.width),
  timer: 15,
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
    case 'STATIC_REF_WIDTH':
        return {
          ...state,
          staticRefWidth: action.payload
        };
    case 'STATIC_REF_HEIGHT':
      return {
        ...state,
        staticRefHeight: action.payload
      };
    case 'MAX_STATIC_REFERENCE':
      return {
        ...state,
        maxStaticReference: action.payload
      };
    case 'MIN_STATIC_REFERENCE':
      return {
        ...state,
        minStaticReference: action.payload
      };
    case 'CURRENT_WIDTH':
      return {
        ...state,
        currentWidth: action.payload
      };
    case 'CURRENT_HEIGHT':
      return {
        ...state,
        currentHeight: action.payload
      };
    case 'PERCENTAGE_RESIZED_HEIGHT':
      return {
        ...state,
        percentageResizedHeight: action.payload
      };
    case 'PERCENTAGE_RESIZED_WIDTH':
      return {
        ...state,
        percentageResizedWidth: action.payload
      };
    case 'SET_MIN_RATIO_REFERENCE':
      return {
        ...state,
        minRatioReference: action.payload
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

