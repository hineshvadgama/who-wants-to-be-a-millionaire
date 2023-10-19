import { useState } from 'react';
import Question from '../../molecules/Question/Question.component';
import Answer from '../../molecules/Answer/Answer.component';
import { TAnswer } from '../../types';

type QuestionAnswerProps = {
  question: string;
  answers: TAnswer[];
};

export default function QuestionAnswer(
  { question, answers }: QuestionAnswerProps,
) {
  const [selectedAnswer, setSelectedAnswer] = useState<TAnswer>();
  const onAnswerSelect = (answer: TAnswer): void => {
    setSelectedAnswer(answer);
  };

  const constructAnswers = () => {
    const constructedAnswers: React.ReactElement[] = [];
    answers.forEach((item) => {
      constructedAnswers.push(
        <Answer
          key={item.answer}
          answerText={item.answer}
          customClickEvent={() => onAnswerSelect(item)}
        />,
      );
    });
    return constructedAnswers;
  };

  return (
    <>
      <Question questionText={question} />
      {constructAnswers()}
      {selectedAnswer?.answer}
    </>
  );
}
