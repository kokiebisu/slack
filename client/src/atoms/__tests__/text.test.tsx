import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from 'atoms';
import { navItem } from 'atoms/stories/text.stories';

describe('NavItem', () => {
  it('renders the text properly', () => {
    const { getByText } = render(<Text {...navItem.args} children='Button' />);
    expect(getByText('Button')).toBeInTheDocument();
  });
});
