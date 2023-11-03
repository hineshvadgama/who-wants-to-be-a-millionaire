import { act, render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer.component';
import { RoundContext, RoundDispatchContext } from '../../context/gameRound/gameRoundContex';

describe('question-answer', () => {
  const mockDispatch = jest.fn();
  beforeEach(() => {
    render(
      <RoundContext.Provider value={0}>
        <RoundDispatchContext.Provider value={mockDispatch}>
          <QuestionAnswer
            question="Test question"
            answers={[
              { answer: 'Answer 1', correct: true },
              { answer: 'Answer 2', correct: false },
              { answer: 'Answer 3', correct: false },
              { answer: 'Answer 4', correct: false },
            ]}
          />
        </RoundDispatchContext.Provider>
      </RoundContext.Provider>,
    );
  });

  test('displays question text', () => {
    const questionText = 'Test question';
    const textElement: HTMLElement = screen.getByText(questionText);
    expect(textElement).toBeVisible();
  });

  test('displays answer text', () => {
    const answer1: HTMLElement = screen.getByText('Answer 1');
    const answer2: HTMLElement = screen.getByText('Answer 2');
    const answer3: HTMLElement = screen.getByText('Answer 3');
    const answer4: HTMLElement = screen.getByText('Answer 4');
    expect(answer1).toBeVisible();
    expect(answer2).toBeVisible();
    expect(answer3).toBeVisible();
    expect(answer4).toBeVisible();
  });

  test('does not display FinalAnswerModal on first render', () => {
    const finalAnswerModalHeading: HTMLElement | null = screen.queryByText('Final Answer?');
    expect(finalAnswerModalHeading).toBeNull();
  });

  test('displays FinalAnswerModal', () => {
    const answer1: HTMLButtonElement = screen.getByText('Answer 1');
    act(() => {
      answer1.click();
    });
    const finalAnswerModalHeading: HTMLElement = screen.getByText('Final Answer?');
    expect(finalAnswerModalHeading).toBeVisible();
  });

  test('closes FinalAnswerModal', () => {
    const answer1: HTMLButtonElement = screen.getByText('Answer 1');
    act(() => {
      answer1.click();
    });
    const noButton: HTMLButtonElement = screen.getByText('No');
    act(() => {
      noButton.click();
    });
    const finalAnswerModalHeading: HTMLHeadingElement | null = screen.queryByText('Final Answer?');
    expect(finalAnswerModalHeading).not.toBeVisible();
  });

  test('dispatches round increase action on correct answer', () => {
    const answer1: HTMLButtonElement = screen.getByText('Answer 1');
    act(() => {
      answer1.click();
    });
    const yesButton: HTMLButtonElement = screen.getByText('Yes');
    act(() => {
      yesButton.click();
    });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'increase' });
  });
});
