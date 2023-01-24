/* import './App.css'; */
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import { Box, Button, Link,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { grey , blue } from '@mui/material/colors';


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', backgroundColor: grey[400]}} >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh'  , margin: '1.5vw',background: 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'}} >

          {/* <Box sx={{ background: 'inherit' , display: 'flex', position: 'fixed' , flexDirection: 'column', width: '97vw', backgroundColor:'none', height: '94vh' }}> */}
            <BrowserRouter>
              <Routes>

                <Route path="/" element={<>
                  <Box sx={{display: 'flex' , flexDirection: 'column', justify: 'right', marginRight: '0.5vw', marginTop: '0.5vw' }}>
                    <NavBar />
                  </Box>
                  <Box >
                    <Home/>
                  </Box>



                </>}/>


                <Route path="/AboutMe" element={<><AboutMe/></>}/>
                <Route path="/Skills" element={<><Skills/></>}/>
                <Route path="/Achievements" element={<><Achievements/></>}/>
                <Route path="/Certifications" element={<><Certifications/></>}/>
                <Route path="/Contact" element={<><Contact/></>}/>
              </Routes>
            </BrowserRouter>
          {/* </Box> */}
      </Box>
    </Box>
  );
}

export default App;
