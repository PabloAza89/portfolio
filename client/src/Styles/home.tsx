import { useSelector } from 'react-redux';

import {
  minPort, minLand, MMinLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
  bgRed, noSelect,
  relative, jcc, asc,
  percentageResizedHeight, percentageResizedWidth
} from './commons';

console.log("LA VERGA", minPort, minLand, medPort, medLand, larPort, larLand)



const background = Object.assign(
  {},
  flex, relative, jcc,
  {
    background: 'none',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
  },
)

const bgLeft = Object.assign(
  {},
  relative,
  {
    background: 'none',
    justifyContent: medPort ? 'space-evenly' : 'center',
    display: minPort || minLand ? 'contents' : 'flex',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'column',
    width: minPort ? '97vw' : minLand ? '97vw' : '50vw',
    height: minPort ? '40vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
  },
)

const bgLeftUpper = Object.assign(
  {},
  relative, flex, column, jcc, asc,
  {
    background:'none',
    border: 'none',
    height: minPort ? '50vh' : minLand ? '55vh' : larPort ? '28vh' : '35vh',
    width: minPort ? '90vw' : minLand ? '45vw' : larPort ? '40vw' : '40vw'
  },
)

const bgLeftUpperTextOne = Object.assign(
  {},
  noSelect(),
  {
    color:'#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '5.0vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.7}px` : '6.9vh',
    mixBlendMode: 'difference'
  },
)

const bgLeftUpperTextTwo = Object.assign(
  {},
  noSelect(),
  {
    color:'#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '5.2vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.75}px` : '7.2vh',
    mixBlendMode: 'difference',
    'inline-size': 'max-content'
  },
)

const bgLeftUpperTextThree = Object.assign(
  {},
  noSelect(),
  {
    color:'#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '3.8vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.1}px` : '4.5vh',
    mixBlendMode: 'difference'
  },
)

const bgLeftLower = Object.assign(
  {},
  jcc, relative, column, asc,
  {
    background: 'nonew',
    left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw',
    display: larPort ? 'none' : larLand && percentageResizedHeight < 0.381 ? 'none' : 'flex',
    height: minPort ? '11vh' : minLand ? '8vh' : '11vh',
    width: minPort ? '97vw' : minLand ? '50vw' : larPort ? '48vw' : '40vw'
  },
)

const minLandRightLower = Object.assign(
  {},
  jcc,
  {
    background: 'red',
    display: minLand ? 'flex' : 'none',
    justifyContent: 'center'
  },
)


export {
  background, bgLeft, bgLeftUpper, bgLeftUpperTextOne, bgLeftUpperTextTwo, bgLeftUpperTextThree,
  bgLeftLower, minLandRightLower
 }