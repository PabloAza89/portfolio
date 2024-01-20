/* import { div } from '@mui/material'; */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
/* import * as s from './NavBarSX'; */
import css from './NavBarCSS.module.css';
//import css from '../../styles/NavBarCSS.module.css';
//import '../../styles/NavBarCSS.css';
//import '../../styles/ContactSX.css';
import $ from 'jquery';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  function useHorizontalScroll() {
    const elRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 4,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel, {
          passive: true
        });
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  return (
    <div className={css.background}>
      <div className={css.background2}>
        <div className={css.mainLeft}>
          <div className={css.lessThan}>{`<`}</div>
          <div className={css.name}>{`Pablo Azambuyo`}</div>
          <div className={css.blink}>{`I`}</div>
          <div className={css.greaterThan}>{`/>`}</div>
        </div>
        <ScrollContainer className={css.mainRight}
          innerRef={useHorizontalScroll()}
        >
          <Link className={css.text} to="/AboutMe">{english ? `About Me` : `Acerca De Mi` }</Link>
          <Link className={css.text} to="/Skills">{ english ? `Skills` : `Habilidades` }</Link>
          <Link className={css.text} to="/Projects">{ english ? `Projects` : `Proyectos` }</Link>
          <Link className={css.text} to="/Certifications">{ english ? `Certifications` : `Certificaciones` }</Link>
          <Link className={css.text} to="/Contact">{ english ? `Contact` : `Contacto` }</Link>
        </ScrollContainer>
      </div>
      <div id={`testTest2`} style={{ pointerEvents: 'none', display: 'flex', bottom: '0px', position: 'absolute', width: '100%', height: '100%', mixBlendMode: 'difference', zIndex: '2' }}></div>
    </div>
  )
}

export default NavBar;