import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('displays IntroModal', () => {
    render(<App />);
    const introModal = screen.getByText('Who Wants to be a Millionaire');
    expect(introModal).toBeInTheDocument();
  });

  test('display MoneyLadder if state is true', () => {
    const setState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [true, setState]);
    render(<App />);
    const icon = screen.getByTestId('LooksTwoIcon');
    expect(icon).toBeVisible();
  });

  test('do not display MoneyLadder if state is false', () => {
    const setState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [false, setState]);
    render(<App />);
    const icon: HTMLElement | null = screen.queryByTestId('LooksTwoIcon');
    expect(icon).toBeNull();
  });
});
