import React from "react";
import * as b from "global/blocks";
import styled from "styled-components";

export const LoadingAnimation: React.FC<{}> = () => {
  return (
    // <DotWrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
    //   <DotContainer
    //     variants={DotContainerVariants}
    //     initial="start"
    //     animate="end"
    //   >
    //     <Dot variants={DotVariants} transition={DotTransition} />
    //     <Dot variants={DotVariants} transition={DotTransition} />
    //     <Dot variants={DotVariants} transition={DotTransition} />
    //   </DotContainer>
    // </DotWrapper>
    <div>hello</div>
  );
};

// Animations
const DotContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const DotVariants = {
  start: {
    y: 0,
  },
  end: {
    y: 5,
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const DotWrapper = styled(b.Box)``;

export const DotContainer = styled(b.Box)`
  position: relative;
  bottom: 2px;
  display: flex;
  align-items: center;
`;

export const Dot = styled(b.Box)`
  background-color: white;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 2px;
`;
