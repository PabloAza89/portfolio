const production = {
  TARGET_STYLESHEET: 'pabloaza89.github.io',
}

const development = {
  TARGET_STYLESHEET: 'null'
}

export const config = process.env.NODE_ENV === 'development' ? development : production;