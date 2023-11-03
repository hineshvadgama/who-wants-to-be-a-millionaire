import { act, render, screen } from '@testing-library/react';
import WinnerModal from './WinnerModal';

describe('WinnerModal', () => {
  const handleClose: jest.Mock<any, any> = jest.fn();

  beforeEach(() => {
    render(<WinnerModal showModal handleClose={() => handleClose()} />);
  });

  test('displays text', () => {
    const headingElement: HTMLHeadingElement = screen.getByText('Winner!');
    expect(headingElement).toBeVisible();
  });

  test('displays image', () => {
    const imgElement: HTMLImageElement = screen.getByAltText('trophy');
    expect(imgElement).toBeVisible();
  });

  test('handleClose function was called', () => {
    const closeButton: HTMLButtonElement = screen.getByText('Close');
    act(() => {
      closeButton.click();
    });
    expect(handleClose).toHaveBeenCalled();
  });
});
