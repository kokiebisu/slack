import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Box } from 'atoms';
import { primary } from 'atoms/stories/box.stories';
import { Header } from 'organisms/Header';
import { landingHeader } from 'organisms/Header/stories/header.landing.stories';

it('renders the landing header', () => {
  const { getByText } = render(<Header {...landingHeader.args} />);
  expect(getByText('Why Slack?')).toBeInTheDocument();
});
