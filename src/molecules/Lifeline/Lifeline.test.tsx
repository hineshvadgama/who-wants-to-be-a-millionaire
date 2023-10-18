import { render, screen } from '@testing-library/react';
import Lifeline from './Lifeline.component';

describe('Lifeline', () => {
  test('displays correct audience icon', () => {
    render(<Lifeline type="audience" />);
    const renderedIcon: HTMLElement = screen.getByTestId('GroupsIcon');
    expect(renderedIcon).toBeVisible();
  });

  test('displays correct 5050 icon', () => {
    render(<Lifeline type="5050" />);
    const renderedIcon: HTMLElement = screen.getByTestId('LooksTwoIcon');
    expect(renderedIcon).toBeVisible();
  });

  test('displays correct flip icon', () => {
    render(<Lifeline type="flip" />);
    const renderedIcon: HTMLElement = screen.getByTestId('LoopIcon');
    expect(renderedIcon).toBeVisible();
  });
});
