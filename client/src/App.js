import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

import { Box, Button, Link,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<><LandingPage/></>}/>
          {/* <Route path="/" element={<><NavBar/> <PagesLandingPage/></>}/>
          <Route path="/AboutMe" element={<AboutMe/>}/> */}
          {/* <Route path="/Skills" element={<About/>}/>
          <Route path="/Achievements" element={<About/>}/>
          <Route path="/Certifications" element={<About/>}/>
          <Route path="/Contact" element={<About/>}/> */}
        </Routes>
        {/* <Link >About Me</Link>
        <Button variant="text">Skills</Button>
        <Button variant="text">Achievements</Button>
        <Button variant="text">Certifications</Button>
        <Button variant="text">Contact</Button> */}
      </BrowserRouter>
  );
}

export default App;
