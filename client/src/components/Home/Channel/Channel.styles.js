import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ state }) => (state ? '#1164a3' : 'transparent')};
  border: none;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Lato';
  font-weight: 300;
  color: ${({ state }) => (state ? 'white' : 'rgb(207, 195, 207)')};
`;
