import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game.component';

describe('Game', () => {
  const setState = jest.fn();

  test('displays QuestionAnswer component', () => {
    render(<Game />);
    const question: HTMLElement = screen.getByText('Who won the 2008 Formula 1 Championship');
    expect(question).toBeVisible();
  });

  test('display MoneyLadder if state is true', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [true, setState]);
    render(<Game />);
    const icon = screen.getByTestId('LooksTwoIcon');
    expect(icon).toBeVisible();
  });

  test('does not display MoneyLadder if state is false', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [false, setState]);
    render(<Game />);
    const icon: HTMLElement | null = screen.queryByTestId('LooksTwoIcon');
    expect(icon).toBeNull();
  });

  // Test displays WinnerModal
});
