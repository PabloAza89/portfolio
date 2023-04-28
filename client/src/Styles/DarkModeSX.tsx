import { useSelector } from 'react-redux';

function DarkModeSX() {


  const background = () => {
    return {
      //position: currentWidth < 415 ? 'absolute' : 'null',
      position: 'absolute',
      right: '0.5vw',
      //top: currentWidth < 415 ? '2vh' : null,
      top: '0.5vw',
      padding: '0px !important',
      minWidth: '2.1vw !important',
      'max-width': '2.1vw !important',
      'min-height': '2.1vw !important',
      'max-height': '2.1vw !important'
    }
  }

  const iconDay = () => {
    return {
      width: '1.6vw'
    }
  }

  const iconNight = () => {
    return {
      width: '1.6vw'
    }
  }

    return { background, iconDay, iconNight }
}

export default DarkModeSX

