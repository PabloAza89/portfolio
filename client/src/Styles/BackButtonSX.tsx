import { useSelector } from 'react-redux';
import { absolute, column, flex} from '../styles/CommonsSX';

function BackButtonSX() {

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) // OJO store.getState().maxStaticReference

  const background = () => {
  return {
    ...column, ...absolute,
    // background: minPort ? 'yellow' : medPort ? 'green' : 'gray', WORKS !
    padding: '0vw !important',
    //minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
    minWidth: '0vh !important',
    width: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
    height: minPort ? `${maxStaticReference * 5.2}px !important`  : minLand ? `${maxStaticReference * 5.2}px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
    top: minPort ? '4.5vh' : minLand ? '6vh' : '5vh',
    left: minPort ? '84.5vw' : minLand ? '88vw' : '6vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
}


 const icon = () => {
  return {
    ...flex, ...absolute, ...column,
    //padding: '0vw 0vw 0vw 0vw !important',
    transform: 'rotate(180deg)',
    //minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
    //minWidth: '0vh !important',
    minWidth: '0vh',
    width: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` ,
    height: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` 
  }
}

  return { background, icon}

}

export default BackButtonSX;