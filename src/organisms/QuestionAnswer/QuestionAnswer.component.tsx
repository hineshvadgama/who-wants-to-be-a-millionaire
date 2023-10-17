import Question from '../../molecules/Question/Question.component';
import Answer from '../../molecules/Answer/Answer.component';

export default function QuestionAnswer() {
  const questionText = 'Test question';
  const answer1Text = 'Answer 1';
  const answer2Text = 'Answer 2';
  const answer3Text = 'Answer 3';
  const answer4Text = 'Answer 4';

  return (
    <>
      <Question questionText={questionText} />
      <Answer answerText={answer1Text} />
      <Answer answerText={answer2Text} />
      <Answer answerText={answer3Text} />
      <Answer answerText={answer4Text} />
    </>
  );
}
