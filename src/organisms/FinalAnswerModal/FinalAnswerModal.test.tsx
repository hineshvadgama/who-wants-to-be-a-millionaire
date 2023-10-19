import { render, screen } from '@testing-library/react';
import FinalAnswerModal from './FinalAnswerModal.component';

describe('FinalAnswerModal', () => {
  test('displays text', () => {
    render(<FinalAnswerModal />);
    const headingElement: HTMLElement = screen.getByText('Final Answer Modal component');
    expect(headingElement).toBeVisible();
  });
});
