import React from 'react';
import { SectionProps } from './props';
import { ChooseSection } from './section.choose';
import { SoftwareSection } from './section.software';
import { TogetherSection } from './section.together';

export const Section: React.FC<SectionProps> = ({
  type = 'together',
  ...props
}) => {
  const types = {
    together: <TogetherSection {...props} />,
    software: <SoftwareSection {...props} />,
    choose: <ChooseSection {...props} />,
  };
  return <div>{types[type]}</div>;
};
