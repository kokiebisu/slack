import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from 'atoms';
import { base } from 'atoms/stories/Button.stories';

it('renders the button in the primary state', () => {
  // const { getByText } = render(
  //   <Button onPress={() => console.log('clicked')} size='md' {...base.args} />
  // );
  // expect(getByText('Button')).toBeInTheDocument();
});
