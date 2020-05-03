import React, { useState } from 'react';

import { Box, Flex, Text } from '../../../../../styles/blocks';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChannelSection = ({ title, subtitle }) => {
  const [channelInput, setChannelInput] = useState('');

  const [hovered, setHovered] = useState({
    subtitle: false,
    plus: false,
    cancel: false,
  });

  const [clicked, setClicked] = useState({
    subtitle: false,
    plus: false,
    cancel: false,
  });

  return (
    <Box mb={3}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box py={2} pl={3} pr={4}>
          <Flex alignItems='center'>
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
        <PlusButtonWrapper
          hovered={hovered.plus}
          onHoverStart={() => setHovered({ ...hovered, plus: true })}
          onHoverEnd={() => setHovered({ ...hovered, plus: false })}>
          <Box mt={1} height={16} width={16}>
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
        </PlusButtonWrapper>
      </Flex>
      {subtitle === '' ? null : (
        <SubtitleWrapper
          hovered={hovered.subtitle}
          onHoverStart={() => setHovered({ ...hovered, subtitle: true })}
          onHoverEnd={() => setHovered({ ...hovered, subtitle: false })}>
          <Flex alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
              <SubtitleInner>
                <svg height={10} width={10} viewBox='0 0 512 512'>
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
              </SubtitleInner>
              <Box ml={2}>
                <Text fontFamily='Lato' color='#CFC3CF'>
                  {subtitle}
                </Text>
              </Box>
            </Flex>
            {hovered.subtitle ? (
              <CancelLogoWrapper
                onHoverStart={() => setHovered({ ...hovered, cancel: true })}
                onHoverEnd={() => setHovered({ ...hovered, cancel: false })}>
                <Box mt={1} height={16} width={16}>
                  <CancelLogo
                    hovered={hovered.cancel}
                    height={12}
                    width={12}
                    viewBox='0 0 492 492'>
                    <g>
                      <g>
                        <g>
                          <path
                            d='M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z'
                            data-original='#000000'
                            class='active-path'
                            data-old_color='#000000'
                            // fill='#AE9CAE'
                          />
                        </g>
                      </g>
                    </g>
                  </CancelLogo>
                </Box>
              </CancelLogoWrapper>
            ) : null}
          </Flex>
        </SubtitleWrapper>
      )}
    </Box>
  );
};

const SubtitleWrapper = styled(motion.div)`
  background-color: ${({ hovered }) => (hovered ? '#340D37' : 'transparent')};
  cursor: ${({ hovered }) => (hovered ? 'pointer' : null)};
`;

const SubtitleInner = styled.div`
  padding: 5px 0 5px 25px;
`;

const PlusButtonWrapper = styled(motion.div)`
  background-color: ${({ hovered }) =>
    hovered ? 'rgba(174, 156, 174, 0.2)' : 'transparent'};
  padding: 3px 6px 6px 5px;
  margin-right: 16px;
  border-radius: 5px;
`;

const CancelLogoWrapper = styled(motion.div)`
  padding-right: 19.5px;
`;

const CancelLogo = styled(motion.svg)`
  path {
    fill: ${({ hovered }) => (hovered ? 'white' : '#AE9CAE')};
  }
`;
