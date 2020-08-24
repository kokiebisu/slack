import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from 'atoms';

describe('Button', () => {
  it('renders correctly', () => {
    const testingData = {
      action: () => console.log('test'),
    };

    const tree = renderer
      .create(<Button onPress={testingData.action} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
