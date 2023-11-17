import { render, screen } from '@testing-library/react';
import React from 'react';
import MoneyLadder from './MoneyLadder.compoent';

describe('MoneyLadder', () => {
  test('displays lifeline icons', () => {
    render(<MoneyLadder currencySymbol="£" steps={[100, 50, 300, 1000, 300]} />);
    const fiftyfiftyIcon: HTMLElement = screen.getByTestId('LooksTwoIcon');
    const flipIcon: HTMLElement = screen.getByTestId('LoopIcon');
    const audienceIcon: HTMLElement = screen.getByTestId('GroupsIcon');
    expect(fiftyfiftyIcon).toBeVisible();
    expect(flipIcon).toBeVisible();
    expect(audienceIcon).toBeVisible();
  });

  test('renders MoneyLadderSteps', () => {
    render(<MoneyLadder currencySymbol="£" steps={[100, 50, 300, 1000, 300]} />);
    const moneyLadderSteps: HTMLElement[] = screen.getAllByText('£', { exact: false });
    expect(moneyLadderSteps.length).toEqual(4);
    expect(moneyLadderSteps[0].innerHTML).toEqual('£1000');
    expect(moneyLadderSteps[1].innerHTML).toEqual('£300');
    expect(moneyLadderSteps[2].innerHTML).toEqual('£100');
    expect(moneyLadderSteps[3].innerHTML).toEqual('£50');
  });

  test('stepTracker is length - 1 when it reaches 0', () => {
    const setStepTracker = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [0, setStepTracker]);
    render(<MoneyLadder currencySymbol="£" steps={[100, 50, 300, 1000, 300]} />);
    expect(setStepTracker).toHaveBeenCalledTimes(2);
    expect(setStepTracker).toHaveBeenCalledWith(4);
  });
});
