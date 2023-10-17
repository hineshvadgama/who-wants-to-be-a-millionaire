import {
  Box,
  Button,
  Modal,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import logo from '../../assets/img/who-wants-to-be-a-millionaire-logo.png';

export default function IntroModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal open={isOpen}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h3" component="h3">Who Wants to be a Millionaire</Typography>
        <img src={logo} alt="Who Wants to be a Millionaire Logo" />
        <br />
        <Button variant="contained" sx={{ mt: 4 }} onClick={() => setIsOpen(false)}>Play</Button>
      </Box>
    </Modal>
  );
}
