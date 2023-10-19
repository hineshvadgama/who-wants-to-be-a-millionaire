import { render, screen } from '@testing-library/react';
import Answer from './Answer.component';

describe('Answer', () => {
  test('displays text', () => {
    const answerText = 'test answer';
    render(
      <Answer
        answerText={answerText}
        customClickEvent={(): void => {}}
      />,
    );
    const textElement: HTMLElement = screen.getByText(answerText);
    expect(textElement).toBeVisible();
  });
});
