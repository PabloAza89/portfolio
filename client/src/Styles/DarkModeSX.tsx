import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { absolute, column, flex} from '../styles/CommonsSX';

function DarkModeSX() {

  const location = useLocation()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  const background = () => {
    return {
      // position: 'absolute',
      // right: '0.5vw',
      //       top: '0.5vw',
      // padding: '0px !important',
      // minWidth: '2.1vw !important',
      // 'max-width': '2.1vw !important',
      // 'min-height': '2.1vw !important',
      // 'max-height': '2.1vw !important'
      ...column, ...absolute,
      padding: '0vw !important',
      minWidth: '0vh !important',
      width: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
      height: minPort ? `${maxStaticReference * 5.2}px !important`  : minLand ? `${maxStaticReference * 5.2}px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
      top: minPort ? '4.5vh' : minLand ? '6vh' : '0.9vh',
      right: minPort ? '84.5vw' : minLand ? '88vw' : '0.9vh',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity .1s ease-in-out',
        opacity:
          larPort && location.pathname === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
          larLand && location.pathname === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
          larPort && location.pathname === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
          larLand && location.pathname === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
          '1',
        'active': {
          'opacity': '0',
          'display': 'flex'
        },
    }
  }

  const iconDay = () => {
    return {
      //width: '1.6vw'
      ...flex, ...absolute, ...column,
      minWidth: '0vh',
      width: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` ,
      height: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` 
    }
  }

  const iconNight = () => {
    return {
      //width: '1.6vw'
      ...flex, ...absolute, ...column,
      minWidth: '0vh',
      width: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` ,
      height: minPort ? `${maxStaticReference * 3.7}px !important`  : minLand ? `${maxStaticReference * 3.7}px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` 
    }
  }

    return { background, iconDay, iconNight }
}

export default DarkModeSX

