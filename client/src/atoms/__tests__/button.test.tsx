import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from 'atoms';
import { primary, inverse, launch, signin } from 'atoms/stories/button.stories';

describe('Base Button', () => {
  it('renders the component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Button onPress={() => console.log('clicked')} {...primary.args} />,
      div
    );
  });
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
  it('renders correctly with specified size', () => {
    const { getByTestId } = render(
      <Button size='md' onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
  it('renders correctly in transparent state', () => {
    const { getByTestId } = render(
      <Button transparent onPress={() => console.log('clicked')} />
    );
    expect(getByTestId('button')).toHaveTextContent('Button');
  });
  it('renders inner text properly', () => {
    const { getByText } = render(
      <Button onPress={() => console.log('clicked')} />
    );
    expect(getByText('Button')).toBeInTheDocument();
  });
  it('renders inner text properly in the inverse state', () => {
    const { getByText } = render(
      <Button
        inverse
        onPress={() => console.log('clicked')}
        size='md'
        {...inverse.args}
      />
    );
    expect(getByText('Button')).toBeInTheDocument();
  });
  it('renders inner text properly in the transparent state', () => {
    const { getByText } = render(
      <Button
        transparent
        onPress={() => console.log('clicked')}
        size='md'
        {...signin.args}
      />
    );
    expect(getByText('Sign in')).toBeInTheDocument();
  });
  it('renders inner text properly with icon', () => {
    const { getByText } = render(
      <Button onPress={() => console.log('clicked')} {...launch.args} />
    );
    expect(getByText('Launch')).toBeInTheDocument();
  });
});
