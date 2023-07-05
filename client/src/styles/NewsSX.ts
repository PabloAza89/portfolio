import {
  flex, relative, column,
  row, aic, jcc, fixed,
  jcsb, jcse, mix, noSelect
} from './CommonsSX';

// LAR (width)    // MIN (width)    //
// 500 total      // 500 total      //
// date text      // date text      //
// 80   420       // 80   420       //
// button (w & h) // button (w & h) //
// 90 30          // 50 23          //

interface backgroundI {
  show: boolean
}

export const background = ({ show }: backgroundI) => { // background
  return {
    ...flex, ...fixed, ...column,
    bottom: '20px',
    left: '20px',
    //background: 'yellow',
    width: '90px',
    //height: 'fit-content',
    //height: '300px',
    height: show ? 'fit-content' : '30px',
    justifyContent: 'end',
  }
}

interface buttonNewsI {
  show: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const buttonNews = ({ show, minPort, minLand, medPort, medLand, larPort, larLand }: buttonNewsI) => { // background
  return {
    ...flex, ...relative,
    minWidth: minPort || minLand ? '50px !important' : '90px !important',
    width: minPort || minLand ? '50px !important' : '90px !important',
    minHeight: minPort || minLand ? '23px !important' : '30px !important',
    height: minPort || minLand ? '23px !important' : '30px !important',
    color: 'darkblue',
    fontSize: minPort || minLand ? '10px' : '14px',
    borderRadius: show ? '0px 0px 4px 4px' : '4px',
    background: 'lightblue',
    ':hover': {
      background: '#91bfcf'
    }
  }
}

export const sliderBox = () => { // background
  return {
    ...flex, ...relative,
    flexDirection : 'column-reverse',
    //background: 'orange',
    width: '500px',
    //height: '300px',
    overflowX: 'hidden',
    overflowY: 'scroll',
  }
}

interface eachDescriptionI {
  scrollWidth: number
}

export const eachDescription = ({ scrollWidth }: eachDescriptionI) => { // background
  return {
    ...flex, ...row, ...relative,
    width: `${500 - scrollWidth}px`,
    height: '24px',
    minHeight: '24px',
    //background: 'gray',
  }
}

interface dateI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const date = ({ minPort, minLand, medPort, medLand, larPort, larLand }: dateI) => { // background
  return {
    ...flex, ...relative, ...jcc, ...noSelect,
    width: '80px',
    minWidth: '80px',
    background: 'lightcoral',
    fontSize: minPort || minLand ? '12px' : '16px',
    //#c97b7b
  }
}

interface textI {
  scrollWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const text = ({ scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand }: textI) => { // background
  return {
    ...flex, ...relative, ...noSelect,
    //width: `400px`,
    width: `${420 - scrollWidth}px`,
    background: 'lightgreen',
    //background: 'gainsboro',
    overflowY: 'hidden',
    overflowX: 'hidden',
    textWrap: 'nowrap',
    fontSize: minPort || minLand ? '12px' : '16px',
  }
}