import { render, screen } from '@testing-library/react';
import Answer from './Answer.component';

describe('Answer', () => {
  test('displays text', () => {
    const answerText = 'test answer';
    render(<Answer answerText={answerText} />);
    const textElement: HTMLParagraphElement = screen.getByText(answerText);
    expect(textElement.innerHTML).toEqual(answerText);
  });
});
