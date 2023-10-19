import { Button } from '@mui/material';

type AnswerProps = {
  answerText: string;
  customClickEvent: () => void;
};

export default function Answer({ answerText, customClickEvent }: AnswerProps) {
  return (
    <Button
      variant="text"
      onClick={customClickEvent}
    >
      { answerText }
    </Button>
  );
}
