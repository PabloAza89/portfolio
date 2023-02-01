import React from 'react';
import { Box } from '@mui/material';

function Bubbles() {
  
     // <Box sx={{...row(),...jc(),...{ justifyItems: 'center', width: '80vw', height: '80vh' , background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}}>

    return (
        <Box component="span" sx={{ 
            display: 'flex', 
            position: 'relative',
            span: { 
                position: 'relative',
                width: '1.5vw',
                height: '1.5vw',
                background: '#4fc3dc',
                margin: '0 0.19vw',
                'border-radius': '50%',
                /* 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc', */
                'box-shadow': '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #4fc3dc, 0 0 4.99vw #4fc3dc',
                animation: `animate 15s linear infinite`,
                '@keyframes animate': {
                    '0%': { transform: 'translateY(100vh) scale(0)' },
                    '100%': { transform: 'translateY(-10vh) scale(1)' }
                }
            },
            'span:nth-child(even)': { 
                background: '#ff2d75', 
                /* 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #ff2d75, 0 0 100px #ff2d75' */
                'box-shadow': '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #ff2d75, 0 0 4.99vw #ff2d75'
            }
        }}>
            <Box component="span" style={{'animation-duration': `calc(125s / 11)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 12)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 24)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 10)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 14)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 23)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 16)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 19)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 20)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 22)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 25)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 21)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 15)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 26)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 17)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 22.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 24.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 12.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 15.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 28)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 20.5)`}}></Box> {/*  */}
            <Box component="span" style={{'animation-duration': `calc(125s / 11)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 12)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 24)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 10)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 14)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 23)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 16)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 19)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 20)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 22)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 25)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 21)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 15)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 26)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 17)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 22.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 24.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 12.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 15.5)`}}></Box>
            <Box component="span" style={{'animation-duration': `calc(125s / 28)`}}></Box>
        </Box>
    )
}

export default Bubbles;