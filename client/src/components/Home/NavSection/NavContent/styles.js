import styled from 'styled-components';

export const AddChannel = styled.div`
  position: relative;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  left: 8px;
`;

export const Text = styled.p`
  position: relative;
  bottom: 0.1px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Lato';
  font-weight: 300;
  color: ${({ state }) => (state ? 'white' : 'rgb(207, 195, 207)')};
`;
