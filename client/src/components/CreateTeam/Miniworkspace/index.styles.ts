import styled from 'styled-components';
import * as b from 'global/blocks';

export const RightWrapper = styled(b.Box)`
  width: 350px;
  height: 325px;

  & > div {
    height: 100%;
    display: grid;
    grid-template-columns: 125px auto;
    opacity: ${({ opacity }) => `${opacity}`};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

export const LeftMock = styled(b.Box)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary__lighter};
  padding: 18px 0;

  & > div {
    height: 100%;
  }
`;

export const TeamWrapper = styled(b.Box)`
  height: 35px;
`;

export const ChannelWrapper = styled(b.Box)`
  display: flex;
  align-items: center;
  height: 20px;
`;

export const BulletSection = styled(b.Box)`
  margin-top: 12px;
`;

export const BulletPoint = styled(b.Box)`
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.pink__light};
`;

export const RightMock = styled(b.Box)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 18px 15px;

  & > div {
    height: 100%;
  }
`;

export const ContentWrapper = styled(b.Box)`
  display: grid;
  grid-template-rows: repeat(3, 30px);
`;

export const SectionTitle = styled(b.Box)`
  height: 30px;
`;

export const Line = styled(b.Box)`
  height: 2px;
  width: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.white__dark};
`;
