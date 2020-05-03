import * as React from 'react';

// Component
import { Team } from './Team';

// Block
import { Box, Flex } from '../../../styles/Blocks';

export const TeamSection = () => {
  return (
    <Box paddingTop={20}>
      <Flex flexDirection='column' alignItems='center'>
        <Box marginBottom={1}>
          <Team />
        </Box>
        <Box marginBottom={1}>
          <Team />
        </Box>
        <Box>
          <svg height={16} width={16} viewBox='0 0 512 512'>
            <g>
              <g>
                <g>
                  <path
                    d='M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z'
                    data-original='#000000'
                    class='active-path'
                    data-old_color='#000000'
                    fill='white'
                  />
                </g>
              </g>
            </g>
          </svg>
        </Box>
      </Flex>
    </Box>
  );
};
