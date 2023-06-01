import { Box } from '@mui/material';
import { 
  background , duration
} from '../../styles/BubblesSX';
import { useSelector } from 'react-redux';

function Bubbles() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)

  console.log("A VER", height)

  return (
    <Box component="span" sx={background({ darkMode, width, height })}>
      {[  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13,
          22.5, 24.5, 12.5, 15.5, 28, 20.5, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20,
          22, 25, 18, 21, 15, 13, 26, 17, 13, 22.5, 24.5, 12.5, /* 15.5, 21.5, 23.5, */ /* 16.5, 18.5 */ // 20.5 MIDDLE
      ].map((e, idx) => {
          return (
            <Box key={idx} component="span" style={duration({ secs:e })}></Box>
          )
        })
      }
    </Box>
  )
}

export default Bubbles;