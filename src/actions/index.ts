export function languageChanger(languageChanger:boolean) {
  return {
    type: 'LANGUAGE_CHANGER',
    payload: languageChanger
  }
};

export function setDataTheme(value:any) {
  return {
    type: 'SET_DATA_THEME',
    payload: value
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