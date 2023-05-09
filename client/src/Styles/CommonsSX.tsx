import store from '../store/store';

export const noSelect = () => { return {'-webkitTouchCallout': 'none', '-webkitUserSelect': 'none', '-khtmlUserSelect': 'none', '-mozUserSelect': 'none', '-msUserSelect': 'none', '-userSelect': 'none'}}
export const flex = { display: 'flex' }
export const relative = { position: 'relative' }
export const absolute = { position: 'absolute' }
export const fixed = { position: 'fixed' }
export const column = { flexDirection: 'column' }
export const row = { flexDirection: 'row' }
export const aic = { alignItems: 'center' }
export const asc = { alignSelf: 'center' }
export const jcc = { justifyContent: 'center' }
export const jcsb = { justifyContent: 'space-between' }
export const jcse = { justifyContent: 'space-evenly' }
export const jsc = { justifySelf: 'center' }
export const jic = { justifyItems: 'center' }
export const bgNone = { background: 'none' }
export const bgRed = { background: 'Red' }
export const noDeco = { textDecoration: 'none' }
export const staticRefWidth = store.getState().staticRefWidth