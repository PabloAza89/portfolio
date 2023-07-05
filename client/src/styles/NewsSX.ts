import {
  flex, relative, column,
  row, aic, jcc,
  jcsb, jcse, mix, noSelect
} from './CommonsSX';

interface backgroundI {
  show: boolean
}

export const background = ({ show }: backgroundI) => { // background
  return {
    display: 'flex',
    flexDirection: 'column',
    //position: 'absolute',
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    background: 'yellow',
    width: '300px',
    //height: '300px',
    //height: '0px',
    //height: show ? '300px' : '0px',
    height: '300px',
    justifyContent: 'end',
    //overflowX: 'hidden',
    //overflowY: 'auto',
    //zIndex: 20000,
  }
}

export const sliderBox = () => { // background
  return {
    display: 'flex',
    flexDirection : 'column-reverse',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    background: 'orange',
    width: '500px',
    height: '300px',
    //height: '300px',
    overflowX: 'hidden',
    //overflowX: 'scroll',
    overflowY: 'scroll',
    //zIndex: 20000,
  }
}

export const eachDescription = () => { // background
  return {
    display: 'flex',
    flexDirection : 'row',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    width: '480px',
    height: '30px',
    background: 'gray',
    //overflowX: 'scroll',
    //width: '280px',
    //height: '250px',
    //zIndex: 20000,
  }
}

export const date = () => { // background
  return {
    display: 'flex',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    width: '80px',
    minWidth: '80px',
    background: 'darkred',
    
  }
}

interface textI {
  scrollWidth: number
}

export const text = ({ scrollWidth }: textI) => { // background
  return {
    display: 'flex',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    //width: '420px',
    //width: '403px',
    //width: `${420 - scrollWidth}px`,
    width: `400px`,
    //minWidth: '200x',
    background: 'lightgreen',
    overflowY: 'hidden',
    //overflowX: 'scroll',
    overflowX: 'hidden',
    textWrap: 'nowrap',
    //overflow: 'auto',
    //overflow: 'hidden',
  }
}

export const buttonNews = () => { // background
  return {
    display: 'flex',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    width: '300px',
    height: '30px',
    background: 'lightblue',
    //width: '280px',
    //height: '250px',
    //zIndex: 20000,
  }
}
