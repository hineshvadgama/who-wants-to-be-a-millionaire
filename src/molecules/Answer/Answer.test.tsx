import { render, screen } from '@testing-library/react';
import Answer from './Answer.component';

describe('answer', () => {
  test('displays text', () => {
    const text = 'answer component';
    render(<Answer />);
    const textElement: HTMLParagraphElement = screen.getByText(text);
    expect(textElement.innerHTML).toEqual(text);
  });
});
