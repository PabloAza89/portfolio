import React, { useEffect} from 'react';
import { Box, Typography, TextareaAutosize} from '@mui/material';
import { Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import NavBarSX from '../../styles/NavBarSX';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
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
        <Link style={NavBarSX().AboutMe()} to="/portfolio/AboutMe">{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={NavBarSX().Skills()} to="/portfolio/Skills">{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={NavBarSX().Projects()} to="/portfolio/Projects">{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={NavBarSX().Certifications()} to="/portfolio/Certifications">{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={NavBarSX().Contact()} to="/portfolio/Contact">{ english ? `Contact` : `Contacto` }</Link>
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;