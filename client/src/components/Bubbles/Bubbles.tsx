import { Box } from '@mui/material';
import BubblesSX from '../../styles/BubblesSX';

function Bubbles() {

  return (
    <Box component="span" sx={BubblesSX().background}>
      {[  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13,
          22.5, 24.5, 12.5, 15.5, 28, 20.5, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20,
          22, 25, 18, 21, 15, 13, 26, 17, 13, 22.5, 24.5, 12.5, 15.5, 28 // 20.5 MIDDLE
      ].map((e) => {
          return (
            <Box component="span" style={BubblesSX().duration(e)}></Box>
          )
        })
      }
    </Box>
  )
}

export default Bubbles;