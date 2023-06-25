import { useEffect } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import DarkMode from './components/DarkMode/DarkMode';
import Home from './components/Home/Home';
import Language from './components/Language/Language';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import BackButton from './components/BackButton/BackButton';
import MessageMe from './components/MessageMe/MessageMe';
import * as s from './styles/AppSX';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentHeight, setCurrentWidth, setHeight, setLarLand,
  setLarPort, setMaxStaticReference, setMedLand, setMedPort,
  setMinLand, setMinPort, setMinRatioReference, setMinStaticReference,
  setPercentageResizedHeight, setPercentageResizedWidth,
  setStaticRefHeight, setStaticRefWidth, setWidth, setFullScreen
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
      dispatch(setStaticRefWidth(window.screen.width / 100))
      dispatch(setStaticRefHeight(window.screen.height / 100))
      dispatch(setMaxStaticReference((window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
      dispatch(setMinStaticReference(( window.screen.width <= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setCurrentHeight(window.innerHeight))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setPercentageResizedWidth(window.innerWidth / window.screen.width))
      dispatch(setMinRatioReference(window.innerWidth / window.screen.width <= window.innerHeight / window.screen.height  ? (window.innerWidth / window.screen.width) / (window.innerHeight / window.screen.height) : (window.innerHeight / window.screen.height) / (window.innerWidth / window.screen.width)))
      dispatch(setFullScreen(window.screen.width === window.innerWidth && window.screen.height === window.innerHeight ? true : false))
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  return (
    <Box sx={s.background({ darkMode })} >
      <Box sx={s.blackWhite({ staticRefWidth, darkMode, location:location.pathname })} >
        <Routes>
          <Route path="/portfolio" element={<>
            <NavBar />
            <DarkMode />
            <Home />
            <Language />
            <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
          </>}/>
          <Route path="/portfolio/AboutMe" element={<>
            <AboutMe />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/portfolio/Skills" element={<>
            <Skills />
            <BackButton />
            <Language />
            <DarkMode />
          </>}/>
          <Route path="/portfolio/Projects" element={<>
            <Projects />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/portfolio/Certifications" element={<>
            <Certifications />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/portfolio/Contact" element={<>
            <Contact />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
          <Route path="/portfolio/MessageMe" element={<>
            <MessageMe />
            <BackButton />
            <DarkMode />
            <Language />
          </>}/>
        </Routes>
      </Box>
      <Box sx={s.greyBottom({ darkMode })} />
      <Box sx={s.greyRight({ darkMode })} />
    </Box>
  );
}

export default App;
