import { act, render, screen } from '@testing-library/react';
import IntroModal from './IntroModal.component';

describe('IntroModal', () => {
  const setIntroModalOpen = jest.fn();
  beforeEach(() => {
    render(<IntroModal isOpen setIsOpen={setIntroModalOpen} />);
  });

  test('modal is displayed on first render', () => {
    const modalElement: HTMLDivElement = screen.getByRole('presentation');
    expect(modalElement).toBeVisible();
  });

  test('header is displayed', () => {
    const headingText = 'Who Wants to be a Millionaire';
    const headingElement: HTMLHeadingElement = screen.getByText(headingText);
    expect(headingElement.tagName).toEqual('H3');
  });

  test('image is displayed', () => {
    const altText = 'Who Wants to be a Millionaire Logo';
    const imageElement: HTMLImageElement = screen.getByAltText(altText);
    expect(imageElement.tagName).toEqual('IMG');
    expect(imageElement.src).toEqual('http://localhost/who-wants-to-be-a-millionaire-logo.png');
  });

  test('button is displayed', () => {
    const buttonText = 'Play';
    const buttonElement: HTMLButtonElement = screen.getByText(buttonText);
    expect(buttonElement.tagName).toEqual('BUTTON');
  });

  test('button calls close handler function', () => {
    const buttonText = 'Play';
    const buttonElement: HTMLButtonElement = screen.getByText(buttonText);
    act(() => {
      buttonElement.click();
    });
    expect(setIntroModalOpen).toHaveBeenCalledWith(false);
  });
});
