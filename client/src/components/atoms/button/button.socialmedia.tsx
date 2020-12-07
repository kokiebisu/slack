import React from 'react';
import styled from 'styled-components';

/**
 * Global
 */
import * as b from 'global/blocks';

/**
 * Assets
 */
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
} from 'assets/svg';

/**
 * Props
 */
import { SocialMediaButtonProps } from './props';

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  platform = 'twitter',
}) => {
  const types = {
    twitter: <TwitterLogo width={20} />,
    facebook: <FacebookLogo width={20} />,
    linkedin: <LinkedinLogo width={20} />,
    youtube: <YoutubeLogo width={20} />,
  };
  return (
    <b.Button mx={2}>
      <IconWrapper className={`socialmedia ${platform}`}>
        {types[platform]}
      </IconWrapper>
    </b.Button>
  );
};

const IconWrapper = styled(b.Box)`
  &.socialmedia {
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  &.twitter {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue__lighter};
      }
    }
  }

  &.facebook {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.linkedin {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  &.youtube {
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.red__light};
      }
    }
  }
`;
