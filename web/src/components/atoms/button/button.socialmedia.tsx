import React from "react";
import styled from "styled-components";
import * as b from "global/blocks";

/** assets */
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "assets/svg";

export const SocialMediaButton: React.FC<{
  type?: string;
}> = ({ type = "twitter" }) => {
  const types: { [type: string]: JSX.Element } = {
    twitter: <TwitterLogo width={20} height={20} />,
    facebook: <FacebookLogo width={20} height={20} />,
    linkedin: <LinkedinLogo width={20} height={20} />,
    youtube: <YoutubeLogo width={20} height={20} />,
  };
  return (
    <b.Box mx={2}>
      <IconWrapper className={`socialmedia ${type}`}>{types[type]}</IconWrapper>
    </b.Box>
  );
};

const IconWrapper = styled(b.Box)`
  &.socialmedia {
    path {
      fill: ${({ theme }) => theme.colors.gray};
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
  }
`;
