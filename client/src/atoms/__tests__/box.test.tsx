import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Box } from 'atoms';
import { base } from 'atoms/stories/box.stories';

it('renders the button in the primary state', () => {
  const { getByText } = render(<Box {...base.args} />);
  expect(getByText('Box')).toBeInTheDocument();
});
