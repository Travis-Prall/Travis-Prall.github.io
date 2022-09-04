import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Render', () => {
  render(<App />);
  const linkElement = screen.getAllByText("Travis Prall");
  expect(linkElement);
});





