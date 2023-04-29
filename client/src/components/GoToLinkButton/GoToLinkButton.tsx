import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from '@mui/material';
import GoToLinkButtonSX from '../../styles/GoToLinkButtonSX';

interface AppProps {
  link: string;
}

function GoToLinkButton({link}:AppProps) {


    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="contained"  sx={GoToLinkButtonSX().background}>
            <ReplyIcon sx={GoToLinkButtonSX().icon} />
          </Button>
        </a>
    )
}

export default GoToLinkButton;