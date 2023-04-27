import { 
 bgRed,flex, column, row, bgNone, absolute
} from '../styles/CommonsSX';
import store from '../store/store'
import { useSelector } from 'react-redux';
//import { /* MinPort, */ MinLand(), MedPort(), MedLand(), LarPort(), larLand,
  //MaxStaticReference()
//} from '../resizeController/Set';
// console.log("DEF", MaxStaticReference())
// console.log("HDP", MinPort())

//const MaxStaticReference = () => { return useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) }


export const background = () => {
  return {
    ...column, ...absolute,
    // background: MinPort() ? 'yellow' : MedPort() ? 'green' : 'gray', WORKS !
    padding: '0vw !important',
    //minWidth: MinPort() ? '0vh !important' : MinLand() ? '0vh !important' : MedPort() ? '0vh !important' : MedLand() ? '0vh !important' : LarPort() ? '0vh !important' : '0vh !important',
    minWidth: '0vh !important',
    width: MinPort() ? `${MaxStaticReference() * 5.2}px !important` : MinLand() ? `${MaxStaticReference() * 5.2}px !important`  : MedPort() ? `${MaxStaticReference() * 4.2}px !important`  : MedLand() ? `${MaxStaticReference() * 4.2}px !important`  : LarPort() ? `${MaxStaticReference() * 2.1}px !important`  : `${MaxStaticReference() * 2.1}px !important` ,
    height: MinPort() ? `${MaxStaticReference() * 5.2}px !important`  : MinLand() ? `${MaxStaticReference() * 5.2}px !important`  : MedPort() ? `${MaxStaticReference() * 4.2}px !important`  : MedLand() ? `${MaxStaticReference() * 4.2}px !important`  : LarPort() ? `${MaxStaticReference() * 2.1}px !important`  : `${MaxStaticReference() * 2.1}px !important` ,
    top: MinPort() ? '4.5vh' : MinLand() ? '6vh' : '5vh',
    left: MinPort() ? '84.5vw' : MinLand() ? '88vw' : '6vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
}


export const icon = () => {
  return {
    ...flex, ...absolute, ...column,
    //padding: '0vw 0vw 0vw 0vw !important',
    transform: 'rotate(180deg)',
    //minWidth: MinPort() ? '0vh !important' : MinLand() ? '0vh !important' : MedPort() ? '0vh !important' : MedLand() ? '0vh !important' : LarPort() ? '0vh !important' : '0vh !important',
    //minWidth: '0vh !important',
    minWidth: '0vh',
    width: MinPort() ? `${MaxStaticReference() * 3.7}px !important`  : MinLand() ? `${MaxStaticReference() * 3.7}px !important`  : MedPort() ? `${MaxStaticReference() * 2.1}px !important`  : MedLand() ? `${MaxStaticReference() * 2.1}px !important`  : LarPort() ? `${MaxStaticReference() * 1.3}px !important`  : `${MaxStaticReference() * 1.3}px !important` ,
    height: MinPort() ? `${MaxStaticReference() * 3.7}px !important`  : MinLand() ? `${MaxStaticReference() * 3.7}px !important`  : MedPort() ? `${MaxStaticReference() * 2.1}px !important`  : MedLand() ? `${MaxStaticReference() * 2.1}px !important`  : LarPort() ? `${MaxStaticReference() * 1.3}px !important`  : `${MaxStaticReference() * 1.3}px !important` 
  }
}

/* export { background , icon} */