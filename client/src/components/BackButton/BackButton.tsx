import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { Button } from '@mui/material';
import * as s from '../../styles/BackButtonSX';

function BackButton() {

  const location = useLocation()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  return (
    <Link style={{ textDecoration: 'none' }} to="/">
      <Button variant="contained"  sx={s.background({ minPort, minLand, medPort, medLand, larPort, larLand, location:location.pathname })}>
        <ForwardIcon sx={s.icon({ minPort, minLand, medPort, medLand, larPort })}/>
      </Button>
    </Link>
  )
}

export default BackButton;
