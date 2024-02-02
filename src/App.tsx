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
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className={css.background} >
      <div className={css.blackWhite} >
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Home />
            <News />
            <Settings />
          </>}/>
          <Route path="/AboutMe" element={<>
            <AboutMe />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="/Skills" element={<>
            <Skills />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="/Projects" element={<>
            <Projects />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="/Certifications" element={<>
            <Certifications />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="/Contact" element={<>
            <Contact />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="/MessageMe" element={<>
            <MessageMe />
            <BackButton />
            <Settings />
          </>}/>
          <Route path="*" element={<>
            <BackButton />
            <Error />
            <Settings />
          </>}/>
        </Routes>
      </div>
      <div className={css.greyLeft} />
      <div className={css.greyRight} />
      <div className={css.greyTop} />
      <div className={css.greyBottom} />
    </div>
  );
}

export default App;
