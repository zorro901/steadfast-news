import { render, screen } from '@testing-library/react';
import { Button } from '@components/atoms/Button/button';
import '@testing-library/jest-dom'

describe('button test', () => {
  it('should button', () => {
    render(<Button label={'aaa'} />)

    const button = screen.getByRole('button')

    expect(button).toBeVisible()
  });
});
