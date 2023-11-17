import React, { useContext, useState } from 'react';
import { Box, Container } from '@mui/material';
import Question from '../../molecules/Question/Question.component';
import Answer from '../../molecules/Answer/Answer.component';
import FinalAnswerModal from '../../molecules/FinalAnswerModal/FinalAnswerModal.component';
import { TAnswer } from '../../types';
import { RoundDispatchContext } from '../../context/gameRound/gameRoundContex';

type QuestionAnswerProps = {
  question: string;
  answers: TAnswer[];
};

export default function QuestionAnswer(
  { question, answers }: QuestionAnswerProps,
) {
  const roundDispatch = useContext<React.Dispatch<{ type: string }>>(RoundDispatchContext);
  const [selectedAnswer, setSelectedAnswer] = useState<TAnswer>();
  const [showFinalAnswerModal, setShowFinalAnswerModal] = useState<boolean>(false);

  const onAnswerSelect = (answer: TAnswer): void => {
    setSelectedAnswer(answer);
    setShowFinalAnswerModal(true);
  };

  const handleFinalAnswerModalClose = (isFinalAnswer: boolean): void => {
    setShowFinalAnswerModal(false);
    if (!isFinalAnswer) return;

    if (selectedAnswer) {
      if (selectedAnswer.correct) {
        roundDispatch({ type: 'increase' });
        // return;
      }
      // Handle incorrect answer
    } else {
      throw Error('Answer is not defined');
    }
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
        handleClose={handleFinalAnswerModalClose}
      />
    </Container>
  );
}
