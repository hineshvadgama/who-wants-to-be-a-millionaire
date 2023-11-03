import { Button, Dialog, Typography } from '@mui/material';
import trophy from '../../assets/img/winner-trophy.png';

type WinnerModalProps = {
  showModal: boolean;
  handleClose: () => void;
};

export default function WinnerModal({ showModal, handleClose }: WinnerModalProps) {
  return (
    <Dialog open={showModal} sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h3" sx={{ p: 4 }}>Winner!</Typography>
      <img src={trophy} alt="trophy" style={{ padding: '20px' }} />
      <Button variant="contained" onClick={() => handleClose()}>Close</Button>
    </Dialog>
  );
}
