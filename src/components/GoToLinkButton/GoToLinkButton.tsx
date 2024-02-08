import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from '@mui/material';
import css from './GoToLinkButtonCSS.module.css';
import { GoToLinkButtonI } from '../../interfaces/interfaces';

function GoToLinkButton({ link }: GoToLinkButtonI) {

  return (
    <a
      className={css.anchor}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="contained"
        className={css.background}
      >
        <ReplyIcon className={css.icon} />
      </Button>
    </a>
  )
}

export default GoToLinkButton;