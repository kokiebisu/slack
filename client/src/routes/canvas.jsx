import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';

import * as b from '../styles/blocks';
import { motion } from 'framer-motion';

const variants = {
  active: {
    opacity: 1,
    background: '#7fffd4',
    x: '-50px',
    scale: 1.5,
    color: '#333',
  },
  inActive: {
    opacity: 1,
    background: '#f95c5c',
    x: '50px',
    scale: 1,
    color: 'white',
  },
};

const animation = {
  x: [0, 100, 230, 500],
  y: [0, -25, -50, 500],
  transition: {
    duration: 1,
  },
};

export const Canvas = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <button onClick={() => setToggle(!toggle)}>click</button>
      {toggle && (
        <>
          <Box animate={animation} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(b.Box)`
  position: relative;
  top: 100px;
  bottom: 100px;
  background-color: blue;
`;

const Box = styled(b.Box)`
  height: 15px;
  width: 15px;
  background-color: red;
`;
