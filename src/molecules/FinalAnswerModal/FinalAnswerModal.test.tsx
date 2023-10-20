import { act, render, screen } from '@testing-library/react';
import FinalAnswerModal from './FinalAnswerModal.component';

describe('FinalAnswerModal', () => {
  const mockHandleClose = jest.fn();

  beforeEach(() => {
    render(<FinalAnswerModal isOpen question="Test question?" selectedAnswer="Test answer" handleClose={mockHandleClose} />);
  });
  test('displays heading', () => {
    const heading: HTMLElement = screen.getByText('Final Answer?');
    expect(heading).toBeVisible();
  });

  test('displays question', () => {
    const question: HTMLElement = screen.getByText('Q: Test question?');
    expect(question).toBeVisible();
  });

  test('displays answer', () => {
    const answer: HTMLElement = screen.getByText('A: Test answer');
    expect(answer).toBeVisible();
  });

  test('displays yes button', () => {
    const yesButton: HTMLElement = screen.getByText('Yes');
    expect(yesButton instanceof HTMLButtonElement).toBeTruthy();
    expect(yesButton).toBeVisible();
  });

  test('displays no button', () => {
    const noButton: HTMLElement = screen.getByText('No');
    expect(noButton instanceof HTMLButtonElement).toBeTruthy();
    expect(noButton).toBeVisible();
  });

  test('yes button fires handler on button click', () => {
    const yesButton: HTMLElement = screen.getByText('Yes');
    act(() => {
      yesButton.click();
    });
    expect(mockHandleClose).toHaveBeenCalledWith(true);
  });

  test('no button fires handler on button click', () => {
    const noButton: HTMLElement = screen.getByText('No');
    act(() => {
      noButton.click();
    });
    expect(mockHandleClose).toHaveBeenCalledWith(false);
  });
});
