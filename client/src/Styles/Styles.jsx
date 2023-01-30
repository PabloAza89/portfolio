import {useState, useEffect} from 'react';

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

export function prtr() {
    const orientation = window.screen.orientation.type
    return orientation === "portrait-primary"
    // portrait-primary
    // landscape-primary
}

export function or() {
    const orientation = window.screen.orientation.type
    return orientation

}

export function wi() {
    const widthh = window.innerWidth
    return widthh
}

export function he() {
    const height = window.innerHeight
    return height
}

export function CelPort() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    return width < 415 && window.screen.orientation.type === "portrait-primary"
}

export function CelLand() {

    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResizeWindow = () => setHeight(window.innerHeight);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    return height < 415 &&window.screen.orientation.type === "landscape-primary"
}



