import { render, screen } from '@testing-library/react';
import MoneyLadder from './MoneyLadder.compoent';

describe('MoneyLadder', () => {
  test('displays lifeline icons', () => {
    render(<MoneyLadder currencySymbol="£" values={[100, 200, 300]} />);
    const fiftyfiftyIcon: HTMLElement = screen.getByTestId('LooksTwoIcon');
    const flipIcon: HTMLElement = screen.getByTestId('LoopIcon');
    const audienceIcon: HTMLElement = screen.getByTestId('GroupsIcon');
    expect(fiftyfiftyIcon).toBeVisible();
    expect(flipIcon).toBeVisible();
    expect(audienceIcon).toBeVisible();
  });

  test('renders MoneyLadderSteps', () => {
    render(<MoneyLadder currencySymbol="£" values={[100, 50, 300, 1000, 300]} />);
    const moneyLadderSteps: HTMLElement[] = screen.getAllByText('£', { exact: false });
    expect(moneyLadderSteps.length).toEqual(4);
    expect(moneyLadderSteps[0].innerHTML).toEqual('£50');
    expect(moneyLadderSteps[1].innerHTML).toEqual('£100');
    expect(moneyLadderSteps[2].innerHTML).toEqual('£300');
    expect(moneyLadderSteps[3].innerHTML).toEqual('£1000');
  });
});
