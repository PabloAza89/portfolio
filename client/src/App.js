/* import './App.css'; */
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Language from './components/Language/Language';

import { Box, Button, Link,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { grey , blue } from '@mui/material/colors';


function App() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', backgroundColor: grey[400]}} >
      
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', flexDirection: 'column', margin: '1.5vw',  background: 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'}} >

          
            <BrowserRouter>
              <Routes>

                <Route path="/portfolio" element={<>
                  
                  <NavBar />
                  
                  
                  <Home/>
                  
                  
                    <Language />
                  
                </>}/>

                <Route path="/portfolio/AboutMe" element={<>
                  <Box>
                    <AboutMe />
                  </Box>
                  <Box sx={{display: 'grid'/* , position: 'relative' */}} >
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Skills" element={<><Skills/></>}/>
                <Route path="/portfolio/Projects" element={<>
                  <Box>
                    <Projects />
                  </Box>
                  <Box sx={{display: 'grid'/* , position: 'relative' */}} >
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Certifications" element={<>
                  <Box>
                    <Certifications />
                  </Box>
                  <Box sx={{display: 'grid'}}>
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Contact" element={<><Contact /></>}/>
              </Routes>
            </BrowserRouter>
          
        </Box>      
    </Box>
  );
}

export default App;
