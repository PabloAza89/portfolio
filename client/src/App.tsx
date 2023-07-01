import { useEffect } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import DarkMode from './components/DarkMode/DarkMode';
import Home from './components/Home/Home';
import Language from './components/Language/Language';
import Error from './components/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import BackButton from './components/BackButton/BackButton';
import MessageMe from './components/MessageMe/MessageMe';
import * as s from './styles/AppSX';
import { Box } from '@mui/material';
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentWidth, setHeight, setLarLand,
  setLarPort, setMedLand, setMedPort, setMinLand,
  setMinPort, setPercentageResizedHeight, setWidth, setFullScreen
} from './actions';

function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    function handleResize() {
      dispatch(setWidth(window.screen.width))
      dispatch(setHeight(window.screen.height))
      dispatch(setMinPort(window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMinLand(window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedPort(window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedLand(window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarPort(window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarLand(window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setFullScreen(window.screen.width === window.innerWidth && window.screen.height === window.innerHeight ? true : false))
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

  return (
    <Box sx={s.background({ darkMode })} >
      <Box sx={s.blackWhite({ darkMode, location:location.pathname })} >
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <DarkMode />
            <Home />
            <Language />
            <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort })}></Box>
          </>}/>
          <Route path="/AboutMe" element={<>
            <AboutMe />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/Skills" element={<>
            <Skills />
            <BackButton />
            <Language />
            <DarkMode />
          </>}/>
          <Route path="/Projects" element={<>
            <Projects />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/Certifications" element={<>
            <Certifications />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/Contact" element={<>
            <Contact />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/MessageMe" element={<>
            <MessageMe />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/Error" element={<>
            <BackButton />
            <Error />
          </>}/>
          <Route path="*" element={<>
            <Navigate to="/Error" replace />
          </>}/>
        </Routes>
      </Box>
      <Box sx={s.greyBottom({ darkMode })} />
      <Box sx={s.greyRight({ darkMode })} />
    </Box>
  );
}

export default App;
