import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Game from './Game.component';

describe('Game', () => {
  const setState = jest.fn();
  const setIntroModalOpen = jest.fn();

  test('displays QuestionAnswer component', () => {
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const question: HTMLElement = screen.getByText('Who won the 2008 Formula 1 Championship');
    expect(question).toBeVisible();
  });

  test('display MoneyLadder if state is true', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [true, setState]);
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const icon = screen.getByTestId('LooksTwoIcon');
    expect(icon).toBeVisible();
  });

  test('does not display MoneyLadder if state is false', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [false, setState]);
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const icon: HTMLElement | null = screen.queryByTestId('LooksTwoIcon');
    expect(icon).toBeNull();
  });

  // Test displays WinnerModal
  test('displays WinnerModal if state is true', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [true, setState]);
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const winnerText: HTMLElement = screen.getByText('Winner!');
    expect(winnerText).toBeVisible();
  });

  test('does not display WinnerModal if state is false', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [false, setState]);
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const winnerText: HTMLElement | null = screen.queryByText('Winner!');
    expect(winnerText).toBeNull();
  });

  test('setIntroModalOpen is called', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [true, setState]);
    render(<Game setIntroModalOpen={setIntroModalOpen} />);
    const button: HTMLElement = screen.getByText('Close');
    act(() => {
      button.click();
    });
    expect(setIntroModalOpen).toHaveBeenCalledWith(true);
  });
});
