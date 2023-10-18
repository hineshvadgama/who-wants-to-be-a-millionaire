import { render, screen } from '@testing-library/react';
import MoneyLadderStep from './MoneyLadderStep.component';

describe('MoneyLadderStep', () => {
  test('renders correctly', () => {
    render(<MoneyLadderStep currencySymbol="£" value={100} />);
    const textElement: HTMLElement = screen.getByText('£100');
    expect(textElement).toBeVisible();
  });
});
