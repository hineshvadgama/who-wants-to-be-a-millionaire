import { render, screen } from '@testing-library/react';
import Question from './question.component';

describe('question component', () => {
  test('displays text', () => {
    const text: string = 'question component';
    render(<Question />);
    const textElement: HTMLParagraphElement = screen.getByText(text);
    expect(textElement.innerHTML).toEqual(text);
  });
});
