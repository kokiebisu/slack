import * as React from 'react';

// Blocks
import * as b from '../../../styles/blocks';

// Styles
import {
  Wrapper,
  IconWrapper,
  WorkspaceName,
  WorkspaceURL,
  LaunchButton,
  Icon,
} from './workspace.styles';

interface Props {
  name: string;
  url: string;
}

export const AvailableWorkspace: React.FC<Props> = ({ name, url }) => {
  return (
    <b.Flex justifyContent='center'>
      <Wrapper>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <b.Box>
                <WorkspaceName>
                  <b.Text>{name}</b.Text>
                </WorkspaceName>
                <WorkspaceURL>
                  <b.Text>{url}.slack.com</b.Text>
                </WorkspaceURL>
              </b.Box>
            </b.Flex>
          </b.Box>
          <LaunchButton onClick={() => {}}>
            <b.Text>Launch</b.Text>
          </LaunchButton>
        </b.Flex>
      </Wrapper>
    </b.Flex>
  );
};
