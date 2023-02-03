export function languageChanger(payload) {
  return {
    type: 'LANGUAGE_CHANGER',
    payload: payload
  }
};

export function setWidth(payload) {
  return {
    type: 'SET_WIDTH',
    payload: payload
  }
};

export function setHeight(payload) {
  return {
    type: 'SET_HEIGHT',
    payload: payload
  }
};

export function setMinPort(payload) {
  return {
    type: 'MIN_PORT',
    payload: payload
  }
};

export function setMinLand(payload) {
  return {
    type: 'MIN_LAND',
    payload: payload
  }
};

export function setMedPort(payload) {
  return {
    type: 'MED_PORT',
    payload: payload
  }
};

export function setMedLand(payload) {
  return {
    type: 'MED_LAND',
    payload: payload
  }
};

export function setLarPort(payload) {
  return {
    type: 'LAR_PORT',
    payload: payload
  }
};

export function setLarLand(payload) {
  return {
    type: 'LAR_LAND',
    payload: payload
  }
};

export function setStaticRefWidth(payload) {
  return {
    type: 'STATIC_REF_WIDTH',
    payload: payload
  }
};

export function setStaticRefHeight(payload) {
  return {
    type: 'STATIC_REF_HEIGHT',
    payload: payload
  }
};

export function setMaxStaticReference(payload) {
  return {
    type: 'MAX_STATIC_REFERENCE',
    payload: payload
  }
};

export function setCurrentWidth(payload) {
  return {
    type: 'CURRENT_WIDTH',
    payload: payload
  }
};

export function setCurrentHeight(payload) {
  return {
    type: 'CURRENT_HEIGHT',
    payload: payload
  }
};

export function setPercentageResizedHeight(payload) {
  return {
    type: 'PERCENTAGE_RESIZED_HEIGHT',
    payload: payload
  }
};

export function setPercentageResizedWidth(payload) {
  return {
    type: 'PERCENTAGE_RESIZED_WIDTH',
    payload: payload
  }
};