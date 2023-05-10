import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { setDarkMode } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { background, iconDay, iconNight } from '../../styles/DarkModeSX';

function DarkMode() {

  const location = useLocation()
  const dispatch = useDispatch()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button onClick={(e) => {e.preventDefault(); dispatch(setDarkMode(!darkMode))}} variant="contained" sx={background({ minPort, minLand, medPort, medLand, larPort, larLand, maxStaticReference, location:location.pathname, percentageResizedHeight })}>
        { darkMode ? <WbSunnyIcon sx={iconDay({ minPort, minLand, medPort, medLand, larPort, maxStaticReference })}/> : <DarkModeIcon sx={iconNight({ minPort, minLand, medPort, medLand, larPort, maxStaticReference })}/> }
      </Button>
    </Link>
  )
}

export default DarkMode;
