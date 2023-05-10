import { Box, Typography/* , Link  */} from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import { 
  background, mainLeft, lessThan, name,
  blink, greaterThan, scroll, textItem
} from '../../styles/NavBarSX';

function NavBar() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const MedPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const MedLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
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
    <Box sx={background({ staticRefWidth, minPort, minLand, larPort })}>
      <Box sx={mainLeft({ staticRefWidth, minPort, minLand, larPort })}>
        <Typography sx={lessThan({ minPort, minLand, larPort })}>{`<`}</Typography>
        <Typography sx={name({ minPort, minLand, larPort })}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={blink({ minPort, minLand, larPort })}>{`I`}</Typography>
        <Typography sx={greaterThan({ minPort, minLand, larPort })}>{`/>`}</Typography>
      </Box>
      <ScrollContainer style={scroll({ staticRefWidth, percentageResizedWidth, minPort, minLand, larPort, larLand })}
        innerRef={useHorizontalScroll()}
      >
        <Link style={textItem({ staticRefWidth, darkMode, minPort, minLand, larPort })} to="/portfolio/AboutMe">{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={textItem({ staticRefWidth, darkMode, minPort, minLand, larPort })} to="/portfolio/Skills">{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={textItem({ staticRefWidth, darkMode, minPort, minLand, larPort })} to="/portfolio/Projects">{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={textItem({ staticRefWidth, darkMode, minPort, minLand, larPort })} to="/portfolio/Certifications">{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={textItem({ staticRefWidth, darkMode, minPort, minLand, larPort })} to="/portfolio/Contact">{ english ? `Contact` : `Contacto` }</Link>
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;