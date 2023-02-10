export function languageChanger(languageChanger:boolean) {
  return {
    type: 'LANGUAGE_CHANGER',
    payload: languageChanger
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

export function setStaticRefWidth(setStaticRefWidth:number) {
  return {
    type: 'STATIC_REF_WIDTH',
    payload: setStaticRefWidth
  }
};

export function setStaticRefHeight(setStaticRefHeight:number) {
  return {
    type: 'STATIC_REF_HEIGHT',
    payload: setStaticRefHeight
  }
};

export function setMaxStaticReference(setMaxStaticReference:number) {
  return {
    type: 'MAX_STATIC_REFERENCE',
    payload: setMaxStaticReference
  }
};

export function setMinStaticReference(setMinStaticReference:number) {
  return {
    type: 'MIN_STATIC_REFERENCE',
    payload: setMinStaticReference
  }
};

export function setCurrentWidth(setCurrentWidth:number) {
  return {
    type: 'CURRENT_WIDTH',
    payload: setCurrentWidth
  }
};

export function setCurrentHeight(setCurrentHeight:number) {
  return {
    type: 'CURRENT_HEIGHT',
    payload: setCurrentHeight
  }
};

export function setPercentageResizedHeight(setPercentageResizedHeight:number) {
  return {
    type: 'PERCENTAGE_RESIZED_HEIGHT',
    payload: setPercentageResizedHeight
  }
};

export function setPercentageResizedWidth(setPercentageResizedWidth:number) {
  return {
    type: 'PERCENTAGE_RESIZED_WIDTH',
    payload: setPercentageResizedWidth
  }
};

export function setMinRatioReference(setMinRatioReference:number) {
  return {
    type: 'SET_MIN_RATIO_REFERENCE',
    payload: setMinRatioReference
  }
};