import AboutMe from './components/AboutMe/AboutMe';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import BackButton from './components/BackButton/BackButton';
import MessageMe from './components/MessageMe/MessageMe';
import News from './components/News/News';
import css from './AppCSS.module.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={css.background}>
      <div className={css.blackWhite}>
        <Settings />
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Home />
            <News />
          </>}/>
          <Route path="/AboutMe" element={<>
            <AboutMe />
            <BackButton />
          </>}/>
          <Route path="/Skills" element={<>
            <Skills />
            <BackButton />
          </>}/>
          <Route path="/Projects" element={<>
            <Projects />
            <BackButton />
          </>}/>
          <Route path="/Certifications" element={<>
            <Certifications />
            <BackButton />
          </>}/>
          <Route path="/Contact" element={<>
            <Contact />
            <BackButton />
          </>}/>
          <Route path="/MessageMe" element={<>
            <MessageMe />
            <BackButton />
          </>}/>
          <Route path="*" element={<>
            <BackButton />
            <Error />
          </>}/>
        </Routes>
      </div>
      <div className={`${css.grey} ${css.leftRight} ${css.left}`} />
      <div className={`${css.grey} ${css.leftRight} ${css.right}`} />
      <div className={`${css.grey} ${css.topBottom} ${css.top}`} />
      <div className={`${css.grey} ${css.topBottom} ${css.bottom}`} />
    </div>
  );
}

export default App;
