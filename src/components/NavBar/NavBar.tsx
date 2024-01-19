import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import * as s from './NavBarSX';
//import css from '../../styles/NavBarCSS.module.css';
//import '../../styles/NavBarCSS.css';
//import '../../styles/ContactSX.css';
import $ from 'jquery';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

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
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  // MED HEIGHT 10 + 70
  // LAR HEIGHT 10 + 87

  useEffect(() => {
    let qq = document.getElementById("testTest1")
    if (qq) console.log("QQ", qq.scrollTop)
  })

  let qq = document.getElementById("testTest1")
    //if (qq) console.log("QQ", qq.scrollTop)

  if (qq !== null) window.addEventListener("scroll", () => {
    //if (qq) console.log("QQ", qq.scrollTop)
    console.log("QQ", $("#testTest1").scrollTop())
  })

  // useEffect(() => {
  //   console.log("QQ", $("#testTest1").scrollTop())
  // })

  return (
    <Box sx={s.background({ minPort, minLand, medPort, medLand, larPort, larLand })}>
      <Box style={{ /* zIndex: '0', */ /* mixBlendMode: 'difference' */ }}/* id={`testTest2`} */ /* sx={s.background({ minPort, minLand, medPort, medLand, larPort, larLand })} */>
        <Box sx={s.mainLeft({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Typography sx={s.lessThan({ minPort, minLand, medPort, medLand, larPort })}>{`<`}</Typography>
          <Typography sx={s.name({ minPort, minLand, medPort, medLand, larPort })}>{`Pablo Azambuyo`}</Typography>
          <Typography sx={s.blink({ minPort, minLand, medPort, medLand, larPort })}>{`I`}</Typography>
          <Typography sx={s.greaterThan({ minPort, minLand, medPort, medLand, larPort })}>{`/>`}</Typography>
        </Box>
        <ScrollContainer style={s.mainRight({ minPort, minLand, medPort, medLand, larPort, larLand })}
          innerRef={useHorizontalScroll()}
        >
          <Link style={s.textItem({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/AboutMe"><Box sx={s.item}>{english ? `About Me` : `Acerca De Mi` }</Box></Link>
          <Link style={s.textItem({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/Skills"><Box sx={s.item}>{ english ? `Skills` : `Habilidades` }</Box></Link>
          <Link style={s.textItem({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/Projects"><Box sx={s.item}>{ english ? `Projects` : `Proyectos` }</Box></Link>
          <Link style={s.textItem({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/Certifications"><Box sx={s.item}>{ english ? `Certifications` : `Certificaciones` }</Box></Link>
          <Link style={s.textItem({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/Contact"><Box sx={s.item}>{ english ? `Contact` : `Contacto` }</Box></Link>
        </ScrollContainer>
      </Box>
      <div id={`testTest2`} style={{ pointerEvents: 'none', display: 'flex', bottom: '0px', position: 'absolute', width: '100%', height: '100%', /* background: 'yellow', */ mixBlendMode: 'difference', zIndex: '2' }}></div>
    </Box>
  )
}

export default NavBar;