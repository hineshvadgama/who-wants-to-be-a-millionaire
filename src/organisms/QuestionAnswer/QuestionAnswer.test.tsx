import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer.component';

describe('question-answer', () => {
  beforeEach(() => {
    render(
      <QuestionAnswer
        question="Test question"
        answers={[
          { answer: 'Answer 1', correct: true },
          { answer: 'Answer 2', correct: false },
          { answer: 'Answer 3', correct: false },
          { answer: 'Answer 4', correct: false },
        ]}
      />,
    );
  });

  test('displays question text', () => {
    const questionText = 'Test question';
    const textElement: HTMLParagraphElement = screen.getByText(questionText);
    expect(textElement).toBeInTheDocument();
  });

  test('displays answer text', () => {
    const answer1: HTMLParagraphElement = screen.getByText('Answer 1');
    const answer2: HTMLParagraphElement = screen.getByText('Answer 2');
    const answer3: HTMLParagraphElement = screen.getByText('Answer 3');
    const answer4: HTMLParagraphElement = screen.getByText('Answer 4');
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    expect(answer4).toBeInTheDocument();
  });
});
