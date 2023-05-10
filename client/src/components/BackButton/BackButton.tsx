import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { Button } from '@mui/material';
import { background, icon } from '../../styles/BackButtonSX';

function BackButton() {

  const location = useLocation()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button variant="contained"  sx={background({ minPort, minLand, medPort, medLand, larPort, larLand, maxStaticReference, location:location.pathname, percentageResizedHeight })}>
        <ForwardIcon sx={icon({ minPort, minLand, medPort, medLand, larPort, maxStaticReference })}/>
      </Button>
    </Link>
  )
}

export default BackButton;
