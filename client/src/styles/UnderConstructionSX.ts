import gear from '../images/gear.png';
import {
  absolute, noSelect, mix, flex,
  column, jcc, relative
} from './CommonsSX';

const background = () => {
  return {
    ...flex, ...column, ...jcc, ...relative,
    top: `10px`, // REVIEW `${staticRefWidth * 0.5}px`
    right: `10px`, // REVIEW
    bottom: `10px`, // REVIEW
    left: `10px`, // REVIEW
    background: 'none',
    //minHeight: '30vh'
    height: '30px' // REVIEW height: '30'
  }
}

interface genI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const textUpperOneLine = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
    ...noSelect, ...absolute, ...mix,
    fontFamily: 'Lucida Console',
    fontSize: minPort ? '7vw' : minLand ? '3vw' : larPort ? '6vw' : '2.1vw',
    color: darkMode ? '#b5b3b3' : 'white',
    fontWeight: 600,
    top: minPort ? '25vh' : minLand ? '25vh' : larPort ? '23vh' : '10vh',
    left: minPort ? '5vw' : minLand ? '5vw' : larPort ? '5vw' : '15vw'
  }
}

const textUpperTwoLines = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
    ...noSelect, ...absolute, ...mix,
    fontFamily: 'Monaco',
    fontSize: minPort ? '2.8vw' : minLand ? '2.8vw' : larPort ? '2.8vw' : '1.5vw',
    color: darkMode ? '#b5b3b3' : 'white',
    fontWeight: 600,
    top: minPort ? '14vh' : minLand ? '14vh' : larPort ? '14vh' : '11vh',
    left: minPort ? '67vw' : minLand ? '69vw' : larPort ? '67vw' : '78vw'
  }
}

const textLowerOneLine = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
      ...noSelect, ...absolute, ...mix,
    fontFamily: 'Verdana',
    fontSize: minPort ? '4vw' : minLand ? '4vw' : larPort ? '4vw' : '1.2vw',
    color: darkMode ? '#5c5b5b' : 'white',
    fontWeight: 400,
    top: minPort ? '88vh' : minLand ? '80vh' : larPort ? '88vh' : '85vh',
    left: minPort ? '30vw' : minLand ? '30vw' : larPort ? '30vw' : '60vw',
  }
}

const gearBig = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
    ...absolute,
    left: minPort ? '3vh' : minLand ? '70vh' : larPort ? '13vh' : '30vh',
    top: minPort ? '47vh' : minLand ? '47vh' : larPort ? '47vh' : '30vh',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${gear})`,
    width: minPort ? '28vh' : minLand ? '28vh' : larPort ? '28vh' : '43vh',
    height: minPort ? '28vh' : minLand ? '28vh' : larPort ? '28vh' : '43vh',
    animation: 'spinRight 5s linear infinite',
    '@keyframes spinRight': {'100%': {transform: 'rotate(360deg)'},'0%': {transform: 'rotate(0deg)'}},
    filter:  darkMode ? 'contrast(280%)' : 'none'
  }
}

const gearMed = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
    ...absolute,
    left: minPort ? '27.5vh' : minLand ? '94.5vh' : larPort ? '37.3vh' : '67.3vh',
    top: minPort ? '45vh' : minLand ? '45vh' : larPort ? '45vh' : '21vh',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${gear})`,
    width: minPort ? '11vh' : minLand ? '11vh' : larPort ? '11vh' : '25vh',
    height: minPort ? '11vh' : minLand ? '11vh' : larPort ? '11vh' : '25vh',
    animation: 'spinLeft 2.5s linear infinite',
    '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}},
    filter:  darkMode ? 'contrast(295%)' : 'none'
  }
}

const gearMin = ({ darkMode, minPort, minLand, larPort }: genI) => {
  return {
    ...absolute,
    left: minPort ? '25vh' : minLand ? '92vh' : larPort ? '35.2vh' : '65.9vh',
    top: minPort ? '70.3vh' : minLand ? '70.3vh' : larPort ? '70.3vh' : '62vh',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${gear})`,
    width: minPort ? '7vh' : minLand ? '7vh' : larPort ? '7vh' : '17vh',
    height: minPort ? '7vh' : minLand ? '7vh' : larPort ? '7vh' : '17vh',
    animation: 'spinLeft 2.5s linear infinite',
    '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}},
    filter:  darkMode ? 'contrast(260%)' : 'none'
  }
}

export {
  background, textUpperOneLine, textUpperTwoLines,
  textLowerOneLine, gearBig, gearMed, gearMin
}