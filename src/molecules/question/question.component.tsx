import { Typography } from '@mui/material';

type QuestionProps = {
  questionText: string;
};

export default function Question({ questionText }: QuestionProps) {
  return (
    <Typography
      variant="subtitle1"
      component="p"
    >
      {questionText}
    </Typography>
  );
}
