import { Box } from '@mui/material';
import * as s from '../../styles/BubblesSX';
import { useSelector } from 'react-redux';

function Bubbles() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const fullScreen = useSelector((state: {fullScreen:boolean}) => state.fullScreen)

  return (
    <Box component="span" sx={s.background({ fullScreen, darkMode, width, height, minPort, minLand, medPort, medLand, larPort, larLand })}>
      {[  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, // 19
          22.5, 24.5, 12.5, 15.5,28, 20.5, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20, // 16 (28 MIDDLE, 47 TOTAL)
          22, 25, 18, 21, 15, 13, 26, 17, 13, 22.5 , 24.5, 12.5, // 12
      ].map((e, idx) => {
          return (
            <Box key={idx} component="span" style={s.duration({ secs:e })}></Box>
          )
        })
      }
    </Box>
  )
}

export default Bubbles;