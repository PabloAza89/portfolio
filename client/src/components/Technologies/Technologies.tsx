import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import material from '../../images/material.png';
import TechnologiesSX from '../../styles/TechnologiesSX';

function Technologies() {

  return (
    <Box>
      <Box sx={TechnologiesSX().mainBox}>
        {[react,redux,javascript,node,sequelize,material].map((e) => {
          return (
            <Box sx={TechnologiesSX().iconBox}>
              <CardMedia sx={TechnologiesSX().iconMedia(e)}></CardMedia>
            </Box>
          )
        })}
      </Box >
      <Box sx={TechnologiesSX().mainBox}>
        {[ `React`, `Redux`, `Javascript`, `Node.js`, `Sequelize`, `Material UI` ].map((e) => {
          return (
            <Box sx={TechnologiesSX().textBox}>
              <Typography sx={TechnologiesSX().title}>{e}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Technologies;