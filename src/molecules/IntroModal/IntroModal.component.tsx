import {
  Box,
  Button,
  Modal,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import logo from '../../assets/img/who-wants-to-be-a-millionaire-logo.png';

type TIntroModalProps = {
  isOpen: boolean,
  setIsOpen: (setOpen: boolean) => void
};

export default function IntroModal({ isOpen, setIsOpen }: TIntroModalProps) {
  return (
    <Modal open={isOpen}>
      <Box sx={{ p: 2, textAlign: 'center', backgroundColor: grey[50] }}>
        <Typography variant="h3" component="h3">Who Wants to be a Millionaire</Typography>
        <img src={logo} alt="Who Wants to be a Millionaire Logo" />
        <br />
        <Button variant="contained" sx={{ mt: 4 }} onClick={() => setIsOpen(false)}>Play</Button>
      </Box>
    </Modal>
  );
}
