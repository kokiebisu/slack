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
  avatarBackground: string;
}

export const AvailableWorkspace: React.FC<Props> = ({
  name,
  url,
  avatarBackground,
}) => {
  return (
    <b.Flex justifyContent='center'>
      <Wrapper>
        <b.Flex alignItems='center' justifyContent='space-between'>
          <b.Box>
            <b.Flex>
              <b.Box mr={3}>
                <b.Box
                  backgroundColor={avatarBackground}
                  width={50}
                  height={50}
                  style={{
                    border: '3px solid gray__light',
                    borderRadius: '8px',
                  }}>
                  <b.Flex alignItems='center' justifyContent='center'>
                    <b.Box>
                      <b.Text
                        color='white'
                        fontFamily='SlackLato-Bold'
                        fontSize={18}>
                        {name.charAt(0).toUpperCase()}
                      </b.Text>
                    </b.Box>
                  </b.Flex>
                </b.Box>
              </b.Box>
              <b.Box>
                <b.Flex alignItems='center'>
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
