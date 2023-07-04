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
    width: '300px',
    height: '300px',
    //height: '300px',
    overflowX: 'hidden',
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
    width: '300px',
    height: '30px',
    background: 'gray',
    //width: '280px',
    //height: '250px',
    //zIndex: 20000,
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

export const text = () => { // background
  return {
    display: 'flex',
    //position: 'absolute',
    position: 'relative',
    //bottom: '100px',
    //right: '200px',
    width: '600px',
    minWidth: '600px',
    background: 'lightgreen',
    overflow: 'hidden',
  }
}