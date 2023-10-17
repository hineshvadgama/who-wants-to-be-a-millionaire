import { Typography } from '@mui/material';

type AnswerProps = {
  answerText: string;
};

export default function Answer({ answerText }: AnswerProps) {
  return (
    <Typography
      variant="subtitle1"
      component="p"
    >
      { answerText }
    </Typography>
  );
}
