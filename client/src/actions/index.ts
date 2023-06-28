export function languageChanger(languageChanger:boolean) {
  return {
    type: 'LANGUAGE_CHANGER',
    payload: languageChanger
  }
};

export function setDarkMode(setDarkMode:boolean) {
  return {
    type: 'SET_DARK_MODE',
    payload: setDarkMode
  }
};

export function setWidth(setWidth:number) {
  return {
    type: 'SET_WIDTH',
    payload: setWidth
  }
};

export function setHeight(setHeight:number) {
  return {
    type: 'SET_HEIGHT',
    payload: setHeight
  }
};

export function setMinPort(setMinPort:boolean) {
  return {
    type: 'MIN_PORT',
    payload: setMinPort
  }
};

export function setMinLand(setMinLand:boolean) {
  return {
    type: 'MIN_LAND',
    payload: setMinLand
  }
};

export function setMedPort(setMedPort:boolean) {
  return {
    type: 'MED_PORT',
    payload: setMedPort
  }
};

export function setMedLand(setMedLand:boolean) {
  return {
    type: 'MED_LAND',
    payload: setMedLand
  }
};

export function setLarPort(setLarPort:boolean) {
  return {
    type: 'LAR_PORT',
    payload: setLarPort
  }
};

export function setLarLand(setLarLand:boolean) {
  return {
    type: 'LAR_LAND',
    payload: setLarLand
  }
};

export function setCurrentWidth(setCurrentWidth:number) {
  return {
    type: 'CURRENT_WIDTH',
    payload: setCurrentWidth
  }
};

export function setPercentageResizedHeight(setPercentageResizedHeight:number) {
  return {
    type: 'PERCENTAGE_RESIZED_HEIGHT',
    payload: setPercentageResizedHeight
  }
};

export function setTimer(setTimer:number) {
  return {
    type: 'SET_TIMER',
    payload: setTimer
  }
};

export function stopTimer(stopTimer:number) {
  return {
    type: 'STOP_TIMER',
    payload: stopTimer
  }
};

export function setNumberTimer(setNumberTimer:number) {
  return {
    type: 'SET_NUMBER_TIMER',
    payload: setNumberTimer
  }
};

export function setTimerEnabled(setTimerEnabled:boolean) {
  return {
    type: 'SET_TIMER_ENABLED',
    payload: setTimerEnabled
  }
};

export function setFullScreen(setFullScreen:boolean) {
  return {
    type: 'SET_FULL_SCREEN',
    payload: setFullScreen
  }
};