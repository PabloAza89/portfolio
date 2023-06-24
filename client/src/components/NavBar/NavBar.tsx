import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NavBarSX';
import '../../styles/ContactSX.css';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

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

  return (
    <Box sx={s.background({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand })}>
      <Box sx={s.mainLeft({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Typography sx={s.lessThan({ minPort, minLand, medPort, medLand, larPort })}>{`<`}</Typography>
        <Typography sx={s.name({ minPort, minLand, medPort, medLand, larPort })}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={s.blink({ minPort, minLand, medPort, medLand, larPort })}>{`I`}</Typography>
        <Typography sx={s.greaterThan({ minPort, minLand, medPort, medLand, larPort })}>{`/>`}</Typography>
      </Box>
      <ScrollContainer style={s.mainRight({ staticRefWidth, percentageResizedWidth, minPort, minLand, medPort, medLand, larPort, larLand })}
        innerRef={useHorizontalScroll()}
      >
        <Link style={s.textItem({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/portfolio/AboutMe"><Box sx={s.item}>{english ? `About Me` : `Acerca De Mi` }</Box></Link>
        <Link style={s.textItem({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/portfolio/Skills"><Box sx={s.item}>{ english ? `Skills` : `Habilidades` }</Box></Link>
        <Link style={s.textItem({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/portfolio/Projects"><Box sx={s.item}>{ english ? `Projects` : `Proyectos` }</Box></Link>
        <Link style={s.textItem({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/portfolio/Certifications"><Box sx={s.item}>{ english ? `Certifications` : `Certificaciones` }</Box></Link>
        <Link style={s.textItem({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand })} to="/portfolio/Contact"><Box sx={s.item}>{ english ? `Contact` : `Contacto` }</Box></Link>
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;