import { Button } from '@mui/material';

type AnswerProps = {
  answerText: string;
  customClickEvent: () => void;
};

export default function Answer({ answerText, customClickEvent }: AnswerProps) {
  return (
    <Button
      variant="contained"
      onClick={customClickEvent}
      sx={{ m: 2 }}
    >
      { answerText }
    </Button>
  );
}
