import QuestionAnswer from '../../organisms/QuestionAnswer/QuestionAnswer.component';
import questions from '../../assets/data';

export default function Game() {
  return (
    <QuestionAnswer
      question={questions[0].question}
      answers={questions[0].answers}
    />
  );
}
