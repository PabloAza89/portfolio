export function row() {
    return {display: 'flex', flexDirection: 'row', position: 'relative'}
}

export function column() {
    return {display: 'flex', flexDirection: 'column', position: 'relative'}
}

export function jc() {
    return {justifyContent: 'center'}
}

export function as() {
    return {alignSelf: 'center'}
}

export function noSelect() {
    return {'-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none'}
}