import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer.component';

describe('question-answer', () => {
  test('displays question text', () => {
    const questionText = 'question component';
    render(<QuestionAnswer />);
    const textElement: HTMLParagraphElement = screen.getByText(questionText);
    expect(textElement.innerHTML).toEqual(questionText);
  });

  test('displays answer text', () => {
    const answerText = 'answer component';
    render(<QuestionAnswer />);
    const textElements: HTMLParagraphElement[] = screen.getAllByText(answerText);
    expect(textElements.every((val) => val.innerHTML === answerText)).toBeTruthy();
  });
});
