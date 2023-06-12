import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row, noDeco,
} from './CommonsSX';

interface backgroundI {
  currentWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const background = ({ currentWidth, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background (DO NOT USE 'POSITION' !)
  return {
    order: minPort || medPort || larPort ? '1' : '0',
    ...asc, ...flex, ...aic,
    //background: 'blue',
    //background: 'inherit',
    //color: 'white',
    overflow: 'auto',
    width: minPort ? '100%' : medPort ? '85%' : minLand || medLand ? '100%' : larPort ? 'calc(100vw - 12px)' : larLand && currentWidth <= 655 ? 'calc(100vw - 67px)' : '100%', // width
    height: minPort ? 'calc(10vw + 4.5vw)' : minLand ? 'calc(4.5vw + 1.8vw)' : medPort ? 'calc(6vw + 3.5vw)' : medLand ? 'calc(5vw + 2vw)' : larPort ? 'calc(55px + 21px)' : 'calc(65px + 24px)',
    //color: '#FFFFFF',
    alignSelf: 'flex-start',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      larPort ? 'space-between' :
      'space-between',
    //mixBlendMode: 'difference',
    //color: 'white',
  }
}

interface iconBoxCopyI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const iconBoxCopy = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxCopyI) => { // iconBox
  return {
    ...flex, ...column, ...relative, /* ...aic,  */...noDeco,
    //justifyContent: 'flex-end',
    //background: 'red',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? 'calc(10vw + 4.5vw)' : minLand ? 'calc(4.5vw + 1.8vw)' : medPort ? 'calc(6vw + 3.5vw)' : medLand ? 'calc(5vw + 2vw)' : larPort ? 'calc(55px + 21px)' : 'calc(65px + 24px)',
    // icon height: minPort ? '10vw' : minLand ? '4.5vw' : medPort ? '6vw' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
    // title height: minPort ? '4.5vw' : minLand ? '1.8vw' : medPort ? '3.5vw' : medLand ? '2vw' : larPort ? '21px' : '24px',

    //color: 'white',
    /* transition: 'all .2s ease-in-out',
    ':hover': { transform: 'scale(1.1)' }, */
    //color: 'white',
    //mixBlendMode: 'difference',
    //zIndex: 1,
    
  }
}

interface iconBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const iconBox = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxI) => { // iconBox
  return {
    ...flex, ...column, ...relative, /* ...aic,  */...noDeco,
    justifyContent: 'flex-end',
    //background: 'yellow',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? 'calc(10vw + 4.5vw)' : minLand ? 'calc(4.5vw + 1.8vw)' : medPort ? 'calc(6vw + 3.5vw)' : medLand ? 'calc(5vw + 2vw)' : larPort ? 'calc(55px + 21px)' : 'calc(65px + 24px)',
    // icon height: minPort ? '10vw' : minLand ? '4.5vw' : medPort ? '6vw' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
    // title height: minPort ? '4.5vw' : minLand ? '1.8vw' : medPort ? '3.5vw' : medLand ? '2vw' : larPort ? '21px' : '24px',

    //color: 'white',
    transition: 'all .2s ease-in-out',
    ':hover': { transform: 'scale(1.1)' },
    //color: 'white',
    mixBlendMode: 'difference',
    
    //zIndex: 1,
  }
}

interface iconMediaI {
  url: string,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

// export const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => { // iconMedia
//   return {
//     ...asc, /* ...relative, */ ...flex,
//     //position: 'absolute',
//     position: 'relative',
//     border: 'none',
//     //overflow: 'inherit',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: `url(${url})`,
//     //background: 'blue',
//     width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
//     height: minPort ? '10vw' : minLand ? '4.5vw' : medPort ? '6vw' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
//     backgroundSize: 'contain',
//     zIndex: 2,
//     //mixBlendMode: 'difference',
//     //backgroundColor: 'inherit',
    
//     //transition: 'all .2s ease-in-out',
//     //':hover': { transform: 'scale(1.1)' },
//     /* ':before': {
//       //content: '',
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       left: 0,
//       top: 0,
//       zIndex: 1,
//       backgroundColor: 'green',
//       mixBlendMode: 'normal'
//     }
//     */
//   }
// }

export const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => { // iconMedia
  return {
    /* ...asc, */ /* ...relative, */ ...flex,
    position: 'absolute',
    /* background: 'red', */
    //position: 'relative',
    //bottom: '-2px',
    //marginTop: minPort ? 'calc(-10vw + -4.5vw)' : minLand ? 'calc(-4.5vw + -1.8vw)' : medPort ? 'calc(-6vw + -3.5vw)' : medLand ? 'calc(-5vw + -2vw)' : larPort ? 'calc(-55px + -21px)' : 'calc(-65px + -24px)',
    //overflow: 'inherit',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    //background: 'blue',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '10vw' : minLand ? '4.5vw' : medPort ? '6vw' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
    backgroundSize: 'contain',
    zIndex: 2,
    transition: 'all .2s ease-in-out',
    ':hover': { transform: 'scale(1.1)' },
    
    //mixBlendMode: 'difference',
    //backgroundColor: 'inherit',
    
    //transition: 'all .2s ease-in-out',
    //':hover': { transform: 'scale(1.1)' },
    /* ':before': {
      //content: '',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      backgroundColor: 'green',
      mixBlendMode: 'normal'
    }
    */
  }
}

interface titleI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const title = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: titleI) => { // title
  return {
    ...noSelect, ...flex, ...relative,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '14px' : '16px', // fontSize
    //color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontWeight: 600,
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '4.5vw' : minLand ? '1.8vw' : medPort ? '3.5vw' : medLand ? '2vw' : larPort ? '21px' : '24px',
    //background: 'red',
    justifyContent: 'center',
    //background: 'red',
    //mixBlendMode: 'difference',
    //color: 'white',
    //transition: 'all .2s ease-in-out',
    //':hover': { /* transform: 'scale(1.1)',  */mixBlendMode: 'difference' },
    //':hover': { mixBlendMode: 'difference' },
    color: 'white',
    
    //mixBlendMode: 'difference',
    //':hover': { color: 'white', transform: 'scale(1.1)', mixBlendMode: 'difference', },
    
  }
}