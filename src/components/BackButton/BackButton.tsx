import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { Button } from '@mui/material';
import css from './BackButtonCSS.module.css';

function BackButton() {
  return (
    <Link className={css.background} style={{ textDecoration: 'none' }} to="/">
      <Button variant="contained" className={css.button}>
        <ForwardIcon className={css.icon}/>
      </Button>
    </Link>
  )
}

export default BackButton;