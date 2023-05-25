import { Box, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import javascript from '../../images/javascript.png';
import material from '../../images/material.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import { 
  mainBox, iconBox, iconMedia, textBox,
  title, background
} from '../../styles/TechnologiesSX';

function Technologies() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

  return (
    <Box sx={background}>
      <Box sx={mainBox}>
        {[react,redux,javascript,node,sequelize,material].map((e) => {
          return (
            <Box key={e} sx={iconBox({ minPort, minLand, larPort })}>
              <CardMedia component="div" sx={iconMedia({ url:e, minPort, minLand, larPort })}></CardMedia>
            </Box>
          )
        })}
      </Box >
      <Box sx={mainBox}>
        {[ `React`, `Redux`, `Javascript`, `Node.js`, `Sequelize`, `Material UI` ].map((e) => {
          return (
            <Box key={e} sx={textBox({ minPort, minLand, larPort })}>
              <Typography sx={title({ darkMode, minPort, minLand, larPort })}>{e}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Technologies;