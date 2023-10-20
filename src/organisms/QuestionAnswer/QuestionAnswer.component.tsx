import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Question from '../../molecules/Question/Question.component';
import Answer from '../../molecules/Answer/Answer.component';
import FinalAnswerModal from '../../molecules/FinalAnswerModal/FinalAnswerModal.component';
import { TAnswer } from '../../types';

type QuestionAnswerProps = {
  question: string;
  answers: TAnswer[];
};

export default function QuestionAnswer(
  { question, answers }: QuestionAnswerProps,
) {
  const [selectedAnswer, setSelectedAnswer] = useState<TAnswer>();
  const [showFinalAnswerModal, setShowFinalAnswerModal] = useState<boolean>(false);

  const onAnswerSelect = (answer: TAnswer): void => {
    setSelectedAnswer(answer);
    setShowFinalAnswerModal(true);
  };

  const handleClose = (finalAnswer: boolean): void => {
    setShowFinalAnswerModal(false);
    if (selectedAnswer?.correct) {
      // update round with reducer
    }
    console.log(finalAnswer);
  };

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Question questionText={question} />
      {
        answers.map((item) => (
          <Box key={item.answer}>
            <Answer
              answerText={item.answer}
              customClickEvent={() => onAnswerSelect(item)}
            />
          </Box>
        ))
      }
      <FinalAnswerModal
        question={question}
        selectedAnswer={selectedAnswer?.answer}
        isOpen={showFinalAnswerModal}
        handleClose={handleClose}
      />
    </Container>
  );
}
