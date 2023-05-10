import { Box } from '@mui/material';
import { background , duration } from '../../styles/BubblesSX';
import { useSelector } from 'react-redux';

function Bubbles() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  return (
    <Box component="span" sx={background( darkMode )}>
      {[  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13,
          22.5, 24.5, 12.5, 15.5, 28, 20.5, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20,
          22, 25, 18, 21, 15, 13, 26, 17, 13, 22.5, 24.5, 12.5, 15.5, 28 // 20.5 MIDDLE
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