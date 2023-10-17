import { render, screen } from '@testing-library/react';
import Question from './Question.component';

describe('Question', () => {
  test('displays text', () => {
    const questionText: string = 'Test question';
    render(<Question questionText={questionText} />);
    const textElement: HTMLParagraphElement = screen.getByText(questionText);
    expect(textElement).toBeInTheDocument();
  });
});
