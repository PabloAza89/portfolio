import ReplyIcon from '@mui/icons-material/Reply';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import GoToLinkButtonSX from '../../styles/GoToLinkButtonSX';

interface AppProps {
  link: string;
}

function GoToLinkButton({link}:AppProps) {

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="contained"  sx={GoToLinkButtonSX().background}>
            <ReplyIcon sx={GoToLinkButtonSX().icon} />
          </Button>
        </a>
    )
}

export default GoToLinkButton;