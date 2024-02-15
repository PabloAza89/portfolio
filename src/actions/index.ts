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