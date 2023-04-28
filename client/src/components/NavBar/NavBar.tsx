import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import NavBarSX from '../../styles/NavBarSX';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)

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
    }, [/* scrollSpeed */]);
    return elRef;
  }

  return (
    <Box sx={NavBarSX().background}>
      <Box sx={NavBarSX().mainLeft}>
        <Typography sx={NavBarSX().lessThan}>{`<`}</Typography>
        <Typography sx={NavBarSX().name}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={NavBarSX().blink}>{`I`}</Typography>
        <Typography sx={NavBarSX().greaterThan}>{`/>`}</Typography>
      </Box>
      <ScrollContainer style={NavBarSX().scroll()}
        innerRef={useHorizontalScroll()}
      >
        <Link style={NavBarSX().textItem()} to="/portfolio/AboutMe">{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={NavBarSX().textItem()} to="/portfolio/Skills">{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={NavBarSX().textItem()} to="/portfolio/Projects">{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={NavBarSX().textItem()} to="/portfolio/Certifications">{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={NavBarSX().textItem()} to="/portfolio/Contact">{ english ? `Contact` : `Contacto` }</Link>
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;