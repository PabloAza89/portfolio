import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setDarkMode } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeSX from '../../styles/DarkModeSX';

function DarkMode() {

  const dispatch = useDispatch()
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button onClick={(e) => {e.preventDefault(); dispatch(setDarkMode(!darkMode))}} variant="contained" sx={DarkModeSX().background}>
        {darkMode ? <DarkModeIcon sx={DarkModeSX().iconNight}/> : <WbSunnyIcon sx={DarkModeSX().iconDay}/>}
      </Button>
    </Link>
  )
}

export default DarkMode;
