import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CommonResultOfLoginResponse = UmsAdminController.CommonResultOfLoginResponse;
type name = CommonResultOfLoginResponse
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
