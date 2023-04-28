import ForwardIcon from '@mui/icons-material/Forward';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import BackButtonSX from '../../styles/BackButtonSX';

function BackButton() {

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button variant="contained"  sx={BackButtonSX().background}>
        <ForwardIcon sx={BackButtonSX().icon}/>
      </Button>
    </Link>
  )
}

export default BackButton;
