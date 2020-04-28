import React from 'react';

import { Box, Flex, Text } from '../../../../../Blocks';

export const ChannelSection = ({ title }) => {
  return (
    <Box mb={1} py={2} pl={3} pr={4}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box>
          <Flex>
            <Box>
              <svg height={10} width={10} viewBox='0 0 494.148 494.148'>
                <g>
                  <g>
                    <g>
                      <path
                        d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124    c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884    C432.632,229.572,422.964,213.288,405.284,201.188z'
                        data-original='#000000'
                        class='active-path'
                        data-old_color='#000000'
                        fill='#A0A0A4'
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Box>
            <Box ml={3}>
              <Text fontFamily='Lato' color='#CFC3CF'>
                {title}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex alignItems='center'>
          <Box height={16} width={16}>
            <svg viewBox='0 0 512 512'>
              <g>
                <g>
                  <g>
                    <path
                      d='M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z'
                      data-original='#000000'
                      class='active-path'
                      data-old_color='#000000'
                      fill='#CFC3CF'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
