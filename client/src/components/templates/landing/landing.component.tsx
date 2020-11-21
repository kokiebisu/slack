import React from 'react';
import { TemplateProps } from './props';
import { ChooseTemplate } from './landing.choose';
import { SoftwareTemplate } from './landing.software';
import { TogetherTemplate } from './landing.together';

export const Template: React.FC<TemplateProps> = ({
  type = 'together',
  ...props
}) => {
  const types = {
    together: <TogetherTemplate {...props} />,
    software: <SoftwareTemplate {...props} />,
    choose: <ChooseTemplate {...props} />,
  };
  return <div>{types[type]}</div>;
};
