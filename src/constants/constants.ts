const production = {
  TARGET_STYLESHEET: 'pabloaza89.github.io',
  FETCH: 'https://oval-transparent-ornament.glitch.me/'
}

const development = {
  TARGET_STYLESHEET: 'null',
  FETCH: 'http://localhost:3001/'
}

export const config = process.env.NODE_ENV === 'development' ? development : production;