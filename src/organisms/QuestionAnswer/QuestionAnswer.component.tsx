import Question from '../../molecules/Question/Question.component';
import Answer from '../../molecules/Answer/Answer.component';

export default function QuestionAnswer(
  { question, answers }: { question: string, answers: { answer: string, correct: boolean }[] },
) {
  const constructAnswers = () => {
    const constructedAnswers: React.ReactElement[] = [];
    answers.forEach((item) => {
      constructedAnswers.push(<Answer key={item.answer} answerText={item.answer} />);
    });
    return constructedAnswers;
  };

  return (
    <>
      <Question questionText={question} />
      {constructAnswers()}
    </>
  );
}
