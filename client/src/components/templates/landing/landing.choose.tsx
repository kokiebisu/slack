import * as React from 'react';
import * as b from 'global/blocks';
import styled from 'styled-components';
import { size } from 'global/sizes';
import { ChooseTemplateProps } from './props';
import { main } from 'global/colors';
import { Button } from 'components/atoms/button/button.component';

export const ChooseTemplate: React.FC<ChooseTemplateProps> = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box mb={4}>
          <Header>Choose a better way to work</Header>
        </b.Box>
        <b.Box>
          <Buttons>
            <b.Box>
              <b.Box mr={2}>
                <Button
                  type='primary'
                  title='Try Slack'
                  fill={main.colors.white}
                  textColor={main.colors.primary__light}
                />
              </b.Box>
              <div>
                <Button
                  type='primary'
                  title='Contact Sales'
                  inverse
                  fill={main.colors.white}
                />
              </div>
            </b.Box>
          </Buttons>
        </b.Box>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 110px 0;
  background-color: ${({ theme }) => theme.colors.primary__light};
`;

const Header = styled(b.Text)`
  font-family: 'Larsseit-Bold';
  font-size: 6vw;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media ${size.xs} {
    font-size: 5.5vw;
  }

  @media ${size.sm} {
    font-size: 4.5vw;
  }
`;

const Buttons = styled(b.Box)`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${size.md} {
      flex-direction: row;
    }
  }
`;
