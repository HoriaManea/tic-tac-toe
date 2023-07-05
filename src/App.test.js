import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title whit 1 value', () => {
  render(<App />);
  const linkElement = screen.getByText(/game/i);
  expect(linkElement).toBeInTheDocument();
});
