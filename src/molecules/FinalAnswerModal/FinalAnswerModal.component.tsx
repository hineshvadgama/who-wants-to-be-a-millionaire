import {
  Box,
  Button,
  Modal,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

type FinalAnswerModalProps = {
  question: string;
  selectedAnswer: string | undefined;
  isOpen: boolean;
  handleClose: (finalAnswer: boolean) => void;
};

export default function FinalAnswerModal(
  {
    question, selectedAnswer, isOpen, handleClose,
  }: FinalAnswerModalProps,
) {
  return (
    <Modal open={isOpen}>
      <Box sx={{ p: 4, textAlign: 'center', backgroundColor: grey[50] }}>
        <Typography variant="h3">Final Answer?</Typography>
        <Typography variant="subtitle1">{`Q: ${question}`}</Typography>
        <Typography variant="subtitle1">{`A: ${selectedAnswer}`}</Typography>
        <Button sx={{ m: 2 }} variant="contained" onClick={() => handleClose(false)}>No</Button>
        <Button sx={{ m: 2 }} variant="contained" onClick={() => handleClose(true)}>Yes</Button>
      </Box>
    </Modal>
  );
}
