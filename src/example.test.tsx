import '@testing-library/jest-dom';
// FIXME: for some reason eslint is not finding screen in this package
// eslint-disable-next-line import/named
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { ExampleComponent } from './example';

describe('Example component', () => {
  test('It renders', () => {
    render(<ExampleComponent />);
    const p = screen.getByText('Example paragraph');
    expect(p).toBeInTheDocument();
  });
});
