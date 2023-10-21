import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('displays IntroModal', () => {
    render(<App />);
    const introModal = screen.getByText('Who Wants to be a Millionaire');
    expect(introModal).toBeInTheDocument();
  });
});
