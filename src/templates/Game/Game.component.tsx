import QuestionAnswer from '../../organisms/QuestionAnswer/QuestionAnswer.component';
import questions from '../../assets/data';

export default function Game() {
  const gameRound = 0;
  return (
    <QuestionAnswer
      question={questions[gameRound].question}
      answers={questions[gameRound].answers}
    />
  );
}
