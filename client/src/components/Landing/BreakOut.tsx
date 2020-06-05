import * as React from 'react';
import styled from 'styled-components';

// Blocks
import * as b from '../../styles/blocks';
import { landing } from '../../styles/sizes';

// Shared Components
import { Title } from './Landing.styles';

// SVG
import { Organized, Looped, Focus } from '../../assets/svg';

const cards = [
  {
    title: 'Conversations, organized',
    subtitle:
      'Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.',
  },
  {
    title: 'Get looped in, not out',
    subtitle:
      'Slack makes it simple to follow conversations or find important information in an easily searchable archive.',
  },
  {
    title: 'Give focus a chance',
    subtitle:
      'Unlike email, Slack lets you choose which conversations are most important — and which can wait.',
  },
];

interface Props {}

interface ColumnCardProps {
  title: string;
  subtitle: string;
  mr: number;
  children: React.ReactChild;
}

const ColumnCard = ({ title, subtitle, mr, children }: ColumnCardProps) => {
  return (
    <ColumnWrapper>
      <CardWrapper>
        <IconWrapper>{children}</IconWrapper>
        <b.Box my={3}>
          <b.Text
            fontFamily='CircularPro-Bold'
            color='black__light'
            fontSize={18}>
            {title}
          </b.Text>
        </b.Box>
        <b.Box>
          <b.Text fontSize={18} lineHeight={1.6}>
            {subtitle}
          </b.Text>
        </b.Box>
      </CardWrapper>
    </ColumnWrapper>
  );
};
const Columns = styled(b.Flex)`
  flex-wrap: wrap;
`;

const ColumnWrapper = styled(b.Box)`
  width: 100%;
  margin-top: 50px;

  @media ${landing.lg} {
    width: 50%;
  }

  @media ${landing.xl} {
    width: 33%;
  }
`;

const CardWrapper = styled(b.Box)`
  padding-right: 15px;
`;

const IconWrapper = styled(b.Box)`
  svg {
    width: 48px;
    height: 48px;
    path {
      fill: ${({ theme }) => theme.colors.black__light};
    }
  }
`;

export const BreakOut: React.FC<Props> = () => {
  return (
    <Wrapper>
      <b.Container>
        <b.Box>
          <b.Flex flexDirection='column' alignItems='center'>
            <b.Box>
              <Title
                fontFamily='CircularPro-Bold'
                color='black__light'
                lineHeight={1.4}>
                Break out of the inbox
              </Title>
            </b.Box>
            <b.Box my={3}>
              <b.Text center fontSize={16} lineHeight={1.5}>
                Working in channels gives everyone on your team a shared view of
                progress and purpose.
              </b.Text>
            </b.Box>
          </b.Flex>
        </b.Box>
        <b.Box mt={4}>
          <b.Flex justifyContent='center'>
            <VideoWrapper>
              <video
                playsInline
                autoPlay
                muted
                loop
                poster='https://a.slack-edge.com/faab8/marketing/img/homepage/video/brand-campaign_inline-poster.jpg'>
                <source
                  src='https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_inline-video.mp4'
                  type='video/mp4'
                />
              </video>
            </VideoWrapper>
          </b.Flex>
        </b.Box>
        <b.Box pt={50} pb={62}>
          <Columns>
            <ColumnCard
              mr={10}
              title={cards[0].title}
              subtitle={cards[0].subtitle}>
              <Organized />
            </ColumnCard>
            <ColumnCard
              mr={10}
              title={cards[1].title}
              subtitle={cards[1].subtitle}>
              <Looped />
            </ColumnCard>
            <ColumnCard
              mr={0}
              title={cards[2].title}
              subtitle={cards[2].subtitle}>
              <Focus />
            </ColumnCard>
          </Columns>
        </b.Box>
      </b.Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 30px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray__light};
`;

const VideoWrapper = styled(b.Box)`
  video {
    position: relative;
    top: 3px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);

    @media ${landing.md} {
      max-width: 800px;
    }
  }
`;
