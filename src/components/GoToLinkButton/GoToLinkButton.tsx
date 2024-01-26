import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from '@mui/material';
import css from './GoToLinkButtonCSS.module.css';

interface GoToLinkButtonI {
  link: string
}

function GoToLinkButton({ link }: GoToLinkButtonI) {

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        //id={`linkButton`}
        variant="contained"
        className={css.background}
      >
        <ReplyIcon className={css.icon} />
      </Button>
    </a>
  )
}

export default GoToLinkButton;