import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import * as s from '../../styles/GoToLinkButtonSX';

interface GoToLinkButtonI {
  link: string
}

function GoToLinkButton({ link }: GoToLinkButtonI) {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="contained"
        sx={s.background({ darkMode, minPort, minLand, larPort })}
      >
        <ReplyIcon sx={s.icon({ minPort, minLand, larPort })} />
      </Button>
    </a>
  )
}

export default GoToLinkButton;