import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from 'atoms';
import { primary } from 'atoms/stories/Button.stories';

describe('Button', () => {
  it('renders properly in the primary state', () => {
    const { getByText } = render(
      <Button
        onPress={() => console.log('clicked')}
        size='md'
        {...primary.args}
      />
    );
    expect(getByText('Button')).toBeInTheDocument();
  });
  it('renders properly in the inverse state', () => {
    const { getByText } = render(
      <Button
        inverse
        onPress={() => console.log('clicked')}
        size='md'
        {...primary.args}
      />
    );
    expect(getByText('Button')).toBeInTheDocument();
  });
});
